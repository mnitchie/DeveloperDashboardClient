import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	session: Ember.inject.service('session'),

	setupController(controller, model) {
		this._super(controller, model);
		controller.set('session', this.get('session'));
	},

	actions: {
		logout() {
			// this.get('session').invalidate();
		}
	}
});
