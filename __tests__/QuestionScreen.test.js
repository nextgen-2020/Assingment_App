import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../redux/store'; 
import QuestionScreen from '../screens/QuestionScreen';
import { questions } from '../helper/question';


jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.Dimensions.get = jest.fn().mockReturnValue({ width: 400 });
  return RN;
});

const store = configureStore({
  reducer: {
    question: questionReducer
  }
});

const mockNavigation = {
  navigate: jest.fn(),
};

const mockRoute = {
  params: { questionId: 0 },
};

describe('QuestionScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the question screen correctly', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <QuestionScreen navigation={mockNavigation} route={mockRoute} />
      </Provider>
    );

    expect(getByTestId('header-text')).toHaveTextContent('Question 1 of 3'); 
    expect(getByTestId('progress-bar')).toBeTruthy();
    expect(getByTestId('question-text')).toHaveTextContent(questions[0].text);
    questions[0].options.forEach((option, index) => {
      expect(getByTestId(`option-button-${index}`)).toHaveTextContent(option);
    });
  });

  it('should handle option selection and navigation', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <QuestionScreen navigation={mockNavigation} route={mockRoute} />
      </Provider>
    );

    fireEvent.press(getByTestId('option-button-0'));

    expect(store.getState().question.answers).toEqual([{ questionId: 0, score: questions[0].scores[0] }]); 
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Questions', { questionId: 1 });
  });

  it('should navigate to the Result screen if it is the last question', () => {
    mockRoute.params = { questionId: questions.length - 1 }; 

    const { getByTestId } = render(
      <Provider store={store}>
        <QuestionScreen navigation={mockNavigation} route={mockRoute} />
      </Provider>
    );

    fireEvent.press(getByTestId('option-button-0'));

    expect(store.getState().question.answers).toEqual([{ questionId: questions.length - 1, score: questions[questions.length - 1].scores[0] }]);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Result');
  });
});
