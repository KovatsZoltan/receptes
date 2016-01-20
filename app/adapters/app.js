import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({
  host: 'https://api-kovatszoltan.c9users.io/',
  namespace: ''
});
