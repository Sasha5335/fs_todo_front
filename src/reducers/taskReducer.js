import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestHandler = produce((draft, action) => {
  draft.isFetching = true;
});

const errorHandler = produce((draft, action) => {
  const {
    payload: { error },
  } = action;
  draft.error = error;
  draft.isFetching = false;
});

const handlers = {
  [ACTION_TYPES.GET_TASKS_REQUEST]: requestHandler,
  [ACTION_TYPES.CREATE_TASK_REQUEST]: requestHandler,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: requestHandler,

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draft, action) => {
    const {
      payload: { tasks },
    } = action;

    draft.isFetching = false;
    draft.tasks.push(...tasks);
  }),
  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { task },
    } = action;
    draft.isFetching = false;
    draft.tasks.push(task);
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draft, action) => {
    const {
      payload: { id },
    } = action;
    draft.isFetching = false;
    draft.tasks = draft.tasks.filter((task) => task.id !== id);
  }),

  [ACTION_TYPES.GET_TASKS_ERROR]: errorHandler,
  [ACTION_TYPES.CREATE_TASK_ERROR]: errorHandler,
  [ACTION_TYPES.DELETE_TASK_ERROR]: errorHandler,
};

function taskReducer(state = initialState, action) {
  const { type } = action;

  if (handlers[type]) {
    return handlers[type](state, action);
  }
  return state;
}

export default taskReducer;
