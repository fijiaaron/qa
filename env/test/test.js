var assert = require('assert');
var should = require('should');

var app = require('../app');

describe('QA.Env', function() {
	describe('app', function() {
		it ('should give the app name', function() {
			assert.equal(app.name, 'QA.Env');
		});
	});
});