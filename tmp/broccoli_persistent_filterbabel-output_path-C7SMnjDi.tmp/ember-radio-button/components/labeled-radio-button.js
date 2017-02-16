define('ember-radio-button/components/labeled-radio-button', ['exports', 'ember', 'ember-radio-button/templates/components/labeled-radio-button'], function (exports, _ember, _emberRadioButtonTemplatesComponentsLabeledRadioButton) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  exports['default'] = Component.extend({
    tagName: 'label',
    layout: _emberRadioButtonTemplatesComponentsLabeledRadioButton['default'],
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
});