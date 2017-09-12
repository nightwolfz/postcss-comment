const postcss = require('postcss')
const parse = require('../lib/parse')
const path = require('path')
const fixtures = path.resolve.bind(path, __dirname, 'fixtures')

function readFile(file) {
  return require('fs').readFileSync(file, 'utf8')
}

test.only('parser', () => {
  var file = fixtures('inline.css')
  var input = readFile(file)
  var output = readFile(fixtures('inline.expected.css'))

  return postcss()
    .process(input, { from: file, parser: parse })
    .then(function (result) {
      console.log(result.css)
      expect(result.css).toEqual(output)
    })
})
