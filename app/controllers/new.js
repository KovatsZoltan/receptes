import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNew: function () {
      //console.log( $('[name="nehezseg"]').val());
      var uj = this.store.createRecord('recept', {
        nev: this.ujReceptNev,
        nehezsegiszint: $('[name="nehezseg"]').val()
      });
     //console.log( $('[name="nehezseg"]').val());
      var _this = this;
      uj.save().then(function () {
	_this.transitionTo('listaz');
      });
    }
  }
});
