import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
	actions: {
		login(username, password) {
			this.get('session').authenticate('authenticator:oauth2', username, password).then(() => {
			}).catch(error => {
				alert(error.error_description); // send this back to the component to display the error
			});
		}
	}
});
