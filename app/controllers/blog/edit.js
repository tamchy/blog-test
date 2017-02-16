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
		editBlog: function(blog,new_blog_name){
			blog.set('name', new_blog_name);

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
