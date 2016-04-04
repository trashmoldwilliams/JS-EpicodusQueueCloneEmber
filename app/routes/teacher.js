import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question')
    // console.log(this.questions);
  },
  actions: {
    delete(question) {
      question.destroyRecord();
    }
  }
});
