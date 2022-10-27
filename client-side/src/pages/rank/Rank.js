import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetScore } from '../../store/Actions/score';
import useStudentScore from '../../services/studentScore';
import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getStudentRank } from '../../services/examAPI';

export default function Rank() {
  const dispatch = useDispatch();
  const [rank, setRank] = useState({});
  const score = useSelector(({ studentScore }) => studentScore.score);
  const { data } = useSelector(({ wordsReducer }) => wordsReducer.data);
  const studentScore = useStudentScore();
  const navigate = useNavigate();

  useEffect(() => {
    // POST request using axios inside service, to get the student rank
    getStudentRank(studentScore).then((rank) => setRank(rank));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // on click try again button handle go to practive quuiz again
  const handleTryAgain = () => {
    dispatch(resetScore());
    navigate('/', { replace: true });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h3>Your Rank : {rank.rank}</h3>
          <h3>Your Score : {score * 10}</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table
            striped
            bordered
            hover
            size="sm">
            <thead>
              <tr>
                <th>Word</th>
                <th>Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {data !== undefined &&
                data.map((part, index, arr) => {
                  return (
                    <tr key={part.id}>
                      <td>{part.word}</td>
                      <td>{part.pos}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleTryAgain}>
            Try Again
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
