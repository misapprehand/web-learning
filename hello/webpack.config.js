const path = require('path');

module.exports = {
    entry: './src/js_basic/hello.js',
    output:{
        filename: 'hello_bundle.js',
        path: path.resolve(__dirname, 'src/js_basic')
    }
};
