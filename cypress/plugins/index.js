// load the environment variables from the local .env file
require('dotenv').config();

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env = config.env || {};

  config.env.USERNAME = process.env.USERNAME;
  config.env.PASSWORD = process.env.PASSWORD;
  config.env.LOGIN_URL = process.env.LOGIN_URL;

  return config;
}
