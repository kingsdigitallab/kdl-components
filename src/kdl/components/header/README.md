# Header

## How to use

```jinja
{% from "kdl/components/header/macros.njk" import "headerMacro" %}

{{
  headerMacro({
    title: "My title",
    logo: {
      src: "/path/to/logo.svg",
      alt: "Image alt"
    },
    url: "/"
  })
}}
```

## Arguments

| Name      | Type   | Description                                 |
| --------- | ------ | ------------------------------------------- |
| **title** | string | The header title.                           |
| logo.src  | string | Path to the logo image.                     |
| logo.alt  | string | Logo image alt text.                        |
| url       | string | URL to link the header to, defaults to `/`. |
