<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Zip

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate array tuples from input arrays.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-zip
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zip = require( '@stdlib/utils-zip' );
```

#### zip( arr1, arr2,...\[, opts] )

Returns an `array` of `arrays`, where the ith element (tuple) in the returned `array` contains the ith elements of the input `arrays`.

```javascript
var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

By default, the returned `array` length is the length of the shortest input `array`.

```javascript
var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ] );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

The function accepts an `options` object with optional properties:

-   **trunc**: `boolean` specifying whether the returned `array` should truncate `arrays` longer than the shortest `array`. Default: `true`.
-   **fill**: fill value used for unequal length `arrays`. Default: `null`.
-   **arrays**: `boolean` specifying whether, when provided a single input `array`, the function should interpret the argument as a list of `arrays` to be zipped (i.e., behavior similar to `zip.apply(null, arr)`). Default: `false`.

To turn off truncation,

```javascript
var opts = {
    'trunc': false
};

var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
// returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
```

A fill value is included in each tuple for each `array` which does not have an element at the ith index. By default, the fill value is `null`. To specify a different fill value, set the `fill` option.

```javascript
var opts = {
    'trunc': false,
    'fill': ''
};

var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
// returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, '' ] ]
```

If the function should interpret a single input `array` as an `array` of `arrays` to be zipped,

<!-- eslint-disable object-curly-newline -->

```javascript
var arr = [ [ 1, 2 ], [ 'a', 'b' ] ];

// Default behavior:
var zipped = zip( arr );
// returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ] ]

// Array of arrays:
zipped = zip( arr, { 'arrays': true } );
// returns [ [ 1, 'a' ], [ 2, 'b' ] ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var zip = require( '@stdlib/utils-zip' );

var x = [];
var y1 = [];
var y2 = [];
var y3 = [];

// Simulate some data...
var i;
for ( i = 0; i < 100; i++ ) {
    x.push( Date.now() );
    y1.push( randu() * 100 );
    y2.push( randu() * 100 );
    y3.push( randu() );
}

var zipped = zip( x, y1, y2, y3 );

console.log( zipped.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-unzip`][@stdlib/utils/unzip]</span><span class="delimiter">: </span><span class="description">unzip a zipped array (i.e., a nested array of tuples).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-zip.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-zip

[test-image]: https://github.com/stdlib-js/utils-zip/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/utils-zip/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-zip/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-zip?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-zip.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-zip/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-zip/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-zip/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-zip/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-zip/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-zip/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-zip/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-zip/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-zip/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/unzip]: https://github.com/stdlib-js/utils-unzip

<!-- </related-links> -->

</section>

<!-- /.links -->
