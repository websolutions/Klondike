import Ember from 'ember';
import BaseControllerMixin from 'klondike/mixins/base-controller';
import config from '../config/environment';

export default Ember.Controller.extend(BaseControllerMixin, {
    ui : config.APP.ui,
    
  packageSourceCommand: function() {
    return 'nuget sources add -name Klondike -source ' + this.get('packageSourceUri');
  }.property('packageSourceUri')
});
