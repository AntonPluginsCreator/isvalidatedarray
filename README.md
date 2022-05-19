# isValidatedArray
Simple package for check is validate array.

## Table of contents
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Results](#results)
- [License](#license)

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
