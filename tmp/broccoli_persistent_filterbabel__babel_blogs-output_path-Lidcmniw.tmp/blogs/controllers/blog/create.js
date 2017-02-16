define('blogs/controllers/blog/create', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		cookies: _ember['default'].inject.service(),
		actions: {
			createBlog: function createBlog(blog_name) {
				var dateCreated = new Date();
				var cookieService = this.get('cookies');
				var createdBy = cookieService.read('currentUser');
				var blog = this.get('store').createRecord('blog', {
					name: blog_name,
					dateCreated: dateCreated,
					createdBy: createdBy
				});
				var self = this;
				function redirectToBlog(blog) {
					self.transitionToRoute('blog.index', blog);
				}

				function handleError(reason) {
					alert('Ошибка', reason);
				}
				blog.save().then(redirectToBlog)['catch'](handleError);
			}
		}
	});
});