import axios from 'axios';

// fetch words list exam from back end point
export function getWordsList() {
  return axios
    .get(`http://localhost:5000/words`)
    .then(({ data }) => data)
    .catch((err) => alert(err));
}
// fetch rank from back end point
export function getStudentRank(studentScore) {
  return axios
    .post(`http://localhost:5000/rank?score=${studentScore}`)
    .then((response) => response.data)
    .catch((err) => alert(err));
}
