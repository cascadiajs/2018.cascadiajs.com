module.exports = {
  parser: 'babel-eslint',
  plugins: ['standard', 'jsx-a11y', 'promise', 'import', 'react'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard'
  ],
  globals: {
    graphql: true,
  },
  settings: {
    react: {
      version: '15.0'
    }
  },
  rules: {
    semi: [2, 'always'],
    'no-var': 'error',
    'no-func-assign': 'error',
    'no-class-assign': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-duplicates': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] }
    ],
    'react/no-children-prop': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
