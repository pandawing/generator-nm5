#!/usr/bin/env node
'use strict';
var meow = require('meow');
var example = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ example [input]',
		'',
		'Examples',
		'  $ example',
		'  unicorns & rainbows',
		'',
		'  $ example ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(example(cli.input[0] || 'unicorns'));
