import render from '../server/render';
import ErrorView from '../views/error-view';
import config from '../server/config';

// This being the error handler needs to never throw exceptions.

export default async function(err, req, res, next) {
  try {
    // Log the error.
    console.log(err);

    // Show stack trace if in non-prod environment
    let props = {};
    if (config.get('SHOW_STACK_TRACE')) {
      props.stack = err.stack;
    }

    res.send(render(res, ErrorView, { props }));
  } catch (e) {
    res.send('Error');
  }
}
