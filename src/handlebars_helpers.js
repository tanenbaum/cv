const Handlebars = require('handlebars')

// list items using Markdown syntax
Handlebars.registerHelper('list', function (list) {
  var out = ''

  for (var i in list) {
    out = out + '\n  - ' + list[i]
  }

  return out
})
