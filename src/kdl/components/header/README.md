# Header

## How to use

```jinja
{% from "kdl/components/header/macros.njk" import "headerMacro" %}

{{
  headerMacro({
    title: "My title",
    feature: {
      image: "/path/to/logo.svg",
      description: "Image alt"
    },
    url: "/"
  })
}}
```

## Arguments

| Name                | Type   | Description                                 |
| ------------------- | ------ | ------------------------------------------- |
| **title**           | string | The header title.                           |
| **url**             | string | URL to link the header to, defaults to `/`. |
| feature.image       | string | Path to the feature image.                  |
| feature.description | string | Feature image description.                  |
