module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!(app|test))/,
        'app.js': /^app/,
        'test.js': /^test/
      },
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  conventions: {
    vendor: /(vendor|test|node_modules)[\\/]/
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    }
  },

  server: {
    port: 3333,
    hostname: '0.0.0.0'
  },

  overrides: {
    production: {
      files: {
        javascripts: {
          joinTo: {
            'vendor.js': /^(?!(app|test))/,
            'app.js': /^app/
          }
        }
      }
    }
  }
};
