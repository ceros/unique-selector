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

This package is a fork of [unique-selector](https://www.npmjs.com/package/unique-selector). Updates include:
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


- v0.4.1

    - Fork unique-selector package
    - Escape selectors

License
-------

MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/AvraamMavridis/unique-selector/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
