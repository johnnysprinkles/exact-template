import render, { bundle } from '../../server/render';

export default async function(req, res) {
  let html = render(res, null, {
    title: 'Cowsay',
    clientBundle: bundle`apps/cowsay/cowsay-view.js`,
    props: {
      type: 'clientside',
    }
  });
  res.send(html);
}
