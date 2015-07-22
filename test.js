'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');
var tmp = require('tmp');

describe('generator', function () {
	beforeEach(function (cb) {
		tmp.setGracefulCleanup();
		tmp.dir({ unsafeCleanup: true }, function (err, dir) {
			if (err) {
				cb(err);
				return;
			}

			this.cwd = process.cwd();
			console.log(process.cwd());
			var deps = [path.resolve(this.cwd, './app')];

			process.chdir(dir);
			this.generator = helpers.createGenerator('nm:app', deps, null, {skipInstall: true});
			cb();
		}.bind(this));
	});
	afterEach(function (cb) {
		process.chdir(this.cwd);
		cb();
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
