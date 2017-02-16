import DRFSerializer from './drf';
import Ember from 'ember';

export default DRFSerializer.extend({
	keyForAttribute: function(attr) {
		return Ember.String.underscore(attr);
	}
});
