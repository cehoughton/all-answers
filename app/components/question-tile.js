import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(questionTitle, params) {
      this.sendAction('update', questionTitle, params);
    }
  }
});
