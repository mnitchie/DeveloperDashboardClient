import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',

	init() {
		this._super(...arguments);

		this.set('user', Ember.Object.create());
	},

	submit() {
		this.set('processing', true);
		this.set('errors', null);

		this.attrs['on-submit'](this.get('user')).then(response => {
			this.set('errors', null);

			this.set('message', 'Registration Successfull'); // SAD!
		}).catch(error => {
			this.set('errors', error.errors);
		}).finally(() => {
			this.set('processing', false);
		});

		return false;
	},

	'on-submit': null,           // attribute

	user: null,

	message: null,
	processing: false,
	errors: null
});
