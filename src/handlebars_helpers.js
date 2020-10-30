const Handlebars = require('handlebars')

// list items using Markdown syntax
Handlebars.registerHelper('list', function (list) {
  var out = ''

  for (var i in list) {
    out = out + '\n  - ' + list[i]
  }

  return out
})

// partial to allow injecting of html content, use via {{> Content}}
Handlebars.registerPartial('Content', '{{_content}}')
