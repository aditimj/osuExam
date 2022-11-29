import { apiRequest } from './utils';
const API_BASE = 'http://localhost:8090';





function save(data, roomId, seatId, questionId) {
  return apiRequest('POST', '/saveStudentResponse/'+roomId+"/"+seatId+"/"+questionId, API_BASE, data);
}

function getAllStudentResponse(id) {
  return apiRequest('GET', '/getAllStudentResponseForExam/'+id, API_BASE);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  save: save,
  getAllStudentResponse: getAllStudentResponse
};