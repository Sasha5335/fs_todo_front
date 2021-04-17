import styles from './TaskList.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as TaskCreators from '../../actions';

import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';

const TaskList = (props) => {
  const { tasks, isFetching, error, deleteTaskSuccess } = props;
  return (
    <>
      <section className={styles.todoArrMasage}>
        {isFetching && 'LOADING...'}
        {error && JSON.stringify(error)}

        {tasks.map((task) => {
          const { id, body } = task;

          return (
            <article className={styles.todoMasage} key={id}>
              <div className={styles.todoMasageWrapper}>
                {JSON.stringify(body, null, 8)}
              </div>

              <input
                type="checkbox"
                className={styles.checked}
                checked={task.isFetching}
              />

              <Icon
                className={styles.removeBtn}
                onClick={() => {
                  deleteTaskSuccess(id);
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

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = (dispatch) => ({
  deleteAction: (id) => dispatch(TaskCreators.deleteTaskSuccess(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
