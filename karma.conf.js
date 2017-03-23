/** Basic Karma config file for running Jasmine Tests and setting up lcov for CodeClimate*/
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: ['src/**/*.js', 'test/**/*.spec.js'],
        preprocessors: {
            'src/**/*.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true,
        coverageReporter: {
            type : 'lcovonly', 
            dir  : 'stat/',
            file : 'lcov.info'
        }
    });
};
