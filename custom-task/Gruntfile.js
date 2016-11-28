module.exports = function(grunt) {

  // A very basic log task.
  grunt.registerTask('log', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  grunt.registerTask('customLogTask', function () {
    require('./customLogTask.js')(grunt);
  });

  grunt.initConfig({
    myTaskConfig: {
      foo: [1, 2, 3],
      bar: 'hello world',
      baz: false
    }
  });

  // path to the directory which contains the JS files which represent tasks
  grunt.loadTasks('./tasks');

};