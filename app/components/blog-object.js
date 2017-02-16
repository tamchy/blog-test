import Ember from 'ember';

export default Ember.Component.extend({
	cookies: Ember.inject.service(),
	init() {
		this._super(...arguments);
		let blogObject = this.get('blog');
		let cookieService = this.get('cookies');
		let curUser = cookieService.read('currentUser');
		if (blogObject.get('createdBy') === curUser){
			this.set('userCanEdit', true);
		}
		else {
			this.set('userCanEdit', false);
		}
	}
});
