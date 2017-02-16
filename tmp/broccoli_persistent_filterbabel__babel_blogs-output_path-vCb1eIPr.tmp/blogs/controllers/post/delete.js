define('blogs/controllers/post/delete', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			'delete': function _delete() {
				var post = this.get('model');
				var blog = post.get('blog');
				post.destroyRecord();
				this.transitionToRoute('blog.index', blog);
			}
		}
	});
});