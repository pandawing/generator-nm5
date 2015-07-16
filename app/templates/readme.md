# <%= moduleName %>

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url]

> My spectacular module


## Install

```
$ npm install --save <%= moduleName %>
```


## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> unicorns & rainbows
```
<% if (cli) { %>

## CLI

```
$ npm install --global <%= moduleName %>
```
```
$ <%= moduleName %> --help

  Usage
    <%= moduleName %> [input]

  Example
    <%= moduleName %>
    unicorns & rainbows

    <%= moduleName %> ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```
<% } %>

## API

### <%= camelModuleName %>(input, [options])

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

MIT © [<%= name %>](<%= website %>)

[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[travis-image]: https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>/master.svg
[appveyor-url]: https://ci.appveyor.com/project/<%= githubUsername %>/<%= moduleName %>/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/<%= githubUsername %>/<%= moduleName %>/master.svg
[npm-url]: https://npmjs.org/package/<%= moduleName %>
[npm-image]: https://img.shields.io/npm/v/<%= moduleName %>.svg
