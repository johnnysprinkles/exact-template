import demosHandler from './demos-handler';

export default (app) => {
  app.get('/demos', demosHandler);
};
