module.exports = {
    "plugins": [
        "googleappsscript"
    ],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        "googleappsscript/googleappsscript": true,
    },
    extends: [
        'airbnb-base',
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
