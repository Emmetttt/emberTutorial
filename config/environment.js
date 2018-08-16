'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-library',
    environment,
    rootURL: '/',
    locationType: 'auto',

    // Initialize Firebase
    firebase: {
      apiKey: "AIzaSyDS0JlnSErf2Erg-M-_f9DLpiI0KWoWSAI",
      authDomain: "emberlibrary-905e2.firebaseapp.com",
      databaseURL: "https://emberlibrary-905e2.firebaseio.com",
      projectId: "emberlibrary-905e2",
      storageBucket: "emberlibrary-905e2.appspot.com",
      messagingSenderId: "957625263844"
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV['ember-faker'] = {
      enabled: true
    };
  }

  return ENV;
};
