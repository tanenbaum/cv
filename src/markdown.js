const fs = require('fs')
const merge = require('deepmerge')
const yaml = require('yaml')
require('./handlebars_helpers')
const Handlebars = require('handlebars')
const marked = require('marked')

exports.processMarkdown = function (markdownFile, yamlFiles, templateHtml) {
  const markdown = fs.readFileSync(markdownFile, 'utf8')
  const data = merge.all(yamlFiles.map(f => fs.readFileSync(f, 'utf8')).map(y => yaml.parse(y)))

  const template = Handlebars.compile(markdown)
  const markdownHtml = marked(template(data))

  if (templateHtml === undefined) {
    return markdownHtml
  }

  const htmlTemplate = fs.readFileSync(templateHtml, 'utf8')
  data._content = markdownHtml
  return Handlebars.compile(htmlTemplate, { noEscape: true })(data)
}
