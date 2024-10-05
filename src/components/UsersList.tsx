'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { API_URL } from '@/config';
import { type ResponseData, type User } from '@/types';

function UsersList({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [pageNum, setPageNum] = useState(1);
  const [blockRequests, setBlockedState] = useState(false);

  // Increment page and fetch data through the useEffect
  const goToNextPage = () => {
    setPageNum((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // If initial data is provided & we are on the first page,
    // or if we're preventing further requests - do not fetch data
    if ((initialUsers[0] && pageNum === 1) || blockRequests) return;

    const fetchNextPageData = async () => {
      const res = await fetch(`${API_URL}?page=${pageNum}`);
      const data: ResponseData = await res.json();
      const newUsers = data.data;

      if (pageNum + 1 > data.total_pages) {
        // We've reached the end of the feed at this point
        setBlockedState(true);
      }

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
    };

    fetchNextPageData();
  }, [blockRequests, pageNum, initialUsers]);

  return (
    <main>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Image
              src={user.avatar}
              width={75}
              height={75}
              alt={`Avatar for ${user.first_name} ${user.last_name}`}
            />
            <span>
              {user.first_name} {user.last_name}
            </span>
          </li>
        ))}
      </ul>

      {blockRequests ? (
        <p>You have reached the end of this list</p>
      ) : (
        <button type="button" onClick={goToNextPage} disabled={blockRequests}>
          Load More
        </button>
      )}
    </main>
  );
}

export default UsersList;
