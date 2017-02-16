define('blogs/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr('string'),
		text: _emberData['default'].attr('string'),
		dateCreated: _emberData['default'].attr('date'),
		dateEdited: _emberData['default'].attr('date'),
		published: _emberData['default'].attr('boolean'),
		blog: _emberData['default'].belongsTo('blog')
	});
});