module.exports = {
  env: {
    jest: true,  // Enables Jest globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native'
  ],
  plugins: ['react', 'jest'],
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    // Add any custom rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
