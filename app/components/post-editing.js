import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		createPost: function(){
			let editing = this.get('editing');
			let title = this.get('title');
			let text = this.get('text');
			let published = this.get('published');
			if (!editing){
				let createFunction = this.get('toCreate');
				createFunction(title,text,published);
			}
			else {
				let post = this.get('post');
				let editFunction = this.get('toEdit');
				editFunction(title,text,published, post);
			}
		}
	}
});
