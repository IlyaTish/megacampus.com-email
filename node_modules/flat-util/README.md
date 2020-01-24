# flat-util [![Build Status](https://travis-ci.com/jonkemp/flat-util.svg?branch=master)](https://travis-ci.com/jonkemp/flat-util)

> Flatten a nested array.

Creates a new array with all sub-array elements concatenated into it recursively.

## Features

- Small utility script to flatten nested arrays.
- Supports the CommonJS module format.
- Free of TypeScript. 😄


## Install

Install with [npm](https://npmjs.org/package/flat-util)

```
$ npm install flat-util
```

Or [unpkg](https://unpkg.com/flat-util/)

```
<script src="https://unpkg.com/flat-util@^1.0.0" />
```


## Usage

```js
const flat = require('flat-util');

flat([1, 2, [3, 4]]);
//=> [1, 2, 3, 4]

flat([1, 2, [3, 4, [5, 6]]]);
//=> [1, 2, 3, 4, 5, 6]
```


## API

### flat(input)

#### input

Type: `array`
Default: `none`

The array to flatten.

## License

MIT
