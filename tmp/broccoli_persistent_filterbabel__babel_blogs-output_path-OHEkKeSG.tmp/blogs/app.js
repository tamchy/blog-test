define('blogs/app', ['exports', 'ember', 'blogs/resolver', 'ember-load-initializers', 'blogs/config/environment'], function (exports, _ember, _blogsResolver, _emberLoadInitializers, _blogsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _blogsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _blogsConfigEnvironment['default'].podModulePrefix,
    Resolver: _blogsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _blogsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});