define('blogs/components/blog-editing', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			createBlog: function createBlog() {
				var editing = this.get('editing');
				if (!editing) {
					var createFunction = this.get('toCreate');
					var blog_name = this.get('name');
					createFunction(blog_name);
				} else {
					var editFunction = this.get('toEdit');
					var blog_name = this.get('name');
					editFunction(this.get('blog'), blog_name);
				}
			}
		}
	});
});