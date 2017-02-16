import Ember from 'ember';

export default Ember.Controller.extend({
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
	}),
	actions: {
		delete: function(){
			let blog = this.get('model');
			blog.destroyRecord();
			this.transitionToRoute('index');
		}
	}
});
