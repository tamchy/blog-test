define('blogs/controllers/blog/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		mainPage: false,
		blogId: _ember['default'].computed("model", function () {
			return this.get('model').get('id');
		}),
		cookies: _ember['default'].inject.service(),
		userCanEdit: _ember['default'].computed("model", "cookies", function () {
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			if (this.get('model').get('createdBy') === curUser) {
				return true;
			} else {
				return false;
			}
		})
	});
});