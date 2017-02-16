import Ember from 'ember';

export default Ember.Controller.extend({
	mainPage: false,
	blogId: Ember.computed("model", function(){
		return this.get('model').get('id');
	}),
	cookies: Ember.inject.service(),
	userCanEdit: Ember.computed("model","cookies",function(){
		let cookieService = this.get('cookies');
		let curUser = cookieService.read('currentUser');
		if (this.get('model').get('createdBy') === curUser) {
			return true;
		}
		else {
			return false;
		}
	})
});