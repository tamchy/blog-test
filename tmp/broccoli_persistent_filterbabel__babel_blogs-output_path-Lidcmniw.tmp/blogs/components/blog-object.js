define('blogs/components/blog-object', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		cookies: _ember['default'].inject.service(),
		init: function init() {
			this._super.apply(this, arguments);
			var blogObject = this.get('blog');
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			if (blogObject.get('createdBy') === curUser) {
				this.set('userCanEdit', true);
			} else {
				this.set('userCanEdit', false);
			}
		}
	});
});