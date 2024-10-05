import UsersList from '@/components/UsersList';
import { API_URL } from '@/config';
import { type ResponseData } from '@/types';
import styles from './page.module.css';

export default async function Home() {
  // Fetch initial data from API
  const res = await fetch(`${API_URL}?page=1`);
  const data: ResponseData = await res.json();
  const users = data.data;

  return (
    <div className={styles.page}>
      <UsersList initialUsers={users} />
    </div>
  );
}
