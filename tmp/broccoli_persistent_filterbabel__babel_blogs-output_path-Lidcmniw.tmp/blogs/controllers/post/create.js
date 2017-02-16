define('blogs/controllers/post/create', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		queryParams: ['blogId'],
		blogId: null,
		cookies: _ember['default'].inject.service(),
		userCanEdit: _ember['default'].computed("blogId", "cookies", function () {
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			var blogId_ = this.get('blogId');
			var self = this;
			this.get('store').findRecord('blog', blogId_).then(function (blog) {
				if (blog.get('createdBy') === curUser) {
					self.set('userCanEdit', true);
				} else {
					self.set('userCanEdit', false);
				}
			});
		}),
		mainPage: false,
		actions: {
			createPost: function createPost(title, text, published) {
				var dateCreated = new Date();
				var dateEdited = new Date();
				var blogId_ = this.get('blogId');
				var post = this.get('store').createRecord('post', {
					title: title,
					text: text,
					dateCreated: dateCreated,
					dateEdited: dateEdited,
					published: published
				});

				var self = this;

				function redirectToPost(post) {
					self.transitionToRoute('post.index', post);
				}

				function handleError(reason) {
					alert('Ошибка', reason);
				}

				this.get('store').findRecord('blog', blogId_).then(function (blog) {
					post.set('blog', blog);
					post.save().then(redirectToPost)['catch'](handleError);
				});
			}
		}
	});
});