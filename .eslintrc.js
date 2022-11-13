const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'filenames',
        'simple-import-sort',
        'import',
        'prettier',
        'typescript-sort-keys',
        'sort-keys-fix',
    ],
    env: {
        es2022: true,
        browser: true,
        node: true,
        jest: true,
    },
    globals: {
        __CLIENT__: 'readonly',
        __SERVER__: 'readonly',
        __DEVELOPMENT__: 'readonly',
        __VERSION__: 'readonly',
        shallow: true,
        mount: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript-prettier',
    ],
    rules: {
        'react/prop-types': 0,
        '@typescript-eslint/naming-convention': 0, // Разрешается использовать. Планируем постепенно отойти от такого паттерна
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                varsIgnorePattern: '^React$|^_$',
            },
        ],

        '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
        '@typescript-eslint/array-type': [1, { default: 'array-simple', readonly: 'array-simple' }],
        '@typescript-eslint/sort-type-union-intersection-members': 1,
        '@typescript-eslint/no-implicit-any-catch': 1,
        '@typescript-eslint/consistent-type-imports': 1,

        'typescript-sort-keys/interface': [
            1,
            'asc',
            { caseSensitive: true, natural: true, requiredFirst: true },
        ],
        'typescript-sort-keys/string-enum': [1, 'asc', { caseSensitive: true, natural: true }],

        'jsx-a11y/label-has-associated-control': 0, // Можем не связывать input-text и label

        'react/function-component-definition': 0, // Используем любые типы функций для определения React компонентов
        'react/react-in-jsx-scope': 0,
        'react/destructuring-assignment': 0, // Можем использовать параметры и свойства без деструкторизации
        'react/no-children-prop': 0,
        'react/static-property-placement': 0,
        'react/forbid-prop-types': 0,
        'react/no-unused-prop-types': 0,
        'react/jsx-uses-react': 1,
        'react-hooks/exhaustive-deps': 1,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': 0,
        'react/jsx-fragments': [2, 'syntax'],
        'react/jsx-filename-extension': [
            // TODO: change extension for JSX files
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/sort-comp': [
            1,
            {
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'react/jsx-sort-props': [
            1,
            {
                multiline: 'last',
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],

        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '**/*.stories.*',
                    '**/*.test.*',
                    '**/storybook/**/*.*',
                    '**/webpack/**/*.*',
                    'webpack.config.ts',
                ],
                peerDependencies: true,
            },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'consistent-return': 0,
        'import/order': 0,

        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true, true],

        'no-unused-vars': 1,
        'getter-return': 1, // TODO: убрать. Геттеры всегда явно возвращают результат
        'no-underscore-dangle': 1, // Разрешается использовать. Планируем постепенно отойти от такого паттерна
        'media-has-caption': 0,
        'no-param-reassign': 0, // Можем мутировать параметры внутри функции. Возможно включим.
        'class-methods-use-this': 1, // Или потом фиксим или выпиливаем классы
        'no-restricted-syntax': 0, // TODO: придумать style-guide и включить правило
        'no-plusplus': 0,
        'global-require': 0, // TODO: избавиться после перевода на сервера на TS
        'no-restricted-globals': 0,
        'default-case': 0,
        'max-params': 0,
        'sort-imports': 0,
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],

        'jsx-a11y/anchor-is-valid': 0, // TODO: rework button
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/no-static-element-interactions': 0, // Можем не давать роли html элементам
        'jsx-a11y/click-events-have-key-events': 0, // Можем не давать click events элементам дополнительный слушатель keyboard
        'import/prefer-default-export': 0,

        'simple-import-sort/imports': [
            2,
            {
                groups: [
                    ['^react', '^@?\\w'],
                    ['^\\$+'],
                    [
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                    ['^\\$styles.+\\.(c|le|sa|sc|pc)ss$', '^.+\\.(c|le|sa|sc|pc)ss$'],
                ],
            },
        ],
        'sort-keys-fix/sort-keys-fix': [1, 'asc', { caseSensitive: true, natural: true }],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            extends: [],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
                '@typescript-eslint/unbound-method': 0,
                '@typescript-eslint/require-await': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,
                '@typescript-eslint/no-unsafe-member-access': 0,
                '@typescript-eslint/no-unsafe-call': 0,
                '@typescript-eslint/no-unsafe-return': 0,
                '@typescript-eslint/no-unsafe-argument': 0,
                '@typescript-eslint/restrict-template-expressions': 0,
                '@typescript-eslint/no-floating-promises': 0,
                '@typescript-eslint/consistent-type-definitions': 0,
                '@typescript-eslint/array-type': 0,
                '@typescript-eslint/sort-type-union-intersection-members': 0,
                '@typescript-eslint/no-implicit-any-catch': 0,
                '@typescript-eslint/consistent-type-imports': 0,

                'import/prefer-default-export': 0,
                'sort-keys-fix/sort-keys-fix': 0,
            },
        },
        {
            files: ['*.ts', 'constants.tsx', '**/constants/**', '**/hooks/**'],
            extends: [],
            rules: {
                'import/prefer-default-export': 0,
            },
        },
    ],
    settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
                alwaysTryTypes: true,
            },
        },
        'import/external-module-folders': [path.resolve(__dirname, 'dev_modules')],
    },
};
