import styles from './TaskForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as ActionCreators from '../../actions';
import { useDispatch } from 'react-redux';

import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const ToDoPage = (props) => {
  const dispatch = useDispatch();

  const values = {
    body: '',
    // dedline: '',
    isDone: false,
  };

  const onSubmit = (values, formikBag) => {
    dispatch(ActionCreators.createTaskRequest(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name="body" />
        <ErrorMessage name="body" component="div" />
        {/* <Field name="dadline" /> */}

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

export default ToDoPage;
