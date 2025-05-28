module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
      options: {
        implementation: require('sass'),
        // style: 'compressed',
        silenceDeprecations: [
          'legacy-js-api',
          'import',
          'global-builtin',
          'color-functions',
          'slash-div',
          'mixed-decls'
        ]
      },
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
