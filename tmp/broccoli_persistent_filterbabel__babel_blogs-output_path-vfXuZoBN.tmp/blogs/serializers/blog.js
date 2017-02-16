define('blogs/serializers/blog', ['exports', 'blogs/serializers/drf', 'ember'], function (exports, _blogsSerializersDrf, _ember) {
	exports['default'] = _blogsSerializersDrf['default'].extend({
		keyForAttribute: function keyForAttribute(attr) {
			return _ember['default'].String.underscore(attr);
		}
	});
});