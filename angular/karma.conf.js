module.exports = function (config) {
  process.env.CHROMIUM_BIN = process.env.CHROMIUM_BIN || require('puppeteer').executablePath();

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './test_coverage/rvtr-app-campsite'),
      reports: ['cobertura', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    junitReporter: {
      outputDir: 'test_result/rvtr-app-campsite',
      outputFile: 'junit-result.xml',
    },
    reporters: ['junit', 'progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromiumHeadless'],
    singleRun: true,
    restartOnFileChange: true,
  });
};
