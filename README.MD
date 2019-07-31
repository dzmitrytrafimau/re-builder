##Welcome to re-agnostic library!

Sometimes generating regular expression is so painful and also we don't lake to learn this crazy syntax.

This solution will help you to build and match regular expressions by the easiest way:

```
const regex = rebuilder.escape.anchor('https://').any.words('.rest.domain.com')
const 'https://23eb2r2fa347bv.rest.domain.com'.math(regex) //Matched
```

or:

```
const ptr = rebuilder.pattern(rebuilder.any.words)
const regex = rebuilder.escape.anchor(`https://${ptr}./rest.domain.com`)
```

or:

```
const regex = `/^https:\/\/${reb.ANYWORDS}\.rest\.domain\.com/`
``` 

This is an empty version of library. First version will be released in december 2019th.

##Plan


###MVP

 - TDD
 - support proxy
 - support builder factory
 - support escape
 - support anchor
 - support any
 - support words
 - support characters
 - support symbols
 - support digits
 - support pattern
 - support 

###MMP

 - MVP
 - CD

###In the future:
 - ES5
 - Express
 - DOM
