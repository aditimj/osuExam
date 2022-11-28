import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';





function save(data) {
  return apiRequest('POST', '/saveStudentResponse', API_BASE, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  save: save,
  
};