export const INCREMENT_SCORE = "INCREMENT_SCOR";
export const RESET_SCORE = "RESET_SCORE";

export const incrementScore = (payload) => {
  return {
    payload,
    type: INCREMENT_SCORE,
  };
};

export const resetScore = () => {
  return {
    type: RESET_SCORE,
  };
};
