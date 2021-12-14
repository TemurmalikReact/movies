export type InitialEpisodeType = {
  title: string;
  yourRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
};

export type InitialContentType = {
  seasonContent: Array<InitialEpisodeType>;
};

export type InitialShowType = {
  title: string;
  yourRating: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
  date?: number | null;
  yourViews: number | null;
  episodeLength?: number | null;
  yourAverageEpisode?: number | null;
  content: Array<InitialContentType>;
};
