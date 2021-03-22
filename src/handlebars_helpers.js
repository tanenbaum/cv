const Handlebars = require('handlebars')

// list items using Markdown syntax
Handlebars.registerHelper('list', function (list) {
  if (list === undefined) {
    return null
  }
  return list.reduce((acc, v) => acc + '\n - ' + v, '')
})

// partial to allow injecting of html content, use via {{> Content}}
Handlebars.registerPartial('Content', '{{_content}}')
