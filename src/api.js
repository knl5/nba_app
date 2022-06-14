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

function getGamesApi() {
  const response = axios.get('https://www.balldontlie.io/api/v1/games', {
    ...header,
  });

  return response;
}

function getTeamsApi() {
  const response = axios.get('https://www.balldontlie.io/api/v1/teams', {
    ...header,
  });

  return response;
}

function getGameStats({ gameId }) {
  const response = axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2018&game_ids[]=${gameId}`, {
    ...header,
  });

  return response;
}

export { getPlayersApi, getGamesApi, getTeamsApi, getGameStats };