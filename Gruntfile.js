'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jasmine: {
            test: {
                src: 'app/scripts/*.js',
                options: {
                    specs: 'specs/*.js',
                    vendor: ['bower_components/jquery/dist/jquery.min.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', 'jasmine');
};
