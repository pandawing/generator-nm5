'use strict';
var assert = require('power-assert');
var <%= camelModuleName %> = require('./');

it('should ', function () {
  assert.strictEqual(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(<%= camelModuleName %>('unicorns'), 'unicorns & wrong');
});
