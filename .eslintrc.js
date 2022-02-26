module.exports = {
  root: true,
  settings: {
      react: {
          version: 'detect',
      },
      "import/resolver": {
          node: {
              paths: ["src"]
          }
      },
  },
  env: {
      browser: true,
      es6: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:promise/recommended',
      'plugin:sonarjs/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaVersion: 2021,
      sourceType: 'module',
  },
  plugins: [
      'react',
      'react-hooks',
      'import',
      'promise',
      'optimize-regex',
      'sonarjs',
      '@typescript-eslint',
      'prettier',
  ],
  rules: {
      curly: 'error',
      eqeqeq: 'warn',
      'no-debugger': 'warn',
      'import/order': [
          'warn',
          {
              'newlines-between': 'always-and-inside-groups',
              alphabetize: {
                  order: 'asc',
                  caseInsensitive: false,
              },
          },
      ],
      'import/named': 0,
      'import/no-named-as-default': 0,
      'import/no-unresolved': 'warn',
      'import/namespace': 'warn',
      'import/default': 'warn',

      'optimize-regex/optimize-regex': 'warn',
      'prettier/prettier': [
          'warn',
          {
              tabWidth: 2,
              endOfLine: 'auto',
              printWidth: 100,
          },
      ],
      'promise/prefer-await-to-then': 'error',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': [
          'warn',
          {
              args: 'after-used',
              ignoreRestSiblings: true,
          },
      ],
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/naming-convention': [
          'error',
          {
              selector: 'default',
              format: ['camelCase'],
          },
          {
              selector: 'variable',
              format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          },
          {
              selector: 'parameter',
              format: ['camelCase'],
              leadingUnderscore: 'allow',
          },
          {
              selector: 'memberLike',
              modifiers: ['private'],
              format: ['camelCase'],
              leadingUnderscore: 'require',
          },
          {
              selector: 'method',
              format: ['camelCase'],
          },
          {
              selector: 'enumMember',
              format: ['PascalCase', 'UPPER_CASE'],
          },
          {
              selector: 'typeLike',
              format: ['PascalCase'],
          },
      ],
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-magic-numbers': [
          'error',
          {
              ignoreNumericLiteralTypes: true,
              ignoreEnums: true,
              enforceConst: true,
              ignoreReadonlyClassProperties: true,
              ignore: [0, 1, 2, 12, 24, 60, 100, 1000, 2000, 10000],
          },
      ],
      'react/no-access-state-in-setstate': 'error',
      'react/no-danger': 'error',
      'react/no-multi-comp': 'error',
      'react/no-this-in-sfc': 'error',
      'react/jsx-filename-extension': [
          'error',
          {
              extensions: ['.tsx'],
          },
      ],
      'react/jsx-no-bind': 0,
      'react/jsx-no-literals': 0,
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/prop-types': 0,
      'react/no-unescaped-entities': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'sonarjs/prefer-immediate-return': 0,
      'sonarjs/no-duplicate-string': ['warn', 4],
      'sonarjs/no-small-switch': 0,
      'sonarjs/cognitive-complexity': 0,
      'no-irregular-whitespace': 0,
  },
};
