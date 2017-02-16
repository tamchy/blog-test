define('blogs/components/post-editing', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			createPost: function createPost() {
				var _this = this;

				var editing = this.get('editing');
				var title = this.get('title');
				var text = this.get('text');
				var isPublished = this.get('isPublished');
				if (!editing) {
					var createFunction = this.get('toCreate');
					createFunction(title, text, isPublished);
				} else {
					var post = this.get('post');
					var editFunction = this.get('toEdit');
					editFunction(title, text, isPublished, post).then(function (result) {
						return _this.set('result', result);
					});
				}
			}
		}
	});
});