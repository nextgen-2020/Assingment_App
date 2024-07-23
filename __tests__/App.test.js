import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from '../src/redux/store';
import AppNavigator from '../src/navigation/AppNavigator';

describe('App component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );

    expect(getByText('app-navigator')).toBeTruthy();
  });
});
