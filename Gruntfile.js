module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      sass: {
        files: {
          'client/css/combined.scss': [
            'client/css/reset.scss',
            'client/css/main.scss',
          ]
        }
      }
    },

    sass: {
      dist: {
        options: {
          sourceMap: true,
        },
        files: {
          'client/public/styles.css':'client/css/combined.scss',
        }
      }
    },

    watch: {
      css: {
        files: 'client/css/**/*.scss',
        tasks: ['concat', 'sass']
      }
    },

    // cssmin: {
    //   combine: {
    //     files: {
    //       'public/dist/style.min.css': ['public/**/*.css']
    //     }
    //   }
    // },

    // jshint: {
    //   files: [
    //     'public/client/**/*.js'
    //   ],
    //   options: {
    //     force: 'true',
    //     jshintrc: '.jshintrc',
    //     ignores: [
    //       'public/lib/**/*.js',
    //       'public/dist/**/*.js'
    //     ]
    //   }
    // },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    // concat: {
    //   options: {
    //     separator: '\n'
    //   },
    //   js_files: {
    //     files: {
    //       'public/dist/lib.js': [
    //         'public/lib/jquery.js',
    //         'public/lib/underscore.js',
    //         'public/lib/backbone.js',
    //         'public/lib/handlebars.js'
    //       ],
    //       'public/dist/client.js': ['public/client/**/*.js']
    //     }
    //   }
    // },

    // watch: {
    //   scripts: {
    //     files: [
    //       'public/client/**/*.js',
    //       'public/lib/**/*.js',
    //     ],
    //     tasks: [
    //       'concat',
    //       'uglify'
    //     ]
    //   },
    //   css: {
    //     files: 'public/*.css',
    //     tasks: ['cssmin']
    //   }
    // },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
  grunt.registerTask('start', ['nodemon']);

};