#!/usr/bin/env node

process.chdir(__dirname);

const config = require('./webpack.config');
const webpack = require('webpack');
webpack(config, (err, stats) => {
  if (err) {
    console.log(err);
  } else if (stats.hasErrors()) {
    let info = stats.toJson();
    console.log(info.errors);    
  } else {
    require('@babel/register')();
    require('./src/main');
  }
});

