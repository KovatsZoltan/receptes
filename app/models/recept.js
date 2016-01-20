import DS from 'ember-data';

export default DS.Model.extend({
  nev: DS.attr('string'),
  nehezsegiszint: DS.attr('string'),
  hozzavalok: DS.hasMany('hozzavalo', {async: true})
});
