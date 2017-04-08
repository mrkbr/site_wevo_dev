module.exports = function(grunt) {

	var cfg = grunt.file.readJSON('additionalGruntConfig.json');

	// Project configuration.
	grunt.initConfig({

		// metadata.
		pkg : grunt.file.readJSON('package.json'),

		// global config
		cfg: cfg,
		banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
		"<%= grunt.template.today('yyyy-mm-dd') %>\n" +
		"<%= pkg.homepage ? '* ' + pkg.homepage + '\\n' : \"\" %>" +
		"* Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>;" +
		"Licensed <%= _.pluck(pkg.licenses, 'type').join(', ') %> */\n",

		// clean
		clean: {
			js : ["<%= cfg.jsDirPublic %>/main.js"],
			css: ["<%= cfg.cssDir %>/main.css"]
		},

		// concat
		concat : {
			options: {
				banner: "<%= banner %>",
				stripBanners: true
			},
			dist: {
				src : ["bower_components/requirejs/require.js", "<%= cfg.jsDirPublic %>/main.js" ],
				dest: "<%= cfg.jsDirPublic %>/main.js"
			}
		},

		// uglify
		uglify: {
			options: {
				banner: "<%= banner %>"
			},
			dist   : {
				src : "<%= cfg.jsDirPublic %>/main.js",
				dest: "<%= cfg.jsDirPublic %>/main.ugly.js"
			}
		},

		// watch tasks
		watch: {
			less: {
				files     : ["<%= cfg.lessDir %>/*.less"]
				, tasks   : ["clean:css", "less:development"]
				, options : {
					spawn : false
				}
			}
			, js: {
				files     : ["<%= cfg.jsDir %>/main.js"]
				, tasks   : ['clean:js', 'requirejs', 'concat']
				, options : {
					spawn : false
				}
			}
		},

		// build css
		less : {
			// default task for development server
			// output: main.css
			development: {
				options: {
					compress    : false,
					yuicompress : false,
					cleancss    : false,
					optimization: null
				},
				files: cfg.less.development.files
			}
		},

		// postcss
		postcss: {
			options: {
				map: false, // inline sourcemaps
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: cfg.postcss.autoprefixer.browsers}), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: cfg.cssDir + "/*.css"
			}
		},

		// add bower components to requirejs config file
		bowerRequirejs: {
			target: {
				options: {
					transitive: true
				},
				rjsConfig: "<%= cfg.jsDir %>/config.js"
			}
		},

		// do r.js build
		requirejs: {
			compile: {
				options: {
					name                  : "config",
					mainConfigFile        : "<%= cfg.jsDir %>/config.js",
					out                   : "<%= cfg.jsDirPublic %>/main.js",
					optimize              : "none",
					findNestedDependencies: true
				}
			}
		},

		// webfont
		webfont: {
			icons: {
				src    : '<%= cfg.webfont.src %>'
				, dest : '<%= cfg.webfont.dest %>'
				, destCss : '<%= cfg.lessDir %>/'
				, options: {
					stylesheet: 'less'
					, font: 'b_icon'
					, relativeFontPath : '<%= cfg.webfont.relativeFontPath %>'
					, templateOptions: {
						baseClass: 'b_icon'
						, classPrefix: 'b_icon-'
						, mixinPrefix: 'b_icon-'
					}
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-npm-install');
	grunt.loadNpmTasks('grunt-bower-just-install');
	grunt.loadNpmTasks('grunt-postcss');

	/**
	 * ----------------
	 * CUSTOM TASKS
	 * ----------------
	 */

	// update npm and bower components
	grunt.registerTask('updateComponents', ['npm-install', 'bower_install']);

	// js build
	grunt.registerTask('jsBuild', ['clean:js', 'bowerRequirejs', 'requirejs', 'concat']);

	// build and compile all for development
	grunt.registerTask('development', ['updateComponents', 'clean', 'bowerRequirejs', 'requirejs', 'concat', 'less:development']);
	grunt.registerTask('production', ['updateComponents', 'clean', 'bowerRequirejs', 'requirejs', 'concat', 'uglify', 'less:development', 'postcss']);

	// build icon font
	grunt.registerTask('iconFont', ['webfont']);

	grunt.registerTask('default', ['production']);
};
