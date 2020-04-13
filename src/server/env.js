// Determine when environment is currently running. You might have a local
// environment and several deployed environments like beta, staging, prod, etc.
// In this simple case, we have two environment mirroring the NODE_ENV.
//
// Should default export a string which is the environment name.

let env = process.env.NODE_ENV == 'production' ? 'prod' : 'local';

export default env;
