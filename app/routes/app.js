import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	http: Ember.inject.service(),

	model() {
		return this.get('http').fetch('api/Orders').then(orders => {
			console.log(orders);
		});
	}
});
