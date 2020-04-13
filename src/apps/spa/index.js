import spaHandler from './spa-handler';
import descriptionHandler from './description-handler';

export default (app) => {
  app.get('/demos/spa', spaHandler);
  app.get('/demos/spa/_xhr/description/:letter', descriptionHandler);
  app.get('/demos/spa/*', spaHandler);
};
