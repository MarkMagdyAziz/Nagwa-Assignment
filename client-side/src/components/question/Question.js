import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { incrementScore } from '../../store/Actions/score';
import { useDispatch } from 'react-redux';
import ProgressBar from '../progressBar/ProgressBar';
import { useNavigate } from 'react-router-dom';

export default function Question(props) {
  const { questions } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [questionNumber, setQuestionNumber] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState({});
  const [answerFeedback, setAnswerFeedback] = useState('');
  const [studentAnswer, setStudentAnswer] = useState('');

  useEffect(() => {
    // when component mount set current question
    handleCurrentQuestion();
    return () => {
      // clean up, component mount
      setCurrentQuestion({});
      setQuestionNumber(0);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle current question for student
  const handleCurrentQuestion = () => {
    // empty answer feedback
    setAnswerFeedback('');
    setStudentAnswer('');
    // condition check if question number less than 10, and questions is exist,
    // find current question for student
    if (questionNumber < 10 && questions) {
      const currQuestion = questions.find((question, index, arr) => index === questionNumber);
      setCurrentQuestion(currQuestion);
      setQuestionNumber(questionNumber + 1);
    }
  };

  //handle when student check radio
  const handleQuestionRadioClick = (e) => {
    // condition check if student answer correct or, incorrect
    // if correct will increment student score, with dispatch socre +1

    if (e.target.value === currentQuestion.pos) {
      setStudentAnswer('true');
      dispatch(incrementScore());
    } else {
      setStudentAnswer('false');
    }
  };

  // handle sumbmit answer, and show feedback
  const handleSubmit = (e) => {
    // prevent default behavior, and reset form radio checked
    e.preventDefault();
    e.target.reset();
    // check student answer if true or false, to give him a feedback
    studentAnswer === 'true' ? setAnswerFeedback('Correct') : setAnswerFeedback('Incorrect');
    if (questionNumber === 10) {
      navigate('/rank', { replace: true });
      setQuestionNumber(0);
    }
  };
  return (
    <Container fluid>
      <Container fluid>
        <ProgressBar progress={questionNumber} />
      </Container>

      <Container
        fluid
        className="shadow">
        <Row>
          <Col className="d-flex justify-content-center my-5 fs-5">
            <h1 className="fs-1">{currentQuestion.word}</h1>
          </Col>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row className=" my-5 d-flex justify-content-center">
            <Col
              md={6}
              key="inline-drop"
              className="mt-3 d-flex justify-content-around fs-4">
              {['noun', 'verb', 'adverb', 'adjective'].map((type) => (
                <Form.Check
                  inline
                  key={`${type}`}
                  value={`${type}`}
                  label={`${type}`}
                  name="group1"
                  type="radio"
                  disabled={answerFeedback}
                  onClick={handleQuestionRadioClick}
                />
              ))}
            </Col>
          </Row>

          <Row>
            <Col className="my-5 d-flex justify-content-center">
              <Button
                className="ms-5"
                disabled={!studentAnswer || answerFeedback}
                type="submit"
                variant="primary"
                size="md">
                Submit
              </Button>
              <Button
                className="ms-5 px-4"
                type="button"
                variant="success"
                size="md"
                onClick={handleCurrentQuestion}
                disabled={questionNumber >= 10 || !answerFeedback}>
                Next
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
      <Row className="mt-5">
        <Col className=" d-flex justify-content-center">
          <h3 className={`${answerFeedback === 'Incorrect' ? 'text-danger' : 'text-success'}`}>
            {answerFeedback}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
