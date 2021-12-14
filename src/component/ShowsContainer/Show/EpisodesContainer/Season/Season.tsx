import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { InitialContentType, InitialEpisodeType } from '../../../../../redux/types/showsTypes';
import styles from '../EpisodesContainer.module.scss';
import { toFixed } from '../../../../../utils/object-helper';

type SeasonTypes = {
  index: number;
  content: Array<InitialContentType>;
  title: string;
  seasonContent: Array<InitialEpisodeType>;
};

const Season: FC<SeasonTypes> = ({ title, content, index, seasonContent }) => {
  let summary = 0;
  for (const episode of seasonContent) summary += episode.yourRating;
  summary /= seasonContent.length;
  
  return (
    <div>
      { content.map((_, i) => (
        <Link to={`/shows/${title}/episodes/${i + 1}`}
          className={classnames(styles.link, i + 1 === index && styles.active)}>
          { i + 1 }
        </Link>
      ))}
      <br />
      { index } - season Average - { toFixed(summary) } <br />
      { seasonContent.map((episode, i) => (
        <div className={styles.episode} key={episode.title}>
          <div className={styles.num}> {i + 1}. </div>  
          { episode.title } - {episode.yourRating} <br />
        </div>
      ))}
    </div>
  );
};

export default Season;
