'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '@/config';
import { type ResponseData, type User } from '@/types';
import UserCard from './UserCard';

type FetchStatus = 'idle' | 'loading' | 'blocked' | 'error';

function UsersList({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [pageNum, setPageNum] = useState(1);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('idle');

  const isBlocked = fetchStatus === 'blocked';
  const isDisabled = isBlocked || fetchStatus === 'error';
  // Increment page and fetch data through the useEffect
  const goToNextPage = () => {
    setPageNum((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // If initial data is provided & we are on the first page,
    // or if we're preventing further requests - do not fetch data
    if ((initialUsers[0] && pageNum === 1) || isBlocked) return;

    const fetchNextPageData = async () => {
      try {
        setFetchStatus('loading');

        const res = await fetch(`${API_URL}?page=${pageNum}`);
        const data: ResponseData = await res.json();
        const newUsers = data.data;

        /**
         * NOTE: Currently, we are relying on the API's total_pages property
         * to mark if we have reached the end. If that is not available,
         * use the following to check if there is no more data returned
         */
        // if (!newUsers || newUsers.length <= 0) {
        //   // We've reached the end
        //   setBlockRequests(true);
        // }

        setUsers((prevState) => prevState.concat(newUsers));

        // Check if there are more pages left
        if (pageNum + 1 > data.total_pages) {
          // We've reached the end of the feed at this point
          setFetchStatus('blocked');
        } else {
          setFetchStatus('idle');
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(`ERROR: ${error.message}`);
        }
        setFetchStatus('error');
      }
    };

    fetchNextPageData();
  }, [isBlocked, pageNum, initialUsers]);

  return (
    <main>
      <ul>
        {users.length > 0 ? (
          users.map((user: User) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>There&apos;s nothing to see here...</p>
        )}
      </ul>

      {isBlocked ? (
        <p>You have reached the end of this list</p>
      ) : fetchStatus === 'error' ? (
        <p>Something went wrong...</p>
      ) : (
        <button type="button" onClick={goToNextPage} disabled={isDisabled}>
          Load More
        </button>
      )}
    </main>
  );
}

export default UsersList;
