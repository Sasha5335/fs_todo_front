import styles from './TaskList.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../../actions';

import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';

const TaskList = (props) => {
  const { tasks, isFetching, error } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getTasksRequest());
  }, [dispatch]);

  return (
    <>
      <section className={styles.todoArrMasage}>
        {isFetching && 'LOADING...'}
        {error && JSON.stringify(error)}

        {tasks.map((task) => {
          return (
            <article className={styles.todoMasage} key={task}>
              <div className={styles.todoMasageWrapper}>
                {JSON.stringify(task, null, 8)}
              </div>

              <input
                type="checkbox"
                className={styles.checked}
                checked={task.isFetching}
              />

              <Icon
                className={styles.removeBtn}
                onClick={() => {
                  // deleteTaskSuccess(id);
                }}
                path={mdiBeakerRemoveOutline}
              />
            </article>
          );
        })}
      </section>
    </>
  );
};

export default TaskList;
