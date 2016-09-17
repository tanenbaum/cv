var cvYaml = './static/cv.yaml'

var compile = require('./src/compile')(cvYaml)

module.exports = function(grunt) {

  grunt.initConfig({
    // markdown -> html
    markdown: {
      all: {
        files: [{
          expand: true,
          flatten: true,
          src: 'static/index.md',
          dest: 'build',
          ext: '.html'
        }]
      },
      options: {
        template: 'static/template.html',
        // template variables, title etc.
        templateContext: compile.context,
        markdownOptions: {
          gfm: true,
          highlight: 'manual'
        },
        preCompile: compile.preprocess
      }
    },
    // markdown -> pdf
    markdownpdf: {
      files: {
        src: "build/cv.md",
        dest: "build"
      },
      options: {
        cssPath: 'build/pdf.css',
        remarkable: {
          html: true
        }
      }
    },
    watch: {
      scripts: {
        files: 'static/*',
        tasks: ['html', 'pdf'],
        options: {
          spawn: false,
        }
      }
    },
    copy: {
      css: {
        expand: true,
        flatten: true,
        src: 'static/*.css',
        dest: 'build/'
      },
      compile: {
        src: 'static/pdf.md',
        dest: 'build/cv.md',
        options: {
          process: function (src) {
            return compile.preprocess(src)
          }
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-markdown')
  grunt.loadNpmTasks('grunt-markdown-pdf')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('html', ['markdown', 'copy:css'])
  grunt.registerTask('pdf', ['copy:css', 'copy:compile', 'markdownpdf'])

  grunt.registerTask('default', ['html', 'pdf', 'watch'])
}