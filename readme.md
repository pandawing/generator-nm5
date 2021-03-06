# generator-nm5

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Scaffold out a [node module](https://github.com/sindresorhus/node-module-boilerplate)

Optionally with a [CLI](http://en.wikipedia.org/wiki/Command-line_interface).

This is what I use for [my own modules](https://www.npmjs.com/~sanemat).

![](screenshot.png)

A Cross-Platform Node.js ES5 Module Generator For OS X, Linux And Windows.


## Install

```
$ npm install --global generator-nm5
```


## Usage

With [yo](https://github.com/yeoman/yo):

```
$ yo nm5
```


## Example

[Build example](./example).


## Tip

Use [chalk](https://github.com/sindresorhus/chalk) if you want colors in your CLI.


## Features

Currently, it uses :

* Lint
    * eslint
    * eclint - editorconfig
* CI
    * travis-ci - Test on Ubuntu
    * appveyor - Test on Windows
    * tachikoma - Dependency Update as a Service. http://tachikoma.io
* Test
    * mocha
    * power-assert
* Utility
    * fixpack - Sort package.json
    * conventional-changelog - Changelog
    * npm-check-updates - Dependency Update


## Changelog

[changelog.md](./changelog.md).


## License

### generator-nm5

MIT © [Sanemat](http://sane.jp)

### Original [generator-nm](https://github.com/sindresorhus/generator-nm)

MIT © [Sindre Sorhus](http://sindresorhus.com)


[travis-url]: https://travis-ci.org/pandawing/generator-nm5
[travis-image]: https://img.shields.io/travis/pandawing/generator-nm5/master.svg?style=flat-square&label=build%20%28linux%29
[appveyor-url]: https://ci.appveyor.com/project/sanemat/generator-nm5/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/generator-nm5/master.svg?style=flat-square&label=build%20%28windows%29
[npm-url]: https://npmjs.org/package/generator-nm5
[npm-image]: https://img.shields.io/npm/v/generator-nm5.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/generator-nm5
[daviddm-image]: https://img.shields.io/david/pandawing/generator-nm5.svg?style=flat-square
