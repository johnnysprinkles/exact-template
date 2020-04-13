import render from '../../server/render';
import { get } from '../../server/fake-api';
import CowsayView from './cowsay-view';

export default async function(req, res) {
  let cowsayPhrases = await get('cowsayPhrases');

  let html = render(res, CowsayView, {
    props: {
      initialPhrases: cowsayPhrases,
      type: 'serverside',
    }
  });
  res.send(html);
}
