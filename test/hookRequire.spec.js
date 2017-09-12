const postcss = require('../hookRequire')
const path = require('path')
const fs = require('fs')
const fixtures = path.resolve.bind(path, __dirname, 'fixtures')

function readFile(file) {
  return fs.readFileSync(file, 'utf8')
}

test('hookRequire', () => {
  var file = fixtures('inline.css')
  var input = readFile(file)
  var output = readFile(fixtures('inline.expected.css'))

  return postcss()
    .process(input, { from: file })
    .then(function (result) {
      console.log(result.css)
      expect(result.css).toEqual(output)
    })
})
