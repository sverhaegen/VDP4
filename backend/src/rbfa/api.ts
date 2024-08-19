import { GetUpcomingMatchAPIResponse } from './types.js';

export const getUpcomingMatch: Promise<GetUpcomingMatchAPIResponse> = fetch(
  'https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables={"teamId":"307846","language":"nl"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"82e90ddafc6823e8cc5c5d876073e0e01c261f6844ad8e8bab5b8fd0b17da5e1"}}'
)
  .then((response) => {
    return response.json();
  })
  .then((data: GetUpcomingMatchAPIResponse) => {
    return data;
  });
