import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Show.module.scss';

const ShowNavbar: FC<{ title: string; seasonsLength: number; episodeLength: number }> = ({
  title,
  seasonsLength,
  episodeLength,
}) => {
  return (
    <div className={styles.nav}>
      <p>
        Guide
        <Link to={`/shows/${title}/episodes/1`}>
          {seasonsLength} seasons & {episodeLength} episodes
        </Link> {'>'}
      </p>
      <div className={styles.nav__content}>
        <div className={styles.item}> Cast & Crew </div>-
        <div className={styles.item}> Users Reviews </div>-
        <div className={styles.item}> Trivia </div>-
        <div className={styles.item}> IMDbPro </div>-
        <div className={styles.item}> All Topics </div>| 
        <div className={styles.item}> O </div>
      </div>
    </div>
  );
};

export default ShowNavbar;
