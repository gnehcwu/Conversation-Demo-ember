import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },

  // setupController: function (controller, model) {
  //   var _this = this;
  //   controller.set('errorMessage', Ember.A());
  // },
});
