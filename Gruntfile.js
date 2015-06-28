var compile = require('./src/compile');

module.exports = function(grunt) {

  grunt.initConfig({
    // markdown -> html
    markdown: {
      all: {
        files: [{
          expand: true,
          flatten: true,
          src: 'src/index.md',
          dest: 'build',
          ext: '.html'
        }]
      },
      options: {
        template: 'src/template.html',
        // template variables, title etc.
        templateContext: compile.data,
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
        cssPath: 'src/pdf.css',
        remarkable: {
          html: true
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/*',
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
        src: 'src/*.css',
        dest: 'build/'
      },
      compile: {
        src: 'src/pdf.md',
        dest: 'build/cv.md',
        options: {
          process: function (src) {
            return compile.preprocess(src)
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-markdown-pdf');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('html', ['markdown', 'copy:css']);
  grunt.registerTask('pdf', ['copy:css', 'copy:compile', 'markdownpdf']);

  grunt.registerTask('default', ['html', 'pdf', 'watch']);
};