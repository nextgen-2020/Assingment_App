// screens/ResultScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../helper/colors';

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
      <View style={styles.overlay}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
  },
  score: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 10,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.fifth,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
