# postcss-comment-2
[![version](https://img.shields.io/npm/v/postcss-comment.svg)](https://www.npmjs.org/package/postcss-comment-2)
[![dependencies](https://david-dm.org/nightwolfz/postcss-comment.svg)](https://david-dm.org/nightwolfz/postcss-comment)
[![devDependencies](https://david-dm.org/nightwolfz/postcss-comment/dev-status.svg)](https://david-dm.org/nightwolfz/postcss-comment#info=devDependencies)

Allow postcss to support inline comments. Updated to work with PostCSS 6.

## Usage

```bash
npm i --save-dev postcss postcss-comment-2

```

### Webpack postcss.config.js

```javascript
module.exports = {
  parser: 'postcss-comment-2',
  plugins: {
    // ... other plugins
  },
}
````

### As parser


```javascript
var postcss = require('postcss')
var parser = require('postcss-comment-2')

var fs = require('fs')

var file = __dirname + '/inline.css'

postcss()
  .process(
    fs.readFileSync(file, 'utf8'),
    { from: file, parser: parser }
  )
  .then(function (result) {
    console.log(result.css)
  })

```

### Hook require
```javascript
require('postcss-comment-2/hookRequire')
var postcss = require('postcss')

var fs = require('fs')

var file = __dirname + '/inline.css'

postcss()
  .process(
    fs.readFileSync(file, 'utf8'),
    { from: file }
  )
  .then(function (result) {
    console.log(result.css)
  })

```

Or:
```javascript
var postcss = require('postcss-comment-2/hookRequire')

var fs = require('fs')

var file = __dirname + '/inline.css'

postcss()
  .process(
    fs.readFileSync(file, 'utf8'),
    { from: file }
  )
  .then(function (result) {
    console.log(result.css)
  })

```


## Example

inline.css:
```css
/*
 * comments//
 * //comments
 */
// comments
//* comments*/
.inline-comment { /// comments
  // com//ments
  color: red; // comments
} // /*comments
//*/ comments

```

outputs:
```css
/*
 * comments//
 * //comments
 */
/* comments */
/** comments*\/ */
.inline-comment { /*\/ comments */
  /* com//ments */
  color: red; /* comments */
} /* /*comments */
/**\/ comments */

```
