import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['blogId'],
	blogId:null,
	cookies: Ember.inject.service(),
	userCanEdit: Ember.computed("blogId","cookies", function(){
		let cookieService = this.get('cookies');
		let curUser = cookieService.read('currentUser');
		let blogId_ = this.get('blogId');
		var self = this;
		this.get('store').findRecord('blog',blogId_).then(function(blog){
			if (blog.get('createdBy') === curUser) {
				self.set('userCanEdit',true);
			}
			else {
				self.set('userCanEdit',false);
			}
		});
	}),
	mainPage: false,
	actions: {
		createPost: function(title,text,published){
			let dateCreated = new Date();
			let dateEdited = new Date();
			let blogId_ = this.get('blogId');
			let post = this.get('store').createRecord('post',{
				title: title,
				text: text,
				dateCreated: dateCreated,
				dateEdited: dateEdited,
				published: published
			});

			var self = this;

			function redirectToPost(post) {
				self.transitionToRoute('post.index', post);
			}

			function handleError(reason){
				alert('Ошибка',reason);
			}

			this.get('store').findRecord('blog',blogId_).then(function(blog){
				post.set('blog',blog);
				post.save().then(redirectToPost).catch(handleError);
			});
		}
	}
});
