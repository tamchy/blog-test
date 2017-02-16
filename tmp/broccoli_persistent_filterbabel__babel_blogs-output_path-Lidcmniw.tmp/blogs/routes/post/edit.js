define('blogs/routes/post/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').findRecord('post', params.post_id);
		}
	});
});