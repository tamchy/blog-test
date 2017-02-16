define('blogs/routes/blog/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').findRecord('blog', params.blog_id);
		}
	});
});