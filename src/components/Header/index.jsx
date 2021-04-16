import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.signupHeader}>
            <div className={styles.logo}>
              <Link to="/">Logo</Link>
            </div>
            <div className={styles.loginButton}>
              <Link to="/todo">Todo</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
