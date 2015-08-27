'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('generator', function () {
	this.timeout(5000);

	beforeEach(function (cb) {
		var deps = ['../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				cb(err);
				return;
			}

			this.generator = helpers.createGenerator('nm5:app', deps, null, {skipInstall: true});
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = [
			'.editorconfig',
			'.eslintrc',
			'.gitattributes',
			'.gitignore',
			'.travis.yml',
			'.tachikoma.yml',
			'appveyor.yml',
			'enable-power-assert.js',
			'Execute-With-Retry.ps1',
			'index.js',
			'license',
			'package.json',
			'readme.md',
			'test.js',
			'windows_retry.cmd'
		];

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: false
		});

		this.generator.run(function () {
			assert.file(expected);
			assert.noFile('cli.js');
			cb();
		});
	});

	it('CLI option', function (cb) {
		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com',
			cli: true
		});

		this.generator.run(function () {
			assert.file('cli.js');
			assert.fileContent('package.json', /"bin":/);
			assert.fileContent('package.json', /"bin": "cli.js"/);
			assert.fileContent('package.json', /"meow"/);
			cb();
		});
	});
});
