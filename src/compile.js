var fs = require('fs');
var yaml = require('js-yaml');
var Handlebars = require('handlebars');

require('./handlebars_helpers')

module.exports = function (cvYamlPath) {
    var jsonCv = yaml.safeLoad(fs.readFileSync(cvYamlPath))

    return {
        context: jsonCv,
        preprocess: function (src, data) {
            var context = data || jsonCv

            var template = Handlebars.compile(src)
            return template(context)
        }
    }
}

