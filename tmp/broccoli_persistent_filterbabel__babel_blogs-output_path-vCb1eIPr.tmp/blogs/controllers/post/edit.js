define('blogs/controllers/post/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			editPost: function editPost(title, text, published, post) {
				var self = this;
				function redirectToPost(post) {
					self.transitionToRoute('post.index', post);
				}

				function handleError(reason) {
					alert('Ошибка', reason);
				}
				var dateEdited = new Date();
				post.set('title', title);
				post.set('text', text);
				post.set('dateEdited', dateEdited);
				post.set('published', published);
				post.save().then(redirectToPost)['catch'](handleError);
			}
		}
	});
});