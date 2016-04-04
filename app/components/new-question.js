import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var theTime = new Date();
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        location: this.get('location'),
        date: theTime.getTime()
      };
      console.log(params);
      this.sendAction('save2', params);
    }
  }
});
