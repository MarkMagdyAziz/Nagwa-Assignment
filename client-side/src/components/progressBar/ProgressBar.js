import React from 'react';
import { ProgressBar as BootstrapProgress } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function ProgressBar(props) {
  let { progress } = props;
  // calculate progress according to count number of question
  const totalQuestions = useSelector(({ wordsReducer }) => wordsReducer.data.data.length);
  const studentProgress = ((progress / totalQuestions) * 100).toFixed();

  return (
    <BootstrapProgress
      striped
      variant="success"
      now={studentProgress}
      label={`${studentProgress}%`}
      min={0}
      max={100}
    />
  );
}
