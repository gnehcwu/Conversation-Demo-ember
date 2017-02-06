import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.name',
    'model.password',
    'model.passwordConfirmation', {
      get() {
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.name')) &&
          !Ember.isEmpty(this.get('model.password')) &&
          !Ember.isEmpty(this.get('model.passwordConfirmation'));
      }
    }
  ),

  isPwdConfirmValid: Ember.computed('model.passwordConfirmation', {
    get() {
      return this.get('model.passwordConfirmation') === this.get('model.password')
    }
  }),

  notify: Ember.inject.service('notify'),
  actions: {
    createUser() {
      if (this.get('isValid') && this.get('isPwdConfirmValid')) {
        this.get('model').save().then(() => {
          this.get('notify').info('Your account has been created. Please sign in.', {
            closeAfter: 5000
          });
          this.transitionToRoute('login');
        });
      } else {
        if (!this.get('isValid')) {
          this.set('errorMessage', 'You have to fill all the fields!');
          // this.get('errorMessage').pushObject('You have to fill all the fields');
        }
        if (!this.get('isPwdConfirmValid')) {
          this.set('errorMessage', 'Password need to be the same!');
          // this.get('errorMessage').pushObject('Password need to be the same!');
        }
      }

      return false;
    }
  }
});
