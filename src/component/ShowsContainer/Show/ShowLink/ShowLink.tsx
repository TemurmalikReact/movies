import { FC } from 'react';
import { toFixed } from '../../../../utils/object-helper';
import styles from './ShowLink.module.scss';

export type ShowLinkType = {
  title: string;
  index: number | null;
  yourViews: number | null;
  yourRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
  yourAverageEpisode: number | null;
};

const ShowLink: FC<ShowLinkType> = ({ 
  title, index, yourAverageEpisode, yourRating, yourViews 
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <span>{ index }</span> - {title} - {toFixed(yourAverageEpisode)}
      </div>
      <div className={styles.rating}>
        <div>
          Overall - { toFixed(yourRating) }/10 
        </div>
        <div>
          Your Views - { yourViews }
        </div>
      </div>
    </div>
  );
};

export default ShowLink;
