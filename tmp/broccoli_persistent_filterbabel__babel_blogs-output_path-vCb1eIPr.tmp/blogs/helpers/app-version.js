define('blogs/helpers/app-version', ['exports', 'ember', 'blogs/config/environment'], function (exports, _ember, _blogsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _blogsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});