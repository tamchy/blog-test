define('blogs/controllers/post/delete', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		cookies: _ember['default'].inject.service(),
		mainPage: false,
		blogId: _ember['default'].computed("model", function () {
			return this.get('model').get('blog').get('id');
		}),
		userCanEdit: _ember['default'].computed("model", "cookies", function () {
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			var postCreatedBy = this.get('model').get('blog').get('createdBy');
			if (postCreatedBy === curUser) {
				return true;
			} else {
				return false;
			}
		}),
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