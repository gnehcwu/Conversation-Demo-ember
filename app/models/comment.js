import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  conversation: DS.belongsTo('conversation', {async: true}),
  // user: DS.belongsTo('user', {async: true})
});
