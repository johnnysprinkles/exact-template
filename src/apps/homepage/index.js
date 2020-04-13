import homepageHandler from './homepage-handler';

export default (app) => {
  app.get('/', homepageHandler);
};
