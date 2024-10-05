import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h2 className={styles.error__heading}>Not Found</h2>
      <p className={styles.error__details}>Could not find requested resource</p>
      <Link href="/" className={styles.error__link}>
        Return Home
      </Link>
    </div>
  );
}
