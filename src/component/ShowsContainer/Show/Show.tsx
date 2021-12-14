import { FC } from 'react';
import { Link } from 'react-router-dom';
import { InitialContentType } from '../../../redux/types/showsTypes';
import styles from './Show.module.scss';
import ShowDescription from './ShowComponents/ShowDescription';
import ShowImages from './ShowComponents/ShowImages';
import ShowNavbar from './ShowComponents/ShowNavbar';

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

const Show: FC<ShowType> = ({
  title, date, favorite, yourRating, yourViews, yourAverageEpisode, content, episodeLength
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}> 
        {title} 
        <Link to="/shows" className={styles.shows}>
          <button type="button"> SHOWS </button>
        </Link>
      </div>
      <ShowDescription
        yourViews={yourViews}
        title={title}
        content={content}
        date={date}
        favorite={favorite}
        yourRating={yourRating}
        yourAverageEpisode={yourAverageEpisode} />
      <ShowNavbar 
        title={title} 
        seasonsLength={content.length}
        episodeLength={episodeLength} />
      <ShowImages />
    </div>
  );
};

export default Show;
