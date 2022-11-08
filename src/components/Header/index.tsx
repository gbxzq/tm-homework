import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import styles from './styles.module.scss';

import { ROUTES } from '../../constants';

const NAVIGATION_LINKS = [
  { label: 'Our process', link: ROUTES.OUR_PROCESS },
  { label: 'Our work', link: ROUTES.OUR_WORK },
  { label: 'About us', link: ROUTES.ABOUT_US },
];

export function Header() {
  const [currentTab, setCurrentTab] = useState<string>();
  const navigate = useNavigate();

  const handleNavigate = (label: string, route: ROUTES) => () => {
    setCurrentTab(label);
    navigate(route);
  };

  return (
    <div className={styles.HeaderWrapper}>
      <div
        className={styles.HeaderLogo}
        onClick={() => {
          navigate('/');
          setCurrentTab('');
        }}
      >
        <img src={logo} width="150px" alt="logo" />
      </div>
      <div className={styles.HeaderNavigation}>
        {NAVIGATION_LINKS.map(({ label, link }) => (
          <span
            className={`${styles.HeaderNavigationItem} ${label === currentTab && styles.HeaderActiveNavigationItem}`}
            onClick={handleNavigate(label, link)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
