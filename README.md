# kdl-components

## Installation

`npm install git+https://github.com/kingsdigitallab/kdl-components.git`

## How to use

### 11ty

Edit `.eleventy.js`:

```javascript
const Nunjucks = require("nunjucks");

module.exports = (eleventyConfig) => {
  const kdlComponentsPath = "../node_modules/kdl-components/src";

  const nunjucksEnvironment = new Nunjucks.Environment([
    # kdl components path
    new Nunjucks.FileSystemLoader(kdlComponentsPath),
    # project specific path
    new Nunjucks.FileSystemLoader("./src/_includes"),
  ]);
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

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
