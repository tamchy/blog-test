define('blogs/controllers/blog/delete', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			'delete': function _delete() {
				var blog = this.get('model');
				blog.destroyRecord();
			}
		}
	});
});