import Ember from 'ember';

// HACK HACK HACK! fetch is returning a native promise, which doesn't have finally
// so we're cramming it in there. Either don't use `fetch` or polyfill finally in a
// less sucky manner
Promise.prototype.finally = Ember.RSVP.Promise.prototype.finally;

const contentHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
};

export default {
	get(url, data = {}) {
		data.headers = contentHeaders;

		return fetch(url, data).then(response => {
			if (response.ok) {
				const contentType = response.headers.get('content-type');
				if (contentType === "application/json") {
					return response.json();
				}

				return Promise.resolve();
			}

			return response.json().then(error => {
				var errors = [];
				for (var key in error.modelState) {
					for (var i = 0; i < error.modelState[key].length; i++) {
						errors.push(error.modelState[key][i]);
					}
				}

				return Promise.reject({
					code: response.status,
					message: error.message,
					errors: errors
				});
			});
		});
	},

	post(url, data) {
		return this.get(url, {
			method: 'POST',
			body: JSON.stringify(data),
		});
	},

	put() {

	},

	delete() {

	}
};
