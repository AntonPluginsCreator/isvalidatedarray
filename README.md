# isValidatedArray
[![npm-version](https://img.shields.io/npm/v/isvalidatedarray)](https://www.npmjs.com/package/isvalidatedarray)
[![repo-size](https://img.shields.io/github/repo-size/AntonPluginsCreator/isvalidatedarray)](https://github.com/AntonPluginsCreator/isvalidatedarray)
[![downloads](https://img.shields.io/npm/dw/isvalidatedarray)](https://www.npmjs.com/package/isvalidatedarray)
[![license](https://img.shields.io/npm/l/isvalidatedarray)](https://github.com/AntonPluginsCreator/isvalidatedarray/blob/main/LICENSE)

A simple array validation function that returns a boolean value.

## Table of contents
- [Example](#example)
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Results](#results)
- [License](#license)

<div id='example'></div>

## Example

```javascript
console.log(isValidatedArray([1,[2,3],'text']));
```

#### Console:

```bash
true
```

<div id='installation'></div>

## Installation

```bash
npm i isvalidatedarray
```

## Start Plugin

```javascript
import isValidatedArray from 'isvalidatedarray';

isValidatedArray(['element1']);
```
### Config

```javascript
isValidatedArray(['element1'],{ allowEmptyArray: false, allowEmptyObject: false });
```

<div id='results'></div>

## The results of the package

```javascript
isValidatedArray('string');
false
```
```javascript
isValidatedArray(['element1']);
true
```
```javascript
isValidatedArray([falsey values]);
false
```
```javascript
isValidatedArray([{},[]],{ allowEmptyArray: true, allowEmptyObject: true });
true
```

<div id='license'></div>

## License
[Licensed under MIT](https://github.com/AntonPluginsCreator/isvalidatedarray/blob/main/LICENSE)
