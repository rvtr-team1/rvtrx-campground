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
      require('karma-sonarqube-unit-reporter'),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'test_coverage'),
      reports: ['lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    junitReporter: {
      outputDir: 'test_result',
      outputFile: 'junit.xml',
      useBrowserName: false,
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputFile: 'test_result/sonar.xml',
      useBrowserName: false,
    },
    reporters: ['junit', 'progress', 'sonarqubeUnit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromiumHeadless'],
    singleRun: true,
    restartOnFileChange: true,
  });
};
