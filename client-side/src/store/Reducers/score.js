import { INCREMENT_SCORE, RESET_SCORE } from "../Actions/score";

const initialState = { score: 0 };

export default function studentScore(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 0,
      };
    default:
      return state;
  }
}
