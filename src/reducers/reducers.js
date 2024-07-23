// reducers.js
import {UPDATE_ANSWER, CALCULATE_SCORE} from './actions';

const initialState = {
  answers: {},
  score: 0,
};

const questionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };

    case CALCULATE_SCORE:
      let score = 0;

      Object.keys(state.answers).forEach(questionId => {
        const answer = state.answers[questionId];

        if (typeof answer === 'number') {
          score += answer;
        }
      });

      return {
        ...state,
        score,
      };

    default:
      return state;
  }
};

export default questionnaireReducer;
