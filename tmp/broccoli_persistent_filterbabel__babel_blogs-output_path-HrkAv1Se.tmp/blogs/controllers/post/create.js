define('blogs/controllers/post/create', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		blog: _ember['default'].inject.service(),
		actions: {
			createPost: function createPost(title, text, isPublished) {
				var blog_id = this.get('blog').getCurrentBlog();
				var dateCreated = new Date();
				var dateEdited = new Date();
				var post = this.get('store').createRecord('post', {
					title: title,
					text: text,
					blog: blog_id,
					dateCreated: dateCreated,
					dateEdited: dateEdited,
					isPublished: isPublished
				});
				post.save();
			}
		}
	});
});