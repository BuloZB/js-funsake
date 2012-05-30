require.config({

	paths: {
		// libs
		jquery      : '_libs/jquery.min',
		underscore  : '_libs/underscore.min',
		backbone    : '_libs/backbone',

		// plugins
		text       : '_libs/plugins/require/text.min'
	},

	shim: {
		'underscore': {
			deps: [],
			exports: function() {
				return this._.noConflict();
			}
		},

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: function(_, $) {
				return this.Backbone.noConflict();
			}
		}
	}

});


require([
	'app'

], function(App){

//	$.noConflict();

	if (window.console) {
		console.log(window);
		console.log(App);

		App.run();
	}

});
