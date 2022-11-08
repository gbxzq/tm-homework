import React, { useState } from 'react';
import arrow from '../../assets/images/arrow.svg';

import styles from './styles.module.scss';

const First = ({ ...props }) => (
  <div className={styles.Circle} {...props}>
    Create your idea
  </div>
);
const Second = ({ ...props }) => (
  <div className={`${styles.Circle} ${styles.CircleWithArrow}`} style={{ alignSelf: 'center' }} {...props}>
    Meet with us
  </div>
);
const Third = () => (
  <div className={`${styles.Circle} ${styles.CircleWithArrow}`} style={{ alignSelf: 'flex-end' }}>
    Your idea realization
  </div>
);

export function OurProcess() {
  const [visibleComponents, setVisibleComponents] = useState<number[]>([0]);

  const components = [First, Second, Third];

  const handleHover = (i: number) => () => {
    setVisibleComponents(prevState => [...prevState, i + 1]);
  };

  return (
    <div className={styles.ContentContainer}>
      {components.map((Component, index) => {
        console.log(visibleComponents[visibleComponents.length - 1], index);

        return (
          visibleComponents.includes(index) && (
            <Component onMouseEnter={visibleComponents[visibleComponents.length - 1] === index && handleHover(index)} />
          )
        );
      })}
    </div>
  );
}
