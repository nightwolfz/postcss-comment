var Input = require('postcss/lib/input')
var Parser = require('./Parser')

module.exports = function(css, opts) {
  var input = new Input(css, opts)
  var parser = new Parser(input)
  parser.parse()

  return parser.root
}
