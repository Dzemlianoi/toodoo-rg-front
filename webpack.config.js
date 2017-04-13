module.exports = {
    context: __dirname,
    entry: {
        bundle: './app/app.js'
    },
    output: {
        path: __dirname + '/app/js',
        filename: '[name].js'
    }
};
