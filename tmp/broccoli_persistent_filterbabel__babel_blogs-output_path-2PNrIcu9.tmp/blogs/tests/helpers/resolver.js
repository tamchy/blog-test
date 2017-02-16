define('blogs/tests/helpers/resolver', ['exports', 'blogs/resolver', 'blogs/config/environment'], function (exports, _blogsResolver, _blogsConfigEnvironment) {

  var resolver = _blogsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _blogsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _blogsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});