import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../helper/colors';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    padding: 20,
  },
  header: {
    padding: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerText: {
    color: COLORS.buttonText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    marginBottom: 20,
  },
  questionContainer: {
    flex: 1,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: COLORS.text,
    textAlign: 'center',
  },
  optionButton: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  optionText: {
    color: COLORS.buttonText,
    fontSize: 18,
    textAlign: 'center',
  },

  overlayView: {
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
