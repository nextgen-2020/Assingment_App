// screens/ResultScreen.js
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../helper/colors';
import {styles} from './Screen.styles'

const {width} = Dimensions.get('window');

const getRiskCategory = score => {
  if (score <= 8) return 'Low';
  if (score <= 15) return 'Medium';
  return 'High';
};

const ResultScreen = ({navigation}) => {
  const score = useSelector(state => state.questionnaire.score);
  const riskCategory = getRiskCategory(score);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlayView}>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Your Risk Profile</Text>
          <Text style={styles.score}>Score: {score}</Text>
          <Text style={styles.category}>Risk Category: {riskCategory}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: COLORS.primary}]}
              onPress={() => navigation.navigate('Questions', {questionId: 0})}>
              <Text style={styles.buttonText}>Start Over</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default ResultScreen;
