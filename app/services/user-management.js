import Ember from 'ember';
import http from 'developer-dashboard-client/utils/http';

const urlRoot = '/api/'; // configure? So that other 'stores' can use it
const resourceName = 'Account'; // account? user-management service? Or user store?

// have some more generic constructUrl function for all stores

export default Ember.Service.extend({
	create(user = {userName, password, confirmPassword}) {
		return http.post(`${urlRoot}${resourceName}`, user);
	}
});
