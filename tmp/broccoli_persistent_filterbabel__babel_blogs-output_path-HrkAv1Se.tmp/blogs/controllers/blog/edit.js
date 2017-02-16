define('blogs/controllers/blog/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			editBlog: function editBlog(blog, new_blog_name) {
				blog.set('name', new_blog_name);
				blog.save();
			}
		}
	});
});