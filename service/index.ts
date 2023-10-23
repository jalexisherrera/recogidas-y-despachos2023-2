/* const API_URL = 'https://t3orja4k27.execute-api.us-east-1.amazonaws.com/dev'; */
const API_URL = '/api';

const API_SERVICES = {
  users: `${API_URL}/users`,
  roles: `${API_URL}/roles`,
  lots: `${API_URL}/lots`,
  collections: `${API_URL}/collections`,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export { API_SERVICES, fetcher };