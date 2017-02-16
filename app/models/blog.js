import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	dateCreated: DS.attr('date'),
	createdBy: DS.attr('string'),
	postSet: DS.hasMany('post')
});
