'use strict';
const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

describe('generator', function () {
	this.timeout(5000);

	beforeEach(function (cb) {
		const deps = ['../app'];

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
		const expected = [
			'.editorconfig',
			'.eslintrc',
			'.gitattributes',
			'.gitignore',
			'.travis.yml',
			'.tachikoma.yml',
			'appveyor.yml',
			'enable-power-assert.js',
			'index.js',
			'license',
			'package.json',
			'readme.md',
			'test.js'
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
