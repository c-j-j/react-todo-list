module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'es6-shim'],
    basePath: 'public',
    files: [
      'vendor.js',
      'app.js',
      'test.js',
    ],
    preprocessors: {
      '**/*.js': ['sourcemap']
    },
    colors: true,
    reporters: ['dots'],
  })
}
