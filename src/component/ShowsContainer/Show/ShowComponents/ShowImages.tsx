import { FC } from 'react';
import poster from '../../../../assets/images/shows/attack on titan/poster.png';
import trailer from '../../../../assets/images/shows/attack on titan/trailer.png';
import styles from '../Show.module.scss';

const ShowImages: FC = () => {
  return (
    <div className={styles.images}>
      <div>
        <img src={poster} />
      </div>
      <div>
        <img src={trailer} />
      </div>
      <div className={styles.info}>
        <div> 5+ VIDEOS </div>
        <div> 99+ PHOTOS </div>
      </div>
    </div>
  );
};

export default ShowImages;
