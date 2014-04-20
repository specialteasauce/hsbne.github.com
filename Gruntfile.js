module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      jekyllSources: {
        files: [ '**/*.html', '**/*.js', '**/*.css', '*.*' ],
        tasks: 'shell:jekyll',
      }
    },
    shell: {
        jekyll: {
            command: 'rm -rf _site/*; /home/vagrant/.rvm/bin/rvm 2.0.0-p247 exec bundle exec jekyll build',
            stdout: true
        }
    }
  });

  grunt.registerTask('default', 'watch');

};
