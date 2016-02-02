
/** First you should use: npm start */
/** and then please run in root folder: npm test */

var request = require('superagent');
var expect = require('expect.js');
var port = process.env.PORT || 4000;
var resource = '/api/news_mock.json'

describe('request to news info', function() {
  describe('should respond to GET', function () {
    it('should respond OK to GET request', function (done) {
      request.get('http://localhost:' + port + resource)
        .end(function (err, res) {
          expect(res.status).to.equal(200);
          done();
        })
    })
  });
  describe('should respond to GET', function () {
    it('should have at least one news item', function (done) {
      request.get('http://localhost:' + port + resource)
        .end(function (err, res) {
          expect(res.body).to.not.be.empty();
          done();
        })
    })
  });
  describe('should respond to GET', function () {
    it('should have 4 properties: { id, title, content, image }', function (done) {
      request.get('http://localhost:' + port + resource)
        .end(function (err, res) {
          expect(Object.keys(res.body[2]).length).to.equal(4);
          done();
        })
    })
  });
});