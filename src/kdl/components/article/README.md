# Article

For use with blog posts, news, or any other article based content.

## How to use in 11ty

```jinja
{% from "kdl/components/article/macros.njk" import articleMacro %}

{{-
  articleMacro(obj, {
    addLink: true,
    }
  })
-}}

```

## Arguments

| Name    | Type   | Description                    |
| ------- | ------ | ------------------------------ |
| obj     | object | An article object.             |
| options | object | Options to render the article. |

### Options

| Name         | Type   | Description                                       |
| ------------ | ------ | ------------------------------------------------- |
| class        | string | Class name for the `article` element.             |
| addLink      | bool   | Add link to article.                              |
| contentField | string | Field to get content from, defaults to `content`. |
