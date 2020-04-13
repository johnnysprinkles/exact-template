import philosophyHandler from './philosophy-handler';

export default (app) => {
  app.get('/philosophy', philosophyHandler);
};