# example [![Build Status](https://travis-ci.org/sanemat/example.svg?branch=master)](https://travis-ci.org/sanemat/example)

> My super-excellent module


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
