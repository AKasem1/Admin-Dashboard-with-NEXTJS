import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Moustafa Mohamed
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>
              1 Jan 2023
            </td>
            <td>$3200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ayman Hefny
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>
              1 Jan 2023
            </td>
            <td>$3200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Leo Messi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>
              1 Jan 2023
            </td>
            <td>$3200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Transactions;