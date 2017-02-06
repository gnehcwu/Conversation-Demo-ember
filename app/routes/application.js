import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel: function (transition) {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    if (transition.targetName === 'login' && this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
    return true;
  },

  notify: Ember.inject.service('notify'),
  session: Ember.inject.service('session'),

  actions: {
    error: function (errorObject) {
      if (errorObject) {
        if (errorObject.status === 401 || errorObject.status === 403) {
          this.get('notify').info('Your account has no permission!', {
            closeAfter: 5000
          });
          return this.transitionTo('login');
        }
      }
      return true;
    },
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
