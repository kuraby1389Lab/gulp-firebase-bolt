# gulp-firebase-bolt 
Bolt compiler for firebase based on bolt specifications

# Dependent Project

  - [Firebase Bolt](https://www.github.com/firebase/bolt) - Bolt Parser implementation.
  - [Firebase Bolt - Monkey Patch](https://www.github.com/brewsoftware/bolt) - Monkey path to test the new compiler syntax with this plugin.
  - [Firebase Security and Modeling Language](https://www.github.com/firebase/bolt/docs/language.md) - Language documentation and syntax

# Using the gulp plugin

You can easily install the gulp bolt compiler using [npm](https://docs.npmjs.com/cli/install):
    $ npm install gulp-firebase-bolt 

The compiler uses through2 to manage it's streams. Any file piped into firebase will be compiled out to a corresponding JSON file.
    gulp.src('test.bolt')
    .pipe(firebase())
    .pipe(gulp.dest('./output/'));

For more examples please see the 'tests' directory

# Local module support

Local modules should be supported by default, see the bolt compiler spec for details.

# Global modules

At the time of writing this there are no known global modules. I will publish some shortly which can be installed using npm as well

    $ npm install firebase-bolt-module

Each modules is assumed to have an entry point under the 'node_modules/firebase-bolt-module/index.bolt' filename and will be processed from here.


# Further work

This plugin is a re-write of the original bolt compiler listed above. I am using the bolt parser project for all the rules definitions which is currently in beta. Please check back from time to time for updated and all feedback is welcome. 

If you are interested in aliases please open an issue and +1 it. Although I have included them in the spec they aren't implemented in the compiler. At this time I don't consider them a key feature.
