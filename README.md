# repo-utils [![NPM version](https://badge.fury.io/js/repo-utils.svg)](http://badge.fury.io/js/repo-utils)

> Utils for normalizing and formatting repo data.

## Install with [npm](npmjs.org)

```bash
npm i repo-utils --save
```

## Usage

```js
var repo = require('repo-utils');
```

## API

### [.git](lib/git.js#L25)

Create a github `.git` url.

* `path` **{String}**: user/repo or org/repo    
* `returns` **{String}**: Formatted github git url  

```js
repo.git('abc/xyz');
//=> 'https://github.com/abc/xyz.git'

var url = require('url');
var parts = url.parse('abc/xyz');
repo.git(parts);
//=> 'https://github.com/abc/xyz.git'
```

### [.github](lib/github.js#L30)

Create a GitHub url.

* `url` **{String}**: user/repo or org/repo    
* `returns` **{String}**: Formatted github url  

```js
repo.github('abc/xyz');
//=> 'https://github.com/abc/xyz'

repo.github('abc', 'xyz');
//=> 'https://github.com/abc/xyz'

repo.github('abc');
//=> 'https://github.com/abc'

repo.github('abc', {hostname: 'foo.org'});
//=> 'https://foo.org/abc'
```


### [.url](lib/url.js#L26)

Base method used by other utils for creating a URL from a string or object.

* `pathname` **{String|Object}**: Pathname or options object. Pathname should be user/repo or org/repo    
* `options` **{Object}**    
* `returns` **{String}**: Formatted github url  

```js
repo.url('abc/xyz');
//=> 'https://github.com/abc/xyz'

repo.url({pathname: 'abc/xyz'});
//=> 'https://github.com/abc/xyz'
```



## Run tests

Install dev dependencies:

```bash
node i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/repo-utils/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 10, 2015._
