define('blogs/models/blog', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		dateCreated: _emberData['default'].attr('date'),
		createdBy: _emberData['default'].attr('string'),
		postSet: _emberData['default'].hasMany('post')
	});
});