import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
    
    delete: function (id) {
      this.store.find('recept', id).then(function (recept) {
    	recept.destroyRecord();
      });
    }
  }
    
    
});
