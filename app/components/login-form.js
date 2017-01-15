import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'form',
	submit() {
		this.attrs['on-submit'](this.get('userName'), this.get('password'));

		return false;
	},

	'on-submit': null, // attribute

	userName: null,
	password: null,
});
