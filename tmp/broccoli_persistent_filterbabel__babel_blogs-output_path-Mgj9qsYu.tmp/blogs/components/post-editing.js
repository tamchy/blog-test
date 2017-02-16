define('blogs/components/post-editing', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			createPost: function createPost() {
				var editing = this.get('editing');
				var title = this.get('title');
				var text = this.get('text');
				var published = this.get('published');
				if (!editing) {
					var createFunction = this.get('toCreate');
					createFunction(title, text, published);
				} else {
					var post = this.get('post');
					var editFunction = this.get('toEdit');
					editFunction(title, text, published, post);
				}
			}
		}
	});
});