// .eslintrc.js

module.exports = {
  extends: [
    '@akijoey',
    'standard-with-typescript',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: ['vue'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
