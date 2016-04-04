import Ember from 'ember';

export default Ember.Component.extend({
  timeWaited: Ember.computed('question.date', function () {
    var currentTime = new Date();
    var waitTime = currentTime.getTime() - this.get('question.date');
    // console.log(waitTime);
    console.log(this.get('question.date'));

    return Math.round(waitTime/60000)+1;
  }),

  actions: {
    delete(question) {
      this.sendAction('destroyQuestion', question);
    }
  }
});
