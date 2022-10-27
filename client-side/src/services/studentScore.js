import { useSelector } from 'react-redux';

// a custom hook calculate student score, according to calculation
export default function useStudentScore() {
  const score = useSelector(({ studentScore }) => studentScore.score);
  const totalQuestions = useSelector(({ wordsReducer }) => wordsReducer.data.data);
  let studentScore;
  if (totalQuestions) {
    studentScore = ((score / totalQuestions.length) * 100).toFixed();
  }
  return studentScore;
}
