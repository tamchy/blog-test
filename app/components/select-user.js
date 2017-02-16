import Ember from 'ember';

export default Ember.Component.extend({
	cookies: Ember.inject.service(),
	init() {
		this._super(...arguments);
		let cookieService = this.get('cookies');
		let curUser = cookieService.read('currentUser');
		this.set('usern',curUser);
	},
	actions: {
		userSelected(username) {
			let cookieService = this.get('cookies');
			cookieService.write('currentUser', username);
			location.reload();
		}
	}
});
