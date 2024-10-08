'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { type User } from '@/types';
import styles from './UserCard.module.css';

function UserCard({ user }: { user: User }) {
  const [isActive, setActive] = useState(false);
  const elementRef = useRef<HTMLLIElement | null>(null);

  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  return (
    <li
      key={user.id}
      className={styles.card}
      tabIndex={0}
      onFocus={activate}
      onBlur={deactivate}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      ref={elementRef}
      data-active={isActive}
    >
      <article
        className={styles.card__article}
        aria-labelledby={`${user.id}-name`}
      >
        <div className={styles.avatar}>
          <div className={styles.avatar__bg}></div>
          <div className={styles.avatar__main}>
            <Image
              src={user.avatar}
              className={styles.avatar__img}
              width={100}
              height={100}
              alt={`Avatar for ${user.first_name} ${user.last_name}`}
              priority
            />
            <div className={styles.avatar__badge} data-active={isActive}>
              {user.id}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__main}>
            <span id={`${user.id}-name`} className={styles.info__name}>
              {user.first_name} {user.last_name}
            </span>
          </div>
          <a href={`mailto:${user.email}`} className={styles.info__detail}>
            <svg
              className={styles.info__icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <span className={styles.info__email}>{user.email}</span>
          </a>
        </div>
      </article>
    </li>
  );
}
export default UserCard;
