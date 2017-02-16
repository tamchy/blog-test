import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	text: DS.attr('string'),
	dateCreated: DS.attr('date'),
	dateEdited: DS.attr('date'),
	published: DS.attr('boolean'),
	blog: DS.belongsTo('blog')
});
