const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');
const merge = require('deepmerge');

require('./handlebars_helpers');

module.exports = function (cvYamlPath, overrideYaml) {
    var jsonCv = yaml.safeLoad(fs.readFileSync(cvYamlPath));
    var overrideCv = {};
    if (overrideYaml) {
    	var overrideCv = yaml.safeLoad(fs.readFileSync(overrideYaml));
    }

    var contextObj = merge(jsonCv, overrideCv);

    return {
        context: contextObj,
        preprocess: function (src, data) {
            var context = data || contextObj

            var template = Handlebars.compile(src)
            return template(context)
        }
    }
}

