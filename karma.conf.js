// Karma configuration
// Generated on Wed Jun 22 2016 02:58:35 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    //plugins: [
    //    'karma-ng-html2js-preprocessor'
    //],


    // list of files / patterns to load in the browser
    files: [
      'assets/libs/angular/angular.js',
      'assets/libs/angular-mocks/angular-mocks.js',
      'assets/libs/angular-material/angular-material.js',
      'assets/libs/angular-animate/angular-animate.js',
      'assets/libs/angular-aria/angular-aria.js',
      'assets/libs/angular-sanitize/angular-sanitize.js',
      'assets/libs/ngstorage/ngStorage.js',
      'assets/libs/ng-json-display/src/ng-json-display.js',

      'app/**/*.js',

      // JSON fixture
      {
         pattern:  'assets/samples/*.json',
         served:   true,
         included: true,
         watched:  false
     },

      //html
      'templates/**/*.html'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "templates/**/*.html": "ng-html2js",
      "assets/samples/*.json": "json_fixtures"
    },

    ngHtml2JsPreprocessor: {
      //stripPrefix: 'public/',
      //stripSuffix: '.ext',

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      moduleName: 'test-templates',
    },
    jsonFixturesPreprocessor: {
      // prependPrefix: 'mock/',
      // change the global fixtures variable name
      // variableName: '__mocks__',
      // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc'])
      stripPrefix: 'assets/',
      camelizeFilenames: true,
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
