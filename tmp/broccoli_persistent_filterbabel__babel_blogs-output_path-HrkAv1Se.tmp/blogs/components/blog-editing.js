define('blogs/components/blog-editing', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		init: function init() {
			this._super.apply(this, arguments);
			this.set('name', this.get('blog').get('name'));
		},
		actions: {
			createBlog: function createBlog() {
				var _this = this;

				var editing = this.get('editing');
				if (!editing) {
					var createFunction = this.get('toCreate');
					var blog_name = this.get('name');
					createFunction(blog_name).then(function (result) {
						return _this.set('result', result);
					});
				} else {
					var editFunction = this.get('toEdit');
					var old_blog_name = this.get('blog').get('name');
					var new_blog_name = this.get('name');
					if (old_blog_name !== new_blog_name) {
						editFunction(this.get('blog'), new_blog_name);
					}
				}
			}
		}
	});
});