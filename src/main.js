import cluster from 'cluster';
import os from 'os';
import express from 'express';
import config from './server/config';
import appManager from './server/app-manager';
import installedApps from './server/installed-apps';
import notFoundHandler from './handlers/not-found';
import errorMiddleware from './middleware/error';
import compression from 'compression';

let app = new express();

// You might need this if you're calling upstream services on old TLS versions.
//
// import tls from 'tls';
// tls.DEFAULT_MIN_VERSION = 'TLSv1';

// Install any middleware here, such as: auth, logging, gzip compression, etc
// Generally not a good idea to have a global body parser installed. Better to
// allow individual routes to handle the body as they see fit.
app.use(compression());

app.use('/static', express.static('public', { maxAge: 3600000 }));
app.get('/ping', (req, res) => res.send('OK'));
app.get('/intentional_error', (req, res) => res.send(x.y.z));
app.get('/intentional_error_async', async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  res.send(x.y.z);
});
app.use(appManager(installedApps));

// 404 handler has to be the last route.
app.use(notFoundHandler);

// Error handler has to come after all the routes. It has a different
// 4-argument signature.
app.use(errorMiddleware);

function start() {
  let port = config.get('PORT');
  app.listen(port, () => {
    console.log(`Express is listening on port ${port}.`);
  });  
}

if (config.get('USE_FORKING')) {
  if (cluster.isMaster) {
    let numProcesses = Math.max(1, os.cpus().length);
    for (let i = 0; i < numProcesses; i++) {
      cluster.fork();
    }
  } else {
    start();
  }
} else {
  start();
}
