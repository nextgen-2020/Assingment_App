module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    // Add any additional transformations here if needed
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|react-native-web|@react-native-async-storage/async-storage|@react-native-async-storage/async-storage)/)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
};
