// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true,
//            "jest": true,
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint"
//     ],
//     "rules": {
//         "react/jsx-indent": [2,4],
//         "react/jsx-indent-props": [2,4],
//         "indent": [2,4],             //отступ 4
//         "react/jsx-filename-extension": [2, {extensions: ['.js', '.jsx', '.tsx']}],
//         "import/no-unresolved": 'off', //при исп-и абс путей нужно откл
//         "import/prefer-default-export": 'off',  //дефолт экспорт - отключили
//         'no-unused-vars': 'warn',    //неисп переменная - отключили
//         'react/require-default-props': 'off',  //дефолтные зн-я для необяз пропсов отключили
//         'react/react-in-jsx-scope': 'off', //импортировать React не нужно
//         'react/jsx-props-no-spreading': 'warn', //...props
//         'react/function-component-definition': 'off', //function expression можно
//         'no-shadow': 'off',
//         "import-extensions": 'off',
//         "import/no-extraneous-dependencies": 'off',
//         "no-underscore-dangle": "off",
//     },
//
//     globals: {             //глобальная переменная
//         __IS_DEV__: true
//     }
// }
//
//

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-indent": [2,4],
        "react/jsx-indent-props": [2,4],
        "indent": [2,4],             //отступ 4
        "react/jsx-filename-extension": [2, {extensions: ['.js', '.jsx', '.tsx']}],
        "import/no-unresolved": 'off', //при исп-и абс путей нужно откл
        "import/prefer-default-export": 'off',  //дефолт экспорт - отключили
        'no-unused-vars': 'warn',    //неисп переменная - отключили
        'react/require-default-props': 'off',  //дефолтные зн-я для необяз пропсов отключили
        'react/react-in-jsx-scope': 'off', //импортировать React не нужно
        'react/jsx-props-no-spreading': 'warn', //...props
        'react/function-component-definition': 'off', //function expression можно
        'no-shadow': 'off',
        "import-extensions": 'off',
        "import/no-extraneous-dependencies": 'off',
        "no-underscore-dangle": "off",
        "max-len": ["error", {ignoreComments: true}]
    },
    "globals": {
        "__IS_DEV__": true
    }
};
