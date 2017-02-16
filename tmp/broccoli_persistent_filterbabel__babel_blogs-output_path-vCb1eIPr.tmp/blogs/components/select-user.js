define('blogs/components/select-user', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		user: _ember['default'].inject.service(),
		init: function init() {
			this._super.apply(this, arguments);
			var curUser = this.get('user').getCurrentUser();
			this.set('usern', curUser);
		},
		actions: {
			userSelected: function userSelected(username) {
				this.get('user').changeCurrentUser(username);
			}
		}
	});
});