basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = true;

proxies = {
  '/': 'http://localhost:4567/' // Sinatra
};

// urlRoot = '/_karma_/'

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
