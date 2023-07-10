module.exports = {
    // ...other webpack configuration options

    module: {
        rules: [
            // ...other rules

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
