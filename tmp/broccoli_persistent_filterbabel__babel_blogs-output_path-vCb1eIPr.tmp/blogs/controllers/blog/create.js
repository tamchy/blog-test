define('blogs/controllers/blog/create', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		user: _ember['default'].inject.service(),
		actions: {
			createBlog: function createBlog(blog_name) {
				var dateCreated = new Date();
				var createdBy = this.get('user').getCurrentUser();
				alert(createdBy);
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