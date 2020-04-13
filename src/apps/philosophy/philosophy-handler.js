import PhilosophyView from './philosophy-view';
import render, { bundle } from '../../server/render';

export default async (req, res) => {
  let html = render(res, PhilosophyView, {
    title: 'Philosophy',
    clientBundle: bundle`apps/philosophy/philosophy-view.js`,
  });
  res.send(html);
}
