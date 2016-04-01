import DS from 'ember-data';

export default DS.Model.extend({
  questionTitle: DS.attr(),
  author: DS.attr(),
  comment: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
