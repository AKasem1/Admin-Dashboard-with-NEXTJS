import styles from '@/app/ui/login/login.module.css';
import { authenticate } from '../lib/actions';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input placeholder="username" type="text" name='username'/>
        <input placeholder="password" type="password" name='password'/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;