'use strict';
var assert = require('power-assert');
var example = require('./');

it('should ', function () {
  assert.strictEqual(example('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(example('unicorns'), 'unicorns & wrong');
});
