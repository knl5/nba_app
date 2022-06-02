import axios from 'axios';

const header = {
  'Accept': 'application/json',
  mode: 'no-cors',
};

function getPlayersApi() {
  const response = axios.get('https://www.balldontlie.io/api/v1/players', {
    ...header,
  });

  return response;
}

export default getPlayersApi;