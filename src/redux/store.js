// redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    answers: [],
    score: 0,
  },
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, score } = action.payload;
      state.answers[questionId] = score;
      state.score = state.answers.reduce((total, currentScore) => total + (currentScore || 0), 0);
    },
  },
});

export const { setAnswer } = questionnaireSlice.actions;

const store = configureStore({
  reducer: {
    questionnaire: questionnaireSlice.reducer,
  },
});

export default store;
