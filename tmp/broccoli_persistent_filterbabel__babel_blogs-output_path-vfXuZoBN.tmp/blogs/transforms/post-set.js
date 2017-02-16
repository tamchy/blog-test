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