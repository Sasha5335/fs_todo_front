import styles from './ToDoLIst.module.scss';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

const ToDoPage = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <h1>ToDo list</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default ToDoPage;
