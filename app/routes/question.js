import Ember from 'ember';

export default Ember.Route.extend({
  maodel(params) {
    return this.store.findRecord('question', params.question_id);
  }
});
