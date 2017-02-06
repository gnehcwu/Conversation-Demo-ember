import Ember from 'ember'
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function (controller, model) {
    var _this = this;
    controller.set('model', model);
    if (this.get('session.isAuthenticated')) {
      this.store.find('user', this.get('session.id')).then(function (user) {
        controller.set('user', user);
        controller.set(
          'conversation',
          _this.store.createRecord('conversation', {
            user: user
          }));
      });
    }
  }
});
