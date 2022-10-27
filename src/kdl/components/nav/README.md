# Navigation

This component is based on https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-basic.

## How to use

```jinja
{% from "kdl/components/nav/macros.njk" import "navMacro" %}

{{
  navMacro({
    title: "My title",
    items: [
      {title: "Item 1", url: "/item/1"},
      {
        title: "Item 2",
        url: "/item/2",
        children: [
          {title: "Subitem 1", url: "/item/2/1"},
          {title: "Subitem 2", url: "/item/2/2"}
        ]
      },
      {title: "Item 3", url: "/item/3"}
    ],
    currentUrl: "/item/1",
    activeClass: "active-class-name another-class-name",
    nested: true,
    ordered: false
  })
}}
```

### Output

```html
<nav class="kdl-nav" aria-label="My title">
  <h2 class="kdl-visually-hidden">My title</h2>
  <ul>
    <li class="active">
      <a href="/item/1">Item 1</a>
    </li>
    <li>
      Item 2
      <ul>
        <li>
          <a href="/item/2/1">Subitem 1</a>
        </li>
        <li>
          <a href="/item/2/2">Subitem 2</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="/item/3">Item 3</a>
    </li>
  </ul>
</nav>
```

## Arguments

| Name           | Type    | Description                                              |
| -------------- | ------- | -------------------------------------------------------- |
| **title**      | string  | The navigation title.                                    |
| **items**      | array   | Navigation items.                                        |
| **currentUrl** | string  | URL of the current page, used for active status.         |
| class          | string  | Class name for the `nav` element.                        |
| activeClass    | string  | Class names for active item, default is `active`.        |
| nested         | boolean | If true render children, otherwise only top level items. |
| ordered        | boolean | If true use ol, otherwise ul.                            |
