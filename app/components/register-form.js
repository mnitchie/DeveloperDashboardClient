import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',

	submit() {
		this.attrs['on-submit']();

		return false;
	},

	'on-submit': null, // attribute

	username: null,
	password: null,
});
