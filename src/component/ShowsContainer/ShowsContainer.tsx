import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ReducerType } from '../../redux/store';
import { InitialShowType } from '../../redux/types/showsTypes';
import css from './ShowsContainer.module.scss';
import Show from './Show/Show';
import ShowLink from './Show/ShowLink/ShowLink';
import EpisodesContainer from './Show/EpisodesContainer/EpisodesContainer';
import { sortByAlphabet, sortByDate, sortByYourAverageRating, SortByYourFavorite, sortByYourRating, SortByYourViews } from '../../redux/showsReducer';

type sortButtonTypes = {
  text: string, action: () => void;
}

const ShowsPage: FC = () => {
  const shows = useSelector((state: ReducerType): Array<InitialShowType> => state.shows);
  const dispatch = useDispatch()

  const sortButtons: Array<sortButtonTypes> = [
    { text: "Alphabet", action: sortByAlphabet },
    { text: "Date", action: sortByDate },
    { text: "Favorites", action: SortByYourFavorite },
    { text: "Your rating", action: sortByYourRating },
    { text: "Your average episode rate", action: sortByYourAverageRating },
    { text: "Your Views", action: SortByYourViews },
  ]

  const [change, setChange] = useState(false)
  const [active, setActive] = useState(4)

  const action = (actionCreator: () => void, index: number) => {
    dispatch(actionCreator()); 
    setActive(index) 
    setChange(prev => !prev)
  }

  const SortButton = () => {
    return (
      <div className={css.sort_btn}> 
        { sortButtons.map((sort, index) => 
          <div key={sort.text} className={classNames(active === index && css.active)}
            onClick={() => action(sort.action, index)}> { sort.text } </div> )}
      </div>
    )
  }

  const SortWrapper = () => {
    return (
      <div className={css.sort_wrapper}>
        <div onClick={() => setChange(prev => !prev)} > 
          <div> Sort: { sortButtons[active].text } </div>
          <svg version="1.1" width="24" height="24" viewBox="0 0 32 32">
            { change ? <path d="M16.767 12.809l-0.754-0.754-6.035 6.035 0.754 0.754 5.281-5.281 5.256 5.256 0.754-0.754-3.013-3.013z" fill="#000000"/> : <path d="M15.233 19.175l0.754 0.754 6.035-6.035-0.754-0.754-5.281 5.281-5.256-5.256-0.754 0.754 3.013 3.013z" fill="#000000"/> }
          </svg>
        </div>
      </div> 
    )
  }

  return (
    <div>
      <Route exact path="/shows" render={() => (
        <div className={css.wrapper}>
          <SortWrapper />
          { change && <SortButton /> } 
          { shows.map((show, index) => (
            <Link key={show.title} to={`/shows/${show.title}`}>
              <ShowLink 
                title={show.title} 
                index={index + 1}
                yourRating={show.yourRating} 
                yourViews={show.yourViews}
                yourAverageEpisode={show.yourAverageEpisode} />
            </Link> 
          ))}
        </div> 
      )} />

      { shows.map((show, favorite) => (
        <Route key={show.title} exact path={`/shows/${show.title}`} render={() => (
          <Show
            title={show.title}
            yourRating ={show.yourRating}
            date={show.date}
            yourViews={show.yourViews}
            favorite={favorite + 1}
            episodeLength={show.episodeLength}
            yourAverageEpisode={show.yourAverageEpisode}
            content={show.content} />
          )} />
      ))}

      { shows.map((show) => (
        <Route key={show.title} path={`/shows/${show.title}/episodes`} render={() => (
          <EpisodesContainer 
            key={show.title}
            title={show.title}
            yourViews={show.yourViews}
            yourRating={show.yourRating}
            yourAverageEpisode={show.yourAverageEpisode}
            content={show.content} />
          )} />
      ))}
    </div>
  );
};

export default ShowsPage;
