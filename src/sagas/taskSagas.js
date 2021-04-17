import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions';
import * as API from '../api';

export function* getTasksSaga(action) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks();

    yield put(ActionCreators.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(ActionCreators.getTasksError({ error }));
  }
}

export function* createTaskSaga(action) {
  try {
    const {
      payload: { task },
    } = action;

    const {
      data: { data: newTask },
    } = yield API.createTask(task);

    yield put(ActionCreators.createTaskSuccess({ task: newTask }));
  } catch (error) {
    yield put(ActionCreators.createTaskError({ error }));
  }
}

export function* deleteTaskSaga(action) {
  try {
    const {
      payload: { id },
    } = action;

    const {
      data: { data },
    } = yield API.deleteTask({ id });

    yield put(ActionCreators.deleteTaskSuccess({ id }));
  } catch (error) {
    yield put(ActionCreators.deleteTaskError({ error }));
  }
}
