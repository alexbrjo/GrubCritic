/**
 * Grunt task Configuration, dist gets deployable app after every build
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'build/**/*.js'
                ],
                dest: 'dist/GrubCriticCore.js'
            }
        },
        copy:{
            build:{
                cwd:'frontend',
                src:[ 'core/*'],
                dest:'build',
                flatten: true,
                expand:true
            },
            dist:{
                cwd:'frontend',
                src:[ 'web/*'],
                dest:'dist',
                flatten: true,
                expand: true
            }
        },
        
        uglify: {
            build: {
                files: {
                    'dist/GrubCriticCore.min.js': [ 'dist/GrubCriticCore.js' ]
                }
            }
        },
        clean:{
            build:{
                src: ['build', 'dist']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask(
        'default', 
        'Builds and copies into distibute.', 
        ['clean', 'copy:build', 'concat', 'uglify', 'copy:dist']
    );
};
