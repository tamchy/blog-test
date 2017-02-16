import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(post_values) {
    return post_values;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
