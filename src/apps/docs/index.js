import render, { bundle } from '../../server/render';
import DocsIntroView from './docs-intro-view';
import DocsRenderView from './docs-render-view';
import DocsFilesView from './docs-files-view';
import DocsAppsView from './docs-apps-view';
import DocsDevView from './docs-dev-view';
import DocsDesignView from './docs-design-view';
import DocsFaqView from './docs-faq-view';

export default (app) => {
  app.get('/docs', (req, res) => res.redirect('/docs/intro'));

  // These handlers are so trival (no data fetching) that instead of putting
  // them in separate files I'm just inlining them as anonymous functions.

  app.get('/docs/intro', (req, res) => {
    res.send(render(res, DocsIntroView, {
      clientBundle: bundle`apps/docs/docs-intro-view.js`,
    }));
  });

  app.get('/docs/render', (req, res) => {
    res.send(render(res, DocsRenderView, {
      clientBundle: bundle`apps/docs/docs-render-view.js`,
    }));
  });

  app.get('/docs/files', (req, res) => {
    res.send(render(res, DocsFilesView, {
      clientBundle: bundle`apps/docs/docs-files-view.js`,
    }));
  });

  app.get('/docs/apps', (req, res) => {
    res.send(render(res, DocsAppsView, {
      clientBundle: bundle`apps/docs/docs-apps-view.js`,
    }));
  });

  app.get('/docs/dev', (req, res) => {
    res.send(render(res, DocsDevView, {
      clientBundle: bundle`apps/docs/docs-dev-view.js`,
    }));
  });

  app.get('/docs/design', (req, res) => {
    res.send(render(res, DocsDesignView, {
      clientBundle: bundle`apps/docs/docs-design-view.js`,
    }));
  });

  app.get('/docs/faq', (req, res) => {
    res.send(render(res, DocsFaqView, {
      clientBundle: bundle`apps/docs/docs-faq-view.js`,
    }));
  });
};
