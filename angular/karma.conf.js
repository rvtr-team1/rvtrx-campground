module.exports = function (config) {
  process.env.CHROMIUM_BIN = require('puppeteer').executablePath();

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-sonarqube-unit-reporter'),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'code_coverage'),
      reports: ['lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'test_coverage/report.xml',
      overrideTestDescription: true,
      testPaths: ['./src/app'],
      testFilePattern: '.spec.ts',
      useBrowserName: false,
    },
    reporters: ['progress', 'sonarqubeUnit', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    restartOnFileChange: true,
  });
};
