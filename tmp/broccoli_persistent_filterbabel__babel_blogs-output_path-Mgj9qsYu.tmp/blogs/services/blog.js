define('blogs/services/blog', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		currentBlog: null,

		init: function init() {
			this._super.apply(this, arguments);
		},

		setBlog: function setBlog(blog) {
			this.set('currentBlog', blog);
		},

		getCurrentBlog: function getCurrentBlog() {
			return this.get('currentBlog');
		}

	});
});