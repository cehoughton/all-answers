import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        questionTitle: this.get('questionTitle'),
        author: this.get('author'),
        comment: this.get('comment'),
        answers: this.get('answer') ? this.get('answers') : ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
