import Ember from 'ember';
import layout from '../templates/components/labeled-radio-button';

var Component = Ember.Component;
var computed = Ember.computed;

export default Component.extend({
  tagName: 'label',
  layout: layout,
  attributeBindings: ['for'],
  classNameBindings: ['checked'],
  classNames: ['ember-radio-button'],
  defaultLayout: null, // ie8 support

  checked: computed('groupValue', 'value', function () {
    return this.get('groupValue') === this.get('value');
  }).readOnly(),

  'for': computed.readOnly('radioId'),

  actions: {
    innerRadioChanged: function innerRadioChanged(value) {
      this.sendAction('changed', value);
    }
  }
});