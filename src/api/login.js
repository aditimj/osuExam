import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';





function savelogin(data) {
  return apiRequest('POST', '/login', API_BASE, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  savelogin: savelogin,
  
};