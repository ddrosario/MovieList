module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
    
  },
  rules: {
    "linebreak-style": ["error", "windows"]
  },
  plugins: ['react', 'eslint-plugin-react']
};