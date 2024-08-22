export type GetUpcomingMatchAPIResponse = {
  data: {
    upcomingMatch: MatchDetail;
  };
};

export type MatchDetail = {
  id: string;
  // string without timezone indication
  startTime: string;
  homeTeam: MatchDetailTeam;
  awayTeam: MatchDetailTeam;
  outcome: MatchDetailOutcome;
  series: MatchSeries;
  officials: MatchDetailOfficial[];
  showScore: boolean;
  state: string;
  startDateTimeInThePassed: boolean;
  __typename: string;
};

export type MatchDetailTeam = {
  id: string;
  name: string;
  // url
  logo: string;
  clubId: string;
  __typename: string;
};

export type MatchDetailOutcome = {
  status: string;
  homeTeamGoals: number;
  homeTeamPenaltiesScored: number;
  awayTeamGoals: number;
  awayTeamPenaltiesScored: number;
  __typename: string;
};

export type MatchSeries = {
  id: string;
  name: string;
  __typename: string;
};

export type MatchDetailOfficial = {
  lastName: string;
  firstName: string;
  status: string;
  personAssigned: boolean;
  __typename: string;
};
