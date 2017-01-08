import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
	actions: {
		register() {
			Ember.$.ajax({
				url: 'api/Account/Register',
				type: 'POST',
				body: {
					username: 'username',
					password: 'password'
				}
			});
		}
	}
});
