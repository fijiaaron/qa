var assert = require('assert');
var should = require('chai').should();

describe('QA.Env', function() {
	describe('app', function() {
		var app = require('../app');

		it ('should load the app module', function() {
			app.should.not.be.null;
		});

		it ('should have a property that returns the app name', function() {
			app.should.have.property("name");
			app.name.should.equal("QA.Env");			
		});


	});

});