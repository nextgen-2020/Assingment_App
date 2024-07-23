 
 import { COLORS } from './colors';
 export const questions = [
    {
      id: 0,
      text: 'How would you describe your investment knowledge?',
      options: ['Novice', 'Intermediate', 'Advanced'],
      scores: [1, 2, 3],
      colors: [COLORS.primary, COLORS.secondary, COLORS.third],
    },
    {
      id: 1,
      text: 'Investment Duration',
      options: ['Short-term (less than 1 year)', 'Medium-term (1-5 years)', 'Long-term (more than 5 years)'],
      scores: [1, 2, 3],
      colors: [COLORS.fourth, COLORS.fifth, COLORS.primary],
    },
    {
      id: 2,
      text: 'How comfortable are you with taking risks?',
      options: ['Very risk-averse', 'Somewhat risk-averse', 'Neutral', 'Somewhat risk-tolerant', 'Very risk-tolerant'],
      scores: [1, 2, 3, 4, 5],
      colors: [COLORS.primary, COLORS.secondary, COLORS.third, COLORS.fourth, COLORS.fifth],
    },
    {
      id: 3,
      text: 'What percentage of your income are you willing to invest?',
      options: ['Less than 10%', '10-25%', '25-50%', 'More than 50%'],
      scores: [1, 2, 3, 4],
      colors: [COLORS.fifth, COLORS.primary, COLORS.secondary, COLORS.third],
    },
    {
      id: 4,
      text: 'How would you react to a sudden drop in the value of your investments?',
      options: ['Panic and sell immediately', 'Monitor closely and consider selling', 'Hold and wait for recovery', 'See it as a buying opportunity and invest more'],
      scores: [1, 2, 3, 4],
      colors: [COLORS.primary, COLORS.secondary, COLORS.third, COLORS.fourth],
    },
  ];