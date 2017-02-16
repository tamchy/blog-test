define('blogs/components/select-user', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		cookies: _ember['default'].inject.service(),
		init: function init() {
			this._super.apply(this, arguments);
			var cookieService = this.get('cookies');
			var curUser = cookieService.read('currentUser');
			this.set('usern', curUser);
		},
		actions: {
			userSelected: function userSelected(username) {
				var cookieService = this.get('cookies');
				cookieService.write('currentUser', username);
				location.reload();
			}
		}
	});
});