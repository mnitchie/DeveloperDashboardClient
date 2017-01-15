import Ember from 'ember';

export default Ember.Route.extend({
	http: Ember.inject.service(),

	model() {
		return this.get('http').fetch('api/Orders').then(orders => {
			console.log(orders);
		});
	}
});
