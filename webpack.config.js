const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

let re = /\bbundle\s*`([\/\w\.-]+)`/gm;
let clientBundles = {};

glob.sync('./src/**/*.js').forEach(filename => {
  let content = fs.readFileSync(filename);
  let match;
  while ((match = re.exec(content)) !== null) {
    clientBundles[match[1]] = true;
  }
});

let pages = Object.keys(clientBundles).map(x => './src/' + x);

module.exports = [
  ...pages.map(jsxPath => {
    let componentFilename = path.basename(jsxPath);
    let bundlePath = path.dirname(jsxPath).replace(/\.\/src\//, '');
    let bundleAbsolutePath = path.resolve(__dirname, 'dist/client', bundlePath);
    return {
      target: 'web',
      entry: './src/client/bootstrap.js',
      output: {
        path: bundleAbsolutePath,
        filename: componentFilename,
      },
      module: {
        rules: [
          {
            test: /.js$/,
            exclude: __dirname + '/node_modules',
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-react',
                  ['@babel/preset-env', {
                    targets: {
                      browsers: [
                        'last 2 versions'
                      ]
                    }
                  }]
                ],
                plugins: [
                  '@babel/plugin-transform-runtime'
                ]
              }
            }
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          TOP_LEVEL_COMPONENT: JSON.stringify(bundlePath + '/' + componentFilename)
        })
      ],
      watchOptions: {
        poll: 1000 // Check for changes every second
      },
      stats: {
        all: false,
        assets: true,
        errors: true,
        version: true,
        warnings: true
      }
    }
  }),
];
