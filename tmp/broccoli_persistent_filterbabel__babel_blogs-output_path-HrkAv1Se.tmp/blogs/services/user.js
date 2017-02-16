define('blogs/services/user', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		currentUser: null,

		init: function init() {
			this._super.apply(this, arguments);
			this.set('currentUser', "user1");
		},

		getCurrentUser: function getCurrentUser() {
			return this.get('currentUser');
		},

		changeCurrentUser: function changeCurrentUser(username) {
			this.set('currentUser', username);
		}
	});
});