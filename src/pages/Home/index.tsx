import { useEffect, useRef, useState } from 'react';

import video from '../../assets/video/promo.mp4';
import styles from './styles.module.scss';

export function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles.VideoPromoWrapper}>
      {videoRef.current?.ended ? (
        'Contact us'
      ) : (
        <video width="80%" ref={videoRef} controls>
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
