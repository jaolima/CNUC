module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme', 'prettier/react'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'max-len': ['warn', 150, 2, { ignoreUrls: true }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-empty': 'error',
    'no-empty-character-class': 'warn',
    camelcase: 'error',
    'import/no-cycle': 'warn',
    'no-use-before-define': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
  },
};
