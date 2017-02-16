"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('blogs/adapters/application', ['exports', 'blogs/adapters/drf'], function (exports, _blogsAdaptersDrf) {
  exports['default'] = _blogsAdaptersDrf['default'];
});
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
define('blogs/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('blogs/helpers/app-version', ['exports', 'ember', 'blogs/config/environment'], function (exports, _ember, _blogsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _blogsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('blogs/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('blogs/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('blogs/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'blogs/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _blogsConfigEnvironment) {
  var _config$APP = _blogsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('blogs/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('blogs/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('blogs/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('blogs/initializers/export-application-global', ['exports', 'ember', 'blogs/config/environment'], function (exports, _ember, _blogsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_blogsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _blogsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_blogsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('blogs/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('blogs/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('blogs/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("blogs/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('blogs/models/blog', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		dateCreated: _emberData['default'].attr('date'),
		createdBy: _emberData['default'].attr('string'),
		postSet: _emberData['default'].hasMany('post')
	});
});
define('blogs/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr('string'),
		text: _emberData['default'].attr('string'),
		dateCreated: _emberData['default'].attr('date'),
		dateEdited: _emberData['default'].attr('date'),
		published: _emberData['default'].attr('boolean'),
		blog: _emberData['default'].belongsTo('blog')
	});
});
define('blogs/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('blogs/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.get('store').findAll('blog');
		}
	});
});
define('blogs/routes/blog', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').findRecord('blog', params.blog_id);
		}
	});
});
define('blogs/routes/blog/create', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('blogs/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('blogs/routes/logout', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('blogs/routes/post', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').findRecord('post', params.post_id);
		}
	});
});
define('blogs/serializers/application', ['exports', 'blogs/serializers/drf'], function (exports, _blogsSerializersDrf) {
  exports['default'] = _blogsSerializersDrf['default'];
});
define('blogs/serializers/blog', ['exports', 'blogs/serializers/drf', 'ember'], function (exports, _blogsSerializersDrf, _ember) {
	exports['default'] = _blogsSerializersDrf['default'].extend({
		keyForAttribute: function keyForAttribute(attr) {
			return _ember['default'].String.underscore(attr);
		}
	});
});
define('blogs/serializers/drf', ['exports', 'ember-django-adapter/serializers/drf'], function (exports, _emberDjangoAdapterSerializersDrf) {
  exports['default'] = _emberDjangoAdapterSerializersDrf['default'];
});
define('blogs/serializers/post', ['exports', 'blogs/serializers/drf'], function (exports, _blogsSerializersDrf) {
  exports['default'] = _blogsSerializersDrf['default'].extend({});
});
define('blogs/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("blogs/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SOAP+cZf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"login\"],null,3],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"logout\"],null,2],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Блоги\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"blog\",\"name\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"blog\",[\"get\",[\"blog\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"blog\"]},{\"statements\":[[\"text\",\" Выйти \"]],\"locals\":[]},{\"statements\":[[\"text\",\" Войти \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/application.hbs" } });
});
define("blogs/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TkCxf8cz", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Это страница списка записей в блоге\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"createdBy\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Посты\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"postSet\"]]],null,1],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"post\",\"title\"]],false]],\"locals\":[]},{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"post\",[\"get\",[\"post\",\"id\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"post\"]}],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/blog.hbs" } });
});
define("blogs/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "aAKyKKkG", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Это страница входа в систему\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/login.hbs" } });
});
define("blogs/templates/logout", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "eb/pUL+I", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Это страница выхода из системы\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/logout.hbs" } });
});
define("blogs/templates/post", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cn/JRSGs", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Это страница записи в блоге\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"text\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"dateCreated\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"dateEdited\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"blog\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"published\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "blogs/templates/post.hbs" } });
});
define('blogs/transforms/post-set', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Transform.extend({
    deserialize: function deserialize(post_values) {
      return post_values;
    },

    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('blogs/config/environment', ['ember'], function(Ember) {
  var prefix = 'blogs';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("blogs/app")["default"].create({"API_HOST":"http://localhost:8000","API_NAMESPACE":"","name":"blogs","version":"0.0.0+9d7f6739","API_ADD_TRAILING_SLASHES":true});
}

/* jshint ignore:end */
//# sourceMappingURL=blogs.map
