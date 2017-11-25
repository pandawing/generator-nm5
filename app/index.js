'use strict';
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var Generator = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = class extends Generator {
	init () {
		return this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your module?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function (val) {
				return _s.slugify(val);
			}
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: function (val) {
				return val.length > 0 ? true : 'You have to provide a username';
			}
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: function (val) {
				return val.length > 0 ? true : 'You have to provide a website URL';
			},
			filter: function (val) {
				return normalizeUrl(val);
			}
		}, {
			name: 'cli',
			message: 'Do you need a CLI?',
			type: 'confirm',
			default: false
		}]).then(function (props) {
			var tpl = {
				moduleName: props.moduleName,
				camelModuleName: _s.camelize(props.moduleName),
				githubUsername: props.githubUsername,
				name: this.user.git.name(),
				email: this.user.git.email(),
				website: props.website,
				humanizedWebsite: humanizeUrl(props.website),
				cli: props.cli
			};

			var mv = function (from, to) {
				this.fs.move(this.destinationPath(from), this.destinationPath(to));
			}.bind(this);

			this.fs.copyTpl([
				this.templatePath() + '/**',
				'!**/cli.js'
			], this.destinationPath(), tpl);

			if (props.cli) {
				this.fs.copyTpl(this.templatePath('cli.js'), this.destinationPath('cli.js'), tpl);
			}

			mv('editorconfig', '.editorconfig');
			mv('eslintrc', '.eslintrc');
			mv('gitattributes', '.gitattributes');
			mv('gitignore', '.gitignore');
			mv('travis.yml', '.travis.yml');
			mv('tachikoma.yml', '.tachikoma.yml');
			mv('_package.json', 'package.json');
		}.bind(this));
	}
	install () {
		this.installDependencies({
			bower: false,
			callback: this._injectDependencies.bind(this)
		});
	}
	_injectDependencies () {
		this.spawnCommandSync('npm', ['run', 'fixpack']);
	}
};
