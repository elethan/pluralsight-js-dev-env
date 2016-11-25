//var express = require('express');
//var path = require('path');
//var open = require('open');
import express from 'express';
import path from  'path';
import open from 'open';
import compression from 'compression';

// dont need webpack for distribution
// we are serving static pages
//import webpack from 'webpack';
//import config from '../webpack.config.dev';

 // eslint-disable no-console

const port = 3000;
const app = express();
// because this is distribution
// we tell express to serve static pages
// this is just for local test of aproduction build
app.use(compression());
app.use(express.static('dist'));

/*
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));
*/
app.get('/',function(req, res){
  res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
