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
		editPost: function(title,text,published,post){
			var self = this;
			function redirectToPost(post) {
				self.transitionToRoute('post.index', post);
			}

			function handleError(reason){
				alert('Ошибка',reason);
			}
			let dateEdited = new Date();
			post.set('title',title);
			post.set('text',text);
			post.set('dateEdited',dateEdited);
			post.set('published',published);
			post.save().then(redirectToPost).catch(handleError);
		}
	}
});
