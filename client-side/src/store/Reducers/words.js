import {
  LOAD_WORDS_ERROR,
  LOAD_WORDS_LOADING,
  LOAD_WORDS_SUCCESS,
} from "./../Actions/words";

// intitia State for data
const initialState = {
  data: [],
  loading: true,
  error: "",
};

// reducer with actions and pay load, to , to set state
export default function wordsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WORDS_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_WORDS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case LOAD_WORDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
