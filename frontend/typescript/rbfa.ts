import { BACKEND_BASE_URL } from './config.js';
import { GetUpcomingMatchAPIResponse } from './types/rbfa.js';
/**********************************************/
// UPCOMING MATCH
/**********************************************/
const upcomingMatch: GetUpcomingMatchAPIResponse = await fetch(
  `https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables={"teamId":"307846","language":"nl"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"82e90ddafc6823e8cc5c5d876073e0e01c261f6844ad8e8bab5b8fd0b17da5e1"}}`
)
  .then((response) => {
    return response.json();
  })
  .then((data: GetUpcomingMatchAPIResponse) => {
    return data;
  });

const homeTeamHTMLElement: HTMLElement | null =
  document.getElementById('homeTeamNameID');
if (homeTeamHTMLElement) {
  homeTeamHTMLElement.innerHTML =
    upcomingMatch.data.upcomingMatch.homeTeam.name;
}
const awayTeamHTMLElement: HTMLElement | null =
  document.getElementById('awayTeamNameID');
if (awayTeamHTMLElement) {
  awayTeamHTMLElement.innerHTML =
    upcomingMatch.data.upcomingMatch.awayTeam.name;
}
const startTimeHTMLElement: HTMLElement | null =
  document.getElementById('startTime');
if (startTimeHTMLElement) {
  let startTime = upcomingMatch.data.upcomingMatch.startTime;
  startTime = new Date(startTime).toLocaleString(['nl-BE'], {
    hour: '2-digit',
    minute: '2-digit',
  });
  startTimeHTMLElement.innerHTML = startTime;
}
const startDateHTMLElement: HTMLElement | null =
  document.getElementById('startDate');
if (startDateHTMLElement) {
  let startDate = upcomingMatch.data.upcomingMatch.startTime;
  startDate = new Date(startDate).toLocaleString(['nl-BE'], {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  startDateHTMLElement.innerHTML = startDate;
}
const homeTeamImgHTMLElement: HTMLImageElement | null = document.getElementById(
  'homeTeamImgID'
) as HTMLImageElement;
if (homeTeamImgHTMLElement) {
  let homeTeamImg = upcomingMatch.data.upcomingMatch.homeTeam.logo;
  homeTeamImgHTMLElement.src = homeTeamImg;
}
const awayTeamImgHTMLElement: HTMLImageElement | null = document.getElementById(
  'awayTeamImgID'
) as HTMLImageElement;
if (awayTeamImgHTMLElement) {
  let awayTeamImg = upcomingMatch.data.upcomingMatch.awayTeam.logo;
  awayTeamImgHTMLElement.src = awayTeamImg;
}
