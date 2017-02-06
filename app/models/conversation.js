/**
 * Created by cheng on 17/2/4.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  user: DS.belongsTo('user', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
});
