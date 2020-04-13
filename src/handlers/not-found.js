import render from '../server/render';
import NotFoundView from '../views/not-found-view';

export default async function(req, res) {
  res.send(render(res, NotFoundView));
}
