module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['jshint']);

    grunt.initConfig({
        jshint: {
            test: {
                src: ['*.js'],
            },
        },
    });

};
