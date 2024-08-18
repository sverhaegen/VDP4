import { BACKEND_BASE_URL } from './config.js';
import { getUpcomingMatch } from './rbfa/api.js';

console.log('Test');

fetch(BACKEND_BASE_URL).then((response) => {
  console.log(response);
});

console.log(await getUpcomingMatch);
