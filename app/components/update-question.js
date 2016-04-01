import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        questionTitle: this.get('questionTitle'),
        author: this.get('author'),
        comment: this.get('comment'),
        answers: this.get('answers'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', questionTitle, params);
    }
  }
});
