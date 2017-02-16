define('blogs/controllers/post/edit', ['exports', 'ember'], function (exports, _ember) {
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
			editPost: function editPost(title, text, published, post) {
				var self = this;
				function redirectToPost(post) {
					self.transitionToRoute('post.index', post);
				}

				function handleError(reason) {
					alert('Ошибка', reason);
				}
				var dateEdited = new Date();
				post.set('title', title);
				post.set('text', text);
				post.set('dateEdited', dateEdited);
				post.set('published', published);
				post.save().then(redirectToPost)['catch'](handleError);
			}
		}
	});
});