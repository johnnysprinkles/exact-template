// CommonJS is just a convenient way to write this, as ES Modules have no
// synchronous import expressions.

export default [
  [require('../apps/homepage').default,   '/'],
  [require('../apps/demos').default,      '/demos'],
  [require('../apps/cowsay').default,     '/demos/cowsay'],
  [require('../apps/spa').default,        '/demos/spa'],
  [require('../apps/docs').default,       '/docs'],
  [require('../apps/philosophy').default, '/philosophy'],
];
