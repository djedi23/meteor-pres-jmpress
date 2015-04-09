Package.describe({
  name: 'djedi:pres-jmpress',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor integration for jmpress',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/djedi23/meteor-pres-jmpress',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use(['templating',
      'jquery',
      'reactive-var',
      'djedi:modules@0.1.0',
      'djedi:jmpress@0.4.5'], 'client');

  api.addFiles(['client/pres-jmpress.html',
               'client/pres-jmpress.js'],
      'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:pres-jmpress');
  api.addFiles('pres-jmpress-tests.js');
});
