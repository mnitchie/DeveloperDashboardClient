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

Routes

/
/register
/login (same as /?)
/app/(index) (authenticated) - the dashboard. all the stuff together in some kind of summary
/app/<each service in more detail>
/app/account (central place to manage user details, api keys, etc...)

