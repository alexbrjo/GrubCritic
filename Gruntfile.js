/**
 * Grunt task Configuration, dist gets deployable app after everybuild
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
                cwd:'src',
                src:[ 'core/*'],
                dest:'build',
                flatten: true,
                expand:true
            },
            dist:{
                cwd:'src',
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
                src: ['build', 'dist', 'stat']
            }
        },
        karma: {
            build: {
                configFile: 'karma.conf.js'
            }
        },
        sloc: {
            prebuild : {
                options: {
                    reportType: 'json',
                    reportPath: 'stat/sloc.json'
                },
                files: {
                    'src':  [ '**/*.js' ] // only source code
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('karma-coverage');
    grunt.loadNpmTasks('grunt-sloc');
    
    grunt.registerTask(
        'default', 
        'Runs SLOC, builds and runs Karma tests', 
        ['clean', 'sloc', 'copy:build', 'concat', 'uglify', 'copy:dist']
    );
    
    grunt.registerTask(
        'build', 
        'Runs SLOC, builds and runs Karma tests', 
        ['clean', 'copy:build', 'karma']
    );
};
