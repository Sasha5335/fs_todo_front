const ACTION_TYPES = {
  CREATE_TASK_REQUEST: 'task/createRequest',
  CREATE_TASK_SUCCESS: 'task/createSuccess',
  CREATE_TASK_ERROR: 'task/createError',

  GET_TASKS_REQUEST: 'task/getRequest',
  GET_TASKS_SUCCESS: 'task/getSuccess',
  GET_TASKS_ERROR: 'task/getError',

  UPDATE_TASK_REQUEST: 'task/updateRequest',
  UPDATE_TASK_SUCCESS: 'task/updateSuccess',
  UPDATE_TASK_ERROR: 'task/updateError',

  DELETE_TASK_REQUEST: 'task/deleteRequest',
  DELETE_TASK_SUCCESS: 'task/deleteSuccess',
  DELETE_TASK_ERROR: 'task/deleteError',

  CLEAR_TASK_ERROR: 'task/clearError',
};

export default ACTION_TYPES;
