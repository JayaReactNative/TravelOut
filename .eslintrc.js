// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

module.exports = {
  env: {
    jest: true,  // Enable Jest globals
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native'
  ],
  plugins: ['react', 'jest'],
  rules: {
    // Add any custom rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};


