import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('answer');
  },

  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },

  saveQuestion3(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
   }
  }
});
