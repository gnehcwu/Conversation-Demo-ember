import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  actions: {
    createConversation: function () {
      var _this = this;
      this.get('conversation').save().then(
        (conversation) => {
          this.get('notify').info('Conversation created success!', {
            closeAfter: 5000
          });
        });
      this.set('conversation', null);
    },
    deleteMyConv: function (c) {
      c.destroyRecord();
      // console.log(c.get('title'));
      this.get('notify').info('Conversation deleted success!', {
        closeAfter: 5000
      });
    }
  }
});
