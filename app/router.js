import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('blog', {path:'/blog/'}, function() {
  	this.route('index', {path:':blog_id'});
    this.route('create');
    this.route('delete',{path:':blog_id/delete'});
    this.route('edit',{path:':blog_id/edit'});
  });
  this.route('post', {path:'/post/'}, function() {
  	this.route('index', {path:':post_id'});
    this.route('create');
    this.route('edit',{path:':post_id/edit'});
    this.route('delete',{path:':post_id/delete'});
  });
});

export default Router;
