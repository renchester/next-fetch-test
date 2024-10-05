'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className={styles.error}>
        <h2 className={styles.error__heading}>Something went wrong!</h2>

        <button className={styles.error__link} onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
