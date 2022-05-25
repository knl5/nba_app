import axios from 'axios';

const header = {
  'Accept': 'application/json',
  mode: 'no-cors',
};

function getTestApi() {
  const response = axios.get('https://www.balldontlie.io/api/v1/stats', {
    ...header,
  });

  return response;
}

export default getTestApi;