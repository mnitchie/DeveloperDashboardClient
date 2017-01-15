import Ember from 'ember';

const urlRoot = '/api/'; // configure? So that other 'stores' can use it
const resourceName = 'Account'; // account? user-management service? Or user store?

// have some more generic constructUrl function for all stores

export default Ember.Service.extend({
	http: Ember.inject.service(),

	create(user = {userName, password, confirmPassword}) {
		return this.get('http').post(`${urlRoot}${resourceName}`, user);
	}
});
