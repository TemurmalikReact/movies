import { FC } from 'react';
import { InitialContentType } from '../../../../redux/types/showsTypes';
import { toFixed } from '../../../../utils/object-helper';
import styles from '../Show.module.scss';

export type ShowType = {
  title: string;
  yourRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
  episodeLength?: number | null;
  yourAverageEpisode?: number | null;
  date?: number | null;
  favorite?: number | null;
  yourViews: number | null;
  content: Array<InitialContentType>;
};

const ShowDescription: FC<ShowType> = ({ yourRating, yourViews, favorite, date, yourAverageEpisode, content }) => {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <p className={styles.original_title}> Original Titan: Shingeki no Kyojin </p>
        <div className={styles.others}>
          <span> Tv-Series </span> -<p> 2013-2022 </p> -<p> 18+ </p> -<p> 24min </p>
        </div>
      </div>
      <div className={styles.rating}>
        <div>
          YOUR RATING
          <p>
            {yourRating}<span>/10 </span>{' '}
          </p>
        </div>
        <div>
          YOUR AVERAGE EPISODE
          <p>
            { toFixed(yourAverageEpisode) }
            <span>/10 </span>{' '}
          </p>
        </div>
        <div>
          YOUR VIEWS
          <p>
            <span>{yourViews}  </span>{' '}
          </p>
        </div>
        <div>
          FAVORITE
          <p> {favorite} </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDescription;
