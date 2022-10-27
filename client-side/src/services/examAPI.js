import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

// fetch words list exam from back end point
export function getWordsList() {
  return instance({
    url: 'words',
    method: 'GET',
  })
    .then(({ data }) => data)
    .catch((err) => alert(err));
}
// fetch rank from back end point
export function getStudentRank(studentScore) {
  return instance({
    url: `rank?score=${studentScore}`,
    method: 'POST',
  })
    .then(({ data }) => data)
    .catch((err) => alert(err));
}
