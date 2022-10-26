Header
======

How to use
----------

.. code-block:: jinja

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

Arguments
---------

.. literal-include:: template.njk
   :language: markdown
   :start-after: {#
   :end-before: #}
