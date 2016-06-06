import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(rental) {
      if (confirm('Are you for real?!')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
