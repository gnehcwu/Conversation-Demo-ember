import Ember from 'ember'
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function (controller, model) {
    var _this = this;
    controller.set('model', model);
    controller.set('comment', _this.store.createRecord('comment', {
      conversation: model
    }));
  }
});
