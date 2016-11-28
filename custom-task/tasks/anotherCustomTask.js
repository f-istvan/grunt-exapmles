module.exports = function(grunt) {

  grunt.registerTask('myTask', function() {
    
    var config = grunt.config('myTaskConfig');
    for (var key in config) {
      console.log(config[key]);
    }

  });
}
