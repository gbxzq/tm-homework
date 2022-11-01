import React from 'react';

import styles from './styles.module.scss';

const NAVIGATION_LINKS = [
  { label: 'Our process', link: '' },
  { label: 'Our work', link: '' },
  { label: 'About us', link: '' },
];

export function Header() {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.HeaderLogo}>Logo</div>
      <div className={styles.HeaderNavigation}>
        {NAVIGATION_LINKS.map(({ label }) => (
          <span className={styles.HeaderNavigationItem}>{label}</span>
        ))}
      </div>
    </div>
  );
}
