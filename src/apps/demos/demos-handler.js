import render, { bundle } from '../../server/render';
import Demos from './demos-view';
import { FAKE_API_DELAY } from '../../server/fake-api';

export default async (req, res) => {
  res.send(render(res, Demos, {
    title: 'Demos',
    clientBundle: bundle`apps/demos/demos-view.js`,
    props: {
      FAKE_API_DELAY,
    },
  }));
};