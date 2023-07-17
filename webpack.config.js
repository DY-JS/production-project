const path = require('path');

module.exports = {
    // ...other webpack configuration options
    // resolve: {
    //     alias: {
    //         'app': path.resolve(__dirname, 'src/app'),
    //         'components': path.resolve(__dirname, 'src/components'),
    //         'styles': path.resolve(__dirname, 'src/styles'),
    //         // Add more aliases as needed
    //     },
    // },
    module: {
        rules: [
            // ...other rules
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
