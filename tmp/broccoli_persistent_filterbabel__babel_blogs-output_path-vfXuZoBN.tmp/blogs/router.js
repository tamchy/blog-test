define('blogs/router', ['exports', 'ember', 'blogs/config/environment'], function (exports, _ember, _blogsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _blogsConfigEnvironment['default'].locationType,
    rootURL: _blogsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('logout');
    this.route('blog', { path: '/blog/:blog_id' });
    this.route('post', { path: '/post/:post_id' });
  });

  exports['default'] = Router;
});