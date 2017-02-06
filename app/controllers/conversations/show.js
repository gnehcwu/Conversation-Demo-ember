import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  actions: {
    addComment: function () {
      var _this = this;
      this.get('comment').save().then(
        (comment) => {
          this.get('notify').info('Comment created success!', {
            closeAfter: 5000
          });
        });
      this.set('comment', null);
    },
    deleteConv: function(c) {
      c.destroyRecord();
      // console.log(c.get('title'));
      this.get('notify').info('Conversation deleted success!', {
        closeAfter: 5000
      });

      this.transitionToRoute('index');
    }
  },
  isCurrentUserOrAdmin: Ember.computed('session.currentUser', 'model', {
    get() {
      if (this.get('session.currentUser.id') === this.get('model').get('user').get('id')) {
        return true
      }

      if (this.get('session.currentUser.admin')) {
        return true;
      }

      return false;
    }
  })
});