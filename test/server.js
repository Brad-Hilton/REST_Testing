// This is test/server.js
var request = require('supertest');
//var assert = require('assert');
var expect = require('chai').expect;
//var should = require('chai').should();

// Here we load our server.js as a module
var server = require('../server');

describe('Server', function() {
	describe('GET /get-data', function() {
		it('responds with default data', function(done) {
			request(server)
				.get('/get-data')
				.end(function(err, res) {
					// Make sure there was no error
					//assert.equal(err, null);
					expect(err).to.equal(null);

					var body = res.body;
					//assert.equal(body.data, 'default data');
					expect(body.data).to.equal('default data');

					// Finish asynchronous test
					done();
				});
		});
	});

	describe('POST /set-data', function() {
		it('responds with success', function(done) {
			request(server)
				.post('/set-data')
				.send({data: 'new data'})
				.end(function(err, res) {
					//assert.equal(err, null);
					expect(err).to.equal(null);

					var body = res.body;
					//assert.equal(body.result, 'success');
					expect(body.result).to.equal('success');
					//body.result.should.equal('success');
					done();
				});
		});
	});

	describe('GET /get-data', function() {
		it('responds with new data', function(done) {
			request(server)
				.get('/get-data')
				.end(function(err, res) {
					//assert.equal(err, null);
					expect(err).to.equal(null);

					var body = res.body;
					//assert.equal(body.data, 'new data');
					expect(body.data).to.equal('new data');
					done();
				});
		});
	});
});