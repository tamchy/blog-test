define('blogs/adapters/drf', ['exports', 'ember', 'ember-django-adapter/adapters/drf', 'blogs/config/environment'], function (exports, _ember, _emberDjangoAdapterAdaptersDrf, _blogsConfigEnvironment) {
  exports['default'] = _emberDjangoAdapterAdaptersDrf['default'].extend({
    host: _ember['default'].computed(function () {
      return _blogsConfigEnvironment['default'].APP.API_HOST;
    }),

    namespace: _ember['default'].computed(function () {
      return _blogsConfigEnvironment['default'].APP.API_NAMESPACE;
    })
  });
});