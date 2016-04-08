import Ember from 'ember';

export default Ember.Component.extend({
  bestQuestion: Ember.inject.service(),
  updateQuestionForm: false,

  actions: {
    addToFav(item) {
      this.get('bestQuestion').add(item);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
