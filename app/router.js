import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new');
  this.route('recept', {path: '/recept/:receptid'});
  this.route('listaz');
});

export default Router;
