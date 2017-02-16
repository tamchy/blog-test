import Ember from 'ember';

var Component = Ember.Component;
var computed = Ember.computed;
var run = Ember.run;

export default Component.extend({
  tagName: 'input',
  type: 'radio',

  // value - required
  // groupValue - required

  // disabled - optional
  // name - optional
  // required - optional
  // radioClass - string
  // radioId - string

  defaultLayout: null, // ie8 support

  attributeBindings: ['checked', 'disabled', 'name', 'required', 'type', 'value'],

  checked: computed('groupValue', 'value', function () {
    return this.get('groupValue') === this.get('value');
  }).readOnly(),

  sendChangedAction: function sendChangedAction() {
    this.sendAction('changed', this.get('value'));
  },

  change: function change() {
    var value = this.get('value');
    var groupValue = this.get('groupValue');

    if (groupValue !== value) {
      this.set('groupValue', value); // violates DDAU
      run.once(this, 'sendChangedAction');
    }
  }
});