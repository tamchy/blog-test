import Ember from 'ember';

export default Ember.Controller.extend({
	cookies: Ember.inject.service(),
	actions: {
		createBlog: function(blog_name){
			let dateCreated = new Date();
			let cookieService = this.get('cookies');
			let createdBy = cookieService.read('currentUser');
			let blog = this.get('store').createRecord('blog',{
				name: blog_name,
				dateCreated: dateCreated,
				createdBy: createdBy
				});
			var self = this;
			function redirectToBlog(blog) {
				self.transitionToRoute('blog.index', blog);
			}

			function handleError(reason){
				alert('Ошибка',reason);
			}
			blog.save().then(redirectToBlog).catch(handleError);
		}
	}
});
