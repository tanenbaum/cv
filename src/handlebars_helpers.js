const Handlebars = require('handlebars')
const yaml = require('yaml')

// list items using Markdown syntax
Handlebars.registerHelper('list', function (list) {
  if (list === undefined) {
    return null
  }
  return list.reduce((acc, v) => acc + '\n - ' + v, '')
})

yaml.scalarOptions.str.fold = {
  // nice defaults
  lineWidth: 120,
  minContentWidth: 20
}

// pretty print a YAML document
Handlebars.registerHelper('yaml', function (obj) {
  return yaml.stringify(obj)
})

// partial to allow injecting of html content, use via {{> Content}}
Handlebars.registerPartial('Content', '{{_content}}')
