FaceBook Rome
=============

Rome is an experimental JavaScript toolchain. It includes a compiler, linter, formatter, bundler, testing framework and more.  
It aims to be a comprehensive tool for anything related to the processing of JavaScript source code.

## How to build rome

* Build from source code

```
$ git clone git@github.com:facebookexperimental/rome.git
$ cd rome/scripts
$ ./dev-rome
```

* Create a shell script named "rome" with following code:

```
node --unhandled-rejections=none --no-deprecation  /tmp/rome-dev/index.js $@
```

* Add execute mode for "rome" script

```
chmod u+x rome
```

* Visit rome Getting Started https://github.com/facebookexperimental/rome/blob/master/docs/getting-started.md


## Please add following node parameters to run ES Module

```
--experimental-modules --es-module-specifier-resolution=node --no-deprecation --no-warnings
```

# Reference

* https://github.com/facebookexperimental/rome
