import render, { bundle } from '../../server/render';
import { get } from '../../server/fake-api';
import CowsayView from './cowsay-view';

export default async function(req, res) {
  let cowsayPhrases = await get('cowsayPhrases');

  let html = render(res, CowsayView, {
    title: 'Cowsay',
    clientBundle: bundle`apps/cowsay/cowsay-view.js`,
    props: {
      initialPhrases: cowsayPhrases,
      type: 'isomorphic',
    }
  });
  res.send(html);
}
