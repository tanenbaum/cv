const fs = require('fs')
const merge = require('deepmerge')
const yaml = require('yaml')
require('./handlebars_helpers')
const Handlebars = require('handlebars')
const marked = require('marked')
const { highlight } = require('highlight.js')

marked.setOptions({
  highlight: function (code, lang) {
    const hl = highlight(code, {
      language: lang
    }).value
    return indentsHighlight(hl)
  }
})

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

// indentHightlight prefixes each line with indentation spans
const indentsHighlight = function (markup) {
  const lines = markup.split('\n')
  let out = ''
  for (let l of lines) {
    const n = l.length
    l = l.trimStart()
    const indent = n - l.length
    out += `<span class="indent-${indent}">${' '.repeat(indent)}${l}</span>\n`
  }
  return out
}
