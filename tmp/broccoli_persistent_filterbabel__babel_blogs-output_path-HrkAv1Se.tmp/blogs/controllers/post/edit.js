define('blogs/controllers/post/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		blog: _ember['default'].inject.service(),
		actions: {
			editPost: function editPost(title, text, isPublished, post) {
				var dateEdited = new Date();
				post.set('title', title);
				post.set('text', text);
				post.set('dateEdited', dateEdited);
				post.set('isPublished', isPublished);
				return post.save();
			}
		}
	});
});