# kdl-components

## Set up

Install this package:

`npm install --save-dev git+https://github.com/kingsdigitallab/kdl-components.git`

Install nunjucks if not available in the project:

`npm install --save-dev nunjucks`

Configure `nunjucks`:

```javascript
const nunjucks = require("nunjucks");

const kdlComponentsPath = "../node_modules/kdl-components/src";

const nunjucksEnvironment = new nunjucks.Environment([
  # kdl components path
  new Nunjucks.FileSystemLoader(kdlComponentsPath),
  # project specific includes
  new Nunjucks.FileSystemLoader("./src/_includes"),
]);
```

### 11ty

Edit `.eleventy.js`:

```javascript
module.exports = (eleventyConfig) => {
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  # rebuild the project if the components change
  eleventyConfig.addWatchTarget(kdlComponentsPath);

  # to add kdl-components default assets add a passthrough copy
  eleventyConfig.addPassthroughCopy({
    [`${kdlComponentsPath}/kdl/assets`]: "/assets",
    # project specific passthrough
    public: "/",
  });

  # rest of 11ty configuration
}
```

## Templates

This package has a [base template](src/kdl/base.njk) that can be extended in project
templates:

`{% extends "kdl/base.njk" %}`

## Components

For details about the components see the individual components documentation:

- [header](src/kdl/components/header)
- [navigation](src/kdl/components/nav)
