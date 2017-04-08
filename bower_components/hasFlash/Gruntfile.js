module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		clean: {
			release: ['dist/*']
		},

		copy: {
			release: {
				files: [{expand: true, flatten: true, src: ['src/hasFlash.js'], dest: 'dist/'}]
			}
		},

		uglify: {
			release   : {
				src : 'dist/hasFlash.js',
				dest: 'dist/hasFlash.min.js'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('release', ['clean', 'copy:release', 'uglify']);
};