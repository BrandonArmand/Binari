module.exports = {
    parser: "babel-eslint",
    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react"],
    settings: {
        "react": {
            "version": "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    rules: {
        indent: ["error", 4],
        quotes: ["warn", "double"],
        "comma-dangle": ["warn", {
            "arrays": "never",
            "objects": "always",
            "imports": "never",
            "exports": "never",
            "functions": "never",
        }],
        "react/no-typos": "error",
    },
};
