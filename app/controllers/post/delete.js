import Ember from 'ember';

export default Ember.Controller.extend({
	cookies: Ember.inject.service(),
	mainPage: false,
	blogId: Ember.computed("model", function(){
		return this.get('model').get('blog').get('id');
	}),
	userCanEdit: Ember.computed("model","cookies", function(){
		let cookieService = this.get('cookies');
		let curUser = cookieService.read('currentUser');
		let postCreatedBy = this.get('model').get('blog').get('createdBy');
		if (postCreatedBy === curUser){
			return true;
		}
		else {
			return false;
		}
	}),
	actions: {
		delete: function(){
			let post = this.get('model');
			let blog = post.get('blog');
			post.destroyRecord();
			this.transitionToRoute('blog.index', blog);
		}
	}
});