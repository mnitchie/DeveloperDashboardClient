import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
	userManager: Ember.inject.service('user-management'),

	actions: {
		register(user) {
			return this.get('userManager').create(user).then(() => {
				Ember.run.later(this, () => {
					this.transitionTo('login');
				}, 5000);
			}) ;
		}
	}
});

// Routes

// /
// /register
// /login (same as /?)
// /app/(index) (authenticated) - the dashboard. all the stuff together in some kind of summary
// /app/<each service in more detail>
// /app/account (central place to manage user details, api keys, etc...)

