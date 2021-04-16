import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: 0,
      body: 'test task',
      isDone: false,
    },
  ],
};

let serial = 1;

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { values: task } = action;

      const newTasks = [...tasks, { ...task, id: serial++ }];

      return {
        ...state,
        tasks: newTasks,
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
