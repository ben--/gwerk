module.exports = {
    plugins: [
        'googleappsscript',
        'mocha',
    ],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        'googleappsscript/googleappsscript': true,
    },
    extends: [
        'airbnb-base',
    ],
    overrides: [
        {
            files: ['test/**/*.js'],
            env: { mocha: true },
            extends: ['plugin:mocha/recommended'],
            rules: {
                'array-bracket-spacing': 'off',
                'func-names': 'off',
                'no-multi-spaces': 'off',
                'prefer-arrow-callback': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'no-param-reassign': 'off',
        semi: 'off',
    },
};
