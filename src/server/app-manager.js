import express from 'express';

const HTTP_VERBS = [ 'get', 'post', 'put', 'delete', 'patch', 'options' ];

function wrap(router, scope, allScopes) {
  let wrapper = {};

  let moreSpecificScopes = allScopes.filter(s => {
    return s != scope && s.length > scope.length;
  });

  HTTP_VERBS.forEach(verb => {
    wrapper[verb] = (path, ...handlers) => {
      if (path.indexOf(scope) !== 0) {
        throw new Error(`Can't register path '${path}' because it's not under the scope '${scope}'.`);
      }
      let conflicts = moreSpecificScopes.filter(s => path.indexOf(s) === 0);
      if (conflicts.length > 0) {
        throw new Error(`Can't register path '${path}' because it conflicts with ${conflicts.join(', ')}.`);
      }      
      router[verb].call(router, path, ...handlers);
    };
  });

  wrapper.use = (path, ...handlers) => {
    if (typeof path != 'string') {
      throw new Error(`Apps can't install middleware on the root path, add it in main.js instead.`);
    }
    if (scope && path.indexOf(scope) !== 0) {
      throw new Error(`Can't register middleware on path '${path}' because it's not under the scope '${scope}'.`);
    }
    let conflicts = moreSpecificScopes.filter(s => path.indexOf(s) === 0);
    if (conflicts.length > 0) {
      throw new Error(`Can't register path '${path}' because it conflicts with ${conflicts.join(', ')}.`);
    }
    router.use(path, ...handlers);
  };

  return wrapper;
}

export default function(apps) {
  let router = express.Router();

  // Lets us externalize react-dom, so it can be cached.
  router.use('/js', express.static('dist/client', { maxAge: '1d' }));

  apps.forEach(([app, scope]) => {
    app(wrap(router, scope, apps.map(x => x[1])));
  });

  return router;
}
