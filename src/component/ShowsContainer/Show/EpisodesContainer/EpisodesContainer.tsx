import { FC } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { InitialShowType } from '../../../../redux/types/showsTypes';
import Season from './Season/Season';
import styles from './EpisodesContainer.module.scss';
import { toFixed } from '../../../../utils/object-helper';

const EpisodesContainer: FC<InitialShowType> = ({
  title,
  yourRating,
  yourAverageEpisode,
  content,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/shows">
        <button type="button"> Shows </button>
      </Link>
      <Link to={`/shows/${title}`}>
        <button type="button"> Back </button>
      </Link>
      <br />
      {title} - { toFixed(yourAverageEpisode) } <br />
      { content.map((season, index) => (
        <div key={Math.random()}>
          <Route exact path={`/shows/${title}/episodes/${index + 1}`}
            render={() => (
              <Season
                title={title}
                content={content}
                seasonContent={season.seasonContent}
                index={index + 1}
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default EpisodesContainer;
