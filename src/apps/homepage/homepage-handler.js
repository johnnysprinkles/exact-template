import HomepageView from './homepage-view';
import render, { bundle } from '../../server/render';

export default async (req, res) => {
  let html = render(res, HomepageView, {
    title: 'Hello',
    clientBundle: bundle`apps/homepage/homepage-view.js`,
    props: {
    },
  });
  res.send(html);
}
