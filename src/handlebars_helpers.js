var Handlebars = require('handlebars');

JSON.stringifyAligned = require('json-align')

// pretty print a json document
Handlebars.registerHelper('json', function (obj) {
    return JSON.stringifyAligned(obj)
})

// list items using Markdown syntax
Handlebars.registerHelper('list', function(list) {
    var out = ""

    for (var i in list) {
        out = out + "\n  - " + list[i]
    }

    return out
})