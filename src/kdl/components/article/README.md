# Article

For use with blog posts, news, or any other article based content.

## How to use

```jinja
{% from "kdl/components/article/macros.njk" import articleMacro %}

{{-
  articleMacro({
    title: "My blog post",
    url: "/blog/my-blog/post",
    link: "false",
    content: content | safe,
    feature: feature,
    authors: [
      {name: "Author 1", url: "/about/team/author-1"}
    ],
    date: {
      obj: date,
      str: "30 Oct 2022"
    }
  })
-}}

```

## Arguments

| Name                | Type     | Description                           |
| ------------------- | -------- | ------------------------------------- |
| class               | string   | Class name for the `article` element. |
| title               | string   | Article tile.                         |
| url                 | string   | Article URL.                          |
| link                | string   | Add link to article.                  |
| **content**         | markdown | Content to display.                   |
| feature.image       | url      | Feature image URL.                    |
| feature.description | str      | Feature image description.            |
| **authors**         | array    | An array with person objects.         |
| **date.obj**        | date     | Date of the post.                     |
| date.str            | string   | Date formatted for display.           |
