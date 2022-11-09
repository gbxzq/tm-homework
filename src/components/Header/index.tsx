import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import styles from './styles.module.scss';

import { ROUTES } from '../../constants';

const NAVIGATION_LINKS = [
  { label: 'Our process', link: ROUTES.OUR_PROCESS },
  { label: 'About us', link: ROUTES.ABOUT_US },
];

export function Header() {
  const { pathname } = useLocation();
  const [currentTab, setCurrentTab] = useState<string>(pathname);
  const navigate = useNavigate();

  const handleNavigate = (route: ROUTES) => () => {
    setCurrentTab(route);
    navigate(route);
  };

  console.log(pathname);

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
            className={`${styles.HeaderNavigationItem} ${link === currentTab && styles.HeaderActiveNavigationItem}`}
            onClick={handleNavigate(link)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
