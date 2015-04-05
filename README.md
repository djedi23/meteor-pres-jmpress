# Meteorized jmpress

## Installation

```
meteor add djedi:pres-jmpress
```

This package depends on `djedi:jmpress`.

## Usage

In your application, insert these templates:
```
{{#presentation}}
{{#slide x="" y=""}}
Slide content
{{/slide}}
{{/presentation}}
```


`presentation` is the top container for a presentation.
`slide` declares the individual pages on the presentation. They must be declared inside the `presentation`.

Attributes for `slide` are mapped to the attributes of jmpress (without the `data-` prefix) :
- x (jmpress: data-x)
- y (jmpress: data-y)
- z (jmpress: data-z)
- r (jmpress: data-r)
- phi (jmpress: data-phi)
- scale (jmpress: data-scale)
- scaleX (jmpress: data-scale-x)
- scaleY (jmpress: data-scale-y)
- scaleZ (jmpress: data-scale-z)
- rotate (jmpress: data-rotate)
- rotateX (jmpress: data-rotate-x)
- rotateY (jmpress: data-rotate-y)
- rotateZ (jmpress: data-rotate-z)
- delegate (jmpress: data-delegate)
- src (jmpress: data-src)
- exclude (jmpress: data-exclude)
- next (jmpress: data-next)
- prev (jmpress: data-prev)
- template (jmpress: data-template)
- jmpress (jmpress: data-jmpress)


