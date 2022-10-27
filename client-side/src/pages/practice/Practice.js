import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWords } from '../../store/Actions/words';
import Loader from '../../components/loader/Loader';
import './style.css';
import Question from '../../components/question/Question';

export default function Practice() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(({ wordsReducer }) => wordsReducer);

  useEffect(() => {
    dispatch(loadWords());
    return () => {
      //cleanup;
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Question questions={data.data} />
        </>
      )}
    </>
  );
}
