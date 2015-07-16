# example

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save example
```


## Usage

```js
var example = require('example');

example('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global example
```
```
$ example --help

  Usage
    example [input]

  Example
    example
    unicorns & rainbows

    example ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### example(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [sanemat](http://example.com)

[travis-url]: https://travis-ci.org/sanemat/example
[travis-image]: https://img.shields.io/travis/sanemat/example/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/example/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/example/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/example
[npm-image]: https://img.shields.io/npm/v/example.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/example
[daviddm-image]: https://img.shields.io/david/sanemat/example.svg?style=flat-square
