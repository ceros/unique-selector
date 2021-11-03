unique-selector
===============

Given a DOM node, return a unique CSS selector matching only that element.
This is particularly useful when tracking in custom variables in analytics:


    document.addEventListener('click', function(event) {
        var selector = unique(event.target);

        _gaq.push(['_trackEvent', 'Engagement', 'Click', selector]);
    }, false);

Fork status
------------

This package is a fork of the [unique-selector](https://www.npmjs.com/package/unique-selector) npm package. The original source 
code is available on GitHub at [ericclemmons/unique-selector](https://github.com/ericclemmons/unique-selector).

Updates include:
 - escaping selectors to be valid for document.querySelector() 

Installation
------------

[![NPM](https://nodei.co/npm/@ceros/unique-selector.png?mini=true)](https://nodei.co/npm/@ceros%2funique-selector/)

Options
------------
e.g.1 DomElement = `<span id="test"></span>`

```
import unique from 'unique-selector';

// Optional Options
options = {
    // Array of selector types based on which the unique selector will generate
    selectorTypes : [ 'ID', 'Class', 'Tag', 'NthChild' ]
}

unique( DomElement, options ); // #test
```

e.g.2 DomElement = `<span test="2"></span>`

```
import unique from 'unique-selector';

// Optional Options
options = {
    // Array of selector types based on which the unique selector will be generate
    selectorTypes : [ 'Attributes' ]
}

unique( DomElement, options ); // [test="2"]
```

e.g.3 DomElement = `<div id="xyz" class="abc test"></div>`

```
import unique from 'unique-selector';

// Optional Options
options = {
    // Regular expression of ID and class names to ignore
    excludeRegex : RegExp( 'xyz|abc' )
}

unique( DomElement, options ); // .test
```


Tests
-----

    $ npm run test


Contributing
-----
Feel free to open issues, make suggestions or send PRs.


Releases
--------
- v1.0.0

    - Launch of fork as a package


- v0.4.1 (fork)

    - Fork unique-selector package
    - Escape selectors
    
- v0.1.0

    - Big refactor/rewrite using es6
    - More test + Change the test script
    - Script to compile es6 to es5 using babel
    - Ability to pass options for the **selectorTypes** based on which the unique selector will be generated, see the options


- v0.0.4

    - Handle extra whitespace in `className` ([#9](https://github.com/ericclemmons/unique-selector/pull/9))

- v0.0.3

    - Add support for various `<form>` elements ([#2](https://github.com/ericclemmons/unique-selector/issues/2))

- v0.0.2

    - Fix bug with `nth-child` calculation

- v0.0.1

    - Initial release

License
-------

MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/AvraamMavridis/unique-selector/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
