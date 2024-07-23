import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import resultReducer from '../redux/store';
import ResultScreen from '../screens/ResultScreen';



jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.Dimensions.get = jest.fn().mockReturnValue({ width: 400 });
  return RN;
});

const store = configureStore({
  reducer: {
    questionnaire: resultReducer
  }
});

const mockNavigation = {
  navigate: jest.fn(),
};

describe('ResultScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the result screen correctly with score and risk category', () => {
    store.dispatch({ type: 'SET_SCORE', payload: 12 }); 
    const { getByText } = render(
      <Provider store={store}>
        <ResultScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getByText('Your Risk Profile')).toBeTruthy();
    expect(getByText('Score: 12')).toBeTruthy();
    expect(getByText('Risk Category: Medium')).toBeTruthy();
  });

  it('should navigate to the Questions screen on "Start Over" button press', () => {
  
    store.dispatch({ type: 'SET_SCORE', payload: 20 }); 

    const { getByText } = render(
      <Provider store={store}>
        <ResultScreen navigation={mockNavigation} />
      </Provider>
    );

    fireEvent.press(getByText('Start Over'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Questions', { questionId: 0 });
  });
});
