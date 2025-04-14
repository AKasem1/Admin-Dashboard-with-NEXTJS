import styles from '@/app/ui/login/login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input placeholder="username" type="text"/>
        <input placeholder="password" type="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;