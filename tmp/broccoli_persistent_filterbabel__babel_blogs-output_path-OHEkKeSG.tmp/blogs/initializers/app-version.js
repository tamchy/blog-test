define('blogs/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'blogs/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _blogsConfigEnvironment) {
  var _config$APP = _blogsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});