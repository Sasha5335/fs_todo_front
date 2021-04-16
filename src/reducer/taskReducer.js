import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { values: task } = action;

      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, task],
      };
    }

    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;

      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TASK: {
      const { id } = action;
      const { tasks } = state;

      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== id),
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { id, values } = action;
      const { tasks } = state;

      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex((task) => task.id === id);
      const task = newTasks[taskIndex];

      newTasks[taskIndex] = { ...task, ...values };

      return {
        ...state,
        tasks: newTasks,
      };
    }
    default: {
      return state;
    }
  }
}

export default taskReducer;
