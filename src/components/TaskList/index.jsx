import React from 'react';
import { connect } from 'react-redux';
import * as TaskCreators from '../../actions/taskCreators';
import styles from './TaskList.module.scss';
import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';

const TaskList = (props) => {
  const { tasks, updateAction, deleteAction } = props;

  return (
    <>
      <section className={styles.todoArrMasage}>
        {tasks.map((task) => {
          const { id, body } = task;

          return (
            <article className={styles.todoMasage} key={id}>
              <div className={styles.todoMasageWrapper}>{body}</div>

              <input
                type="checkbox"
                className={styles.checked}
                checked={task.isDone}
                onChange={({ target: { checked } }) =>
                  updateAction({
                    id,
                    values: {
                      isDone: checked,
                    },
                  })
                }
              />

              <Icon
                className={styles.removeBtn}
                onClick={() => {
                  deleteAction(id);
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

const mapStateToProps = ({ tasks }) => ({ tasks });
const mapDispatchToProps = (dispatch) => ({
  deleteAction: (id) => dispatch(TaskCreators.deleteTask(id)),
  updateAction: ({ id, values }) =>
    dispatch(TaskCreators.updateTask({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
