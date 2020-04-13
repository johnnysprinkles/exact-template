import env from './env';

// Server-side config values. Constant throughout the life of the application.
const config = {
  // Defaults
  USE_FORKING: true,
  SHOW_STACK_TRACE: false,
  PORT: 3000,

  // Override per environment
  local: {
    USE_FORKING: false,
    SHOW_STACK_TRACE: true,
    ENV_DESCRIPTIVE_NAME: `${process.env.USER}'s local dev environment`,
  },

  prod: {
    ENV_DESCRIPTIVE_NAME: 'Production',
  },
};

export default {
  get: function(key, fallback) {
    if (process.env[key] !== undefined) {
      return process.env[key];
    }
    if (config[env] && config[env][key] !== undefined) {
      return config[env][key];
    }
    if (config[key] !== undefined) {
      return config[key];
    }
    return fallback;
  }
};
