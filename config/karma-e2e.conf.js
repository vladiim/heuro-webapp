basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = true;

// browsers = ['Chrome'];

// singleRun = true;

proxies = {
  // '/': 'http://localhost:8000/' // Node
  '/': 'http://localhost:4567/' // Sinatra
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
