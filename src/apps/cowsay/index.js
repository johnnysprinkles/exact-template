import cowsayClientsideHandler from './cowsay-clientside-handler';
import cowsayServersideHandler from './cowsay-serverside-handler';
import cowsayIsomorphicHandler from './cowsay-isomorphic-handler';
import cowsayPhrasesHandler from './cowsay-phrases-handler';

export default (app) => {
  app.get('/demos/cowsay/clientside', cowsayClientsideHandler);
  app.get('/demos/cowsay/serverside', cowsayServersideHandler);
  app.get('/demos/cowsay/isomorphic', cowsayIsomorphicHandler);
  app.get('/demos/cowsay/_xhr/phrases', cowsayPhrasesHandler);
};
