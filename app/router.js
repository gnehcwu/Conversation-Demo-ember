import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('login');
  this.route('logout');
  this.route('users.new', {path: '/signup'});

  this.route('users', function() {
      this.route('show', {
        path: ':user_id'
      })
  });
  this.route('conversations', function() {
    this.route('show', {
      path: ':conversation_id'
    });
  })
});

export default Router;
