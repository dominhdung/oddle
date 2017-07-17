require('babel-core/register');
const LAUNCH_URL = require('./shared/constants').LAUNCH_URL;

const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-2.53.1.jar',
  host: '127.0.0.1',
  port: 4444,
};

const FIREFOX_CONFIGURATION = {
  browserName: 'firefox',
  javascriptEnabled: true,
  acceptSslCerts: true,
};

const DEFAULT_CONFIGURATION = {
  launch_url: LAUNCH_URL,
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: FIREFOX_CONFIGURATION,
};

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION,
};

module.exports = {
  src_folders: ['test/acceptance'],
  output_folder: 'reports',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS,
};
