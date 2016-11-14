// This isn't trasnspiled, so must use CommonJS & ES5

//Register Babel to traspile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css']  = function() {};
