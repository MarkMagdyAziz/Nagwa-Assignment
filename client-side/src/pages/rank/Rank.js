import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetScore } from '../../store/Actions/score';
import useStudentScore from '../../services/studentScore';
import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getStudentRank } from '../../services/examAPI';

export default function Rank() {
  const dispatch = useDispatch();
  const [studentRank, setStudentRank] = useState(0);
  const studentScore = useStudentScore();
  const navigate = useNavigate();
  const [peersRanks, setPeersRanks] = useState([]);
  useEffect(() => {
    // POST request using axios inside service, to get the student rank
    getStudentRank(studentScore).then(({ rank }) => {
      let sorted = rank.peersRanks.map((rank) => rank).sort(order);
      setStudentRank(rank.rank);
      setPeersRanks(sorted);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // on click try again button handle go to practive quuiz again
  const handleTryAgain = () => {
    dispatch(resetScore());
    navigate('/', { replace: true });
  };
  // order items
  const order = (a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Your Rank : {studentRank}</h3>
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
                <th>Peers Ranks</th>
              </tr>
            </thead>
            <tbody>
              {peersRanks !== undefined &&
                peersRanks.map((peerRank, index, arr) => {
                  return (
                    <tr key={index}>
                      <td>{peerRank}</td>
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
