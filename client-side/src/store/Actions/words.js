import { getWordsList } from "./../../services/examAPI";

export const LOAD_WORDS_LOADING = "LOAD_USERS_LOADING";
export const LOAD_WORDS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_WORDS_ERROR = "LOAD_USERS_ERROR";

// action load words list
export const loadWords = () => (dispatch) => {
  dispatch({ type: LOAD_WORDS_LOADING });
  getWordsList().then(
    (data) => dispatch({ type: LOAD_WORDS_SUCCESS, data }),
    (error) =>
      dispatch({
        type: LOAD_WORDS_ERROR,
        error: error.message || "Unexpected Error!!!",
      })
  );
};
