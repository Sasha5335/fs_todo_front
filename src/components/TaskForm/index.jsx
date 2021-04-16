import styles from './TaskForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createTaskRequest } from '../../actions/taskCreators';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const ToDoPage = (props) => {
  const { createTaskAction } = props;

  const onSubmit = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="body" />
        <ErrorMessage name="body" component="div" />

        <button type="reset" className={styles.resButton}>
          Reset
        </button>

        <button type="submit" className={styles.addButton}>
          <Icon className={styles.addBtn} path={mdiPlus} />
        </button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTaskAction: (values) => dispatch(createTaskRequest(values)),
});

export default connect(null, mapDispatchToProps)(ToDoPage);
