module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  "plugins": [
    "meteor"
  ],
  "extends": [
    "airbnb",
    "plugin:meteor/recommended"
  ],
  "settings": {
    "import/resolver": "meteor"
  },
  "rules": {}
};
