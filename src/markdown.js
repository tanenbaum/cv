const fs = require('fs')
const merge = require('deepmerge')
const yaml = require('yaml')
require('./handlebars_helpers')
const Handlebars = require('handlebars')
const marked = require('marked')

exports.processMarkdown = function (markdownFile, yamlFiles) {
  const markdown = fs.readFileSync(markdownFile, 'utf8')
  const data = merge.all(yamlFiles.map(f => fs.readFileSync(f, 'utf8')).map(y => yaml.parse(y)))

  const template = Handlebars.compile(markdown)
  console.log(marked(template(data)))
}
