import Ember from 'ember';

export default Ember.Service.extend({
	currentBlog: null,

	init() {
		this._super(...arguments);
	},

	setBlog(blog) {
		this.set('currentBlog', blog);
	},

	getCurrentBlog() {
		return this.get('currentBlog');
	}

});
