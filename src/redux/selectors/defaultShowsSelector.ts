import { InitialShowType } from '../types/showsTypes';

const defaultShowsSelector = (state: Array<InitialShowType>): Array<InitialShowType> => {
  return state.map((show): InitialShowType => {
    let showSummary = 0;
    let episodeLength = 0;
    show.content.forEach((season) => {
      season.seasonContent.forEach((episode) => {
        showSummary += episode.yourRating;
      });
        episodeLength += season.seasonContent.length;
      });
    return { 
      ...show, 
        episodeLength, 
        title: show.title, 
        yourAverageEpisode: showSummary / episodeLength, 
      };
    },
  );
};

export default defaultShowsSelector;
