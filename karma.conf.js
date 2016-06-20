module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'es6-shim'],
    basePath: 'public',
    files: [
      '../node_modules/jquery/dist/jquery.js',
      '../node_modules/jasmine-jquery/lib/jasmine-jquery.js',
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
