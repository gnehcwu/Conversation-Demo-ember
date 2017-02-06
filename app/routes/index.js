import Ember from 'ember'
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    var url = 'http://localhost:3000/api/v1/recent'
    return Ember.$.getJSON(url).then(function (data) {
      return data["conversations"];
    });
  }
});
