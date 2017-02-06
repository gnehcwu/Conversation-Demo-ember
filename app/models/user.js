import DS from 'ember-data';

export default DS.Model.extend({
  admin: DS.attr('boolean'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  conversations: DS.hasMany('conversation', {async: true}),
});
