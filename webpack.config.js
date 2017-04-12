module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/app/js',
        filename: 'bundle.js'
    }
};
