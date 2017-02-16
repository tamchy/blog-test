import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		createBlog: function(){
			let editing = this.get('editing');
			if (!editing){
				let createFunction = this.get('toCreate');
				let blog_name = this.get('name');
				createFunction(blog_name);
			}
			else {
				let editFunction = this.get('toEdit');
				let blog_name = this.get('name');
				editFunction(this.get('blog'),blog_name);
			}
		}
	}
});
