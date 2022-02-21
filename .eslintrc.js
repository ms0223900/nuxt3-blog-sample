module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/', 'custom-types/'],
      },
    },
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:import/typescript',
    'airbnb-base',
    'airbnb-typescript/base',
    '@vue/typescript/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
  },
  plugins: ['vue', '@typescript-eslint'],
  ignorePatterns: ['**/stories/*.js', '**/stories/*.vue'],
  rules: {
    // essentials
    indent: 0,
    // typescript eslint
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    "@typescript-eslint/no-unused-expressions": 0,
    '@typescript-eslint/naming-convention': 0, // api 用底線寫法，故需關閉lint

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'import/extensions': [
    'import/extensions': 0,
  },
};