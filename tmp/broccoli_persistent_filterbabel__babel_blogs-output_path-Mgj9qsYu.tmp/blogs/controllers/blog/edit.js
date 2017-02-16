define("blogs/controllers/blog/edit", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		cookies: _ember["default"].inject.service(),
		userCanEdit: _ember["default"].computed("model", "cookies", function () {
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			if (this.get('model').get('createdBy') === curUser) {
				return true;
			} else {
				return false;
			}
		}),
		actions: {
			editBlog: function editBlog(blog, new_blog_name) {
				blog.set('name', new_blog_name);

				var self = this;
				function redirectToBlog(blog) {
					self.transitionToRoute('blog.index', blog);
				}

				function handleError(reason) {
					alert('Ошибка', reason);
				}

				blog.save().then(redirectToBlog)["catch"](handleError);
			}
		}
	});
});