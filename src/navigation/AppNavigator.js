// App.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from '../screens/QuestionScreen';
import ResultScreen from '../screens/ResultScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Questions">
    <Stack.Screen name="Questions" component={QuestionScreen} />
    <Stack.Screen name="Result" component={ResultScreen} />
  </Stack.Navigator>
);

export default AppNavigator;

