import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../redux/store';
import ProgressBar from 'react-native-progress/Bar'; 
import { COLORS } from '../helper/colors';
import { questions } from '../helper/question';
import {styles} from './Screen.styles'
const { width } = Dimensions.get('window');

const QuestionScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { questionId } = route.params || { questionId: 0 };
  const question = questions[questionId];
  const totalQuestions = questions.length;
  const progress = (questionId + 1) / totalQuestions; // Calculate progress

  const handleAnswer = (score) => {
    dispatch(setAnswer({ questionId, score }));
    if (questionId < totalQuestions - 1) {
      navigation.navigate('Questions', { questionId: questionId + 1 });
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text testID="header-text" style={styles.headerText}>Question {questionId + 1} of {totalQuestions}</Text>
        </View>
        <ProgressBar
          testID="progress-bar"
          progress={progress}
          width={width - 40}
          height={10}
          borderRadius={5}
          color={COLORS.primary}
          style={styles.progressBar}
        />
        <View style={styles.questionContainer}>
          <Text testID="question-text" style={styles.questionText}>{question.text}</Text>
          <FlatList
            data={question.options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                testID={`option-button-${index}`}
                style={[styles.optionButton, { backgroundColor: question.colors[index] }]}
                onPress={() => handleAnswer(question.scores[index])}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};



export default QuestionScreen;
