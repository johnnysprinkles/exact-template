import SpaView from './spa-view';
import render, { bundle } from '../../server/render';
import { get } from '../../server/fake-api';

export default async function(req, res) {
  let letter = req.params[0] || 'a';

  let math = await get('math');

  let html = render(res, SpaView, {
    clientBundle: bundle`apps/spa/spa-view.js`,
    props: {
      location: req.path,
      initialData: { [letter]: math[letter] },
    },
  });
  res.send(html);
}
