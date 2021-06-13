// .stylelintrc.js

module.exports = {
  extends: '@akijoey/stylelint-config',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
