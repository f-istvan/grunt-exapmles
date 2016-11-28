module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      buildAppFiles: {
        src: 'src/app.js',
        dest: 'target/app.min.js'
      },
      buildAllFiles: {
        files: {
          'target/app.min.js': ['src/app.js', 'src/other.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('buildApp', ['uglify:buildAppFiles']);
  grunt.registerTask('buildAll', ['uglify:buildAllFiles']);

};