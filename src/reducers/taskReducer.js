import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPES.GET_TASK_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.GET_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { tasks },
    } = action;

    draft.isFetching = false;
    draft.tasks.push(...tasks);
  }),
  [ACTION_TYPES.GET_TASK_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;

    draft.isFetching = false;
    draft.error = error;
  }),
  [ACTION_TYPES.CREATE_TASK_REQUEST]: produce((draft, action) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { task },
    } = action;
    draft.isFetching = false;
    draft.tasks.push(task);
  }),
  [ACTION_TYPES.CREATE_TASK_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;

    draft.isFetching = false;
    draft.error = error;
  }),
  [ACTION_TYPES.DELETE_TASK_REQUEST]: produce((draft) => {
    draft.isFetching = true;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { id },
    } = action;
    draft.isFetching = false;
    draft.tasks = draft.tasks.filter((task) => task.id !== id);
  }),
  [ACTION_TYPES.DELETE_TASK_ERROR]: produce((draft, action) => {
    const {
      payload: { error },
    } = action;
    draft.error = error;
    draft.isFetching = false;
  }),
  [ACTION_TYPES.CLEAR_TASK_ERROR]: produce((draft) => {
    draft.error = null;
  }),
};

function reducer(state = initialState, action) {
  const { type } = action;

  if (handlers[type]) {
    return handlers[type](state, action);
  }
  return state;
}

export default reducer;
