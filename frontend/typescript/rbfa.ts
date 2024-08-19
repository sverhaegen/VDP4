import { BACKEND_BASE_URL } from './config.js';
import { GetUpcomingMatchAPIResponse } from './types/rbfa.js';
/**********************************************/
// UPCOMING MATCH
/**********************************************/
const upcomingMatch: GetUpcomingMatchAPIResponse = await fetch(
  `${BACKEND_BASE_URL}/upcomingMatch`
)
  .then((response) => {
    return response.json();
  })
  .then((data: GetUpcomingMatchAPIResponse) => {
    return data;
  });

const homeTeamHTMLElement: HTMLElement | null =
  document.getElementById('homeTeam');
if (homeTeamHTMLElement) {
  homeTeamHTMLElement.innerHTML =
    upcomingMatch.data.upcomingMatch.homeTeam.name;
}
const awayTeamHTMLElement: HTMLElement | null =
  document.getElementById('awayTeam');
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
