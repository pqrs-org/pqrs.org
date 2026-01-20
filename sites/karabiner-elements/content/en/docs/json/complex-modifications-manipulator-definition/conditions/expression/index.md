---
title: 'expression_if, expression_unless'
weight: 550
---

{{% alert color="info" %}}
This feature is available since Karabiner-Elements 15.5.19.
{{% /alert %}}

Change an event when the evaluated result of the expression is true/false.

## Example

Send Command+Q only when it has been pressed twice.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Prevent unintended Command+Q presses by ignoring it unless it's double-pressed",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "key_code": "q",
                    "modifiers": ["command"]
                }
            ],
            "conditions": [
                {
                    "type": "expression_if",
                    "expression": "command_q_expiration > system.now.milliseconds"
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "command_q_expiration",
                        "expression": "system.now.milliseconds + 300"
                    }
                }
            ]
        }
    ]
}
```

---

## Specification

{{% alert title="Tip" color="primary" %}}

`expression_if` and `expression_unless` are designed to be used with the following features:

- [`set_variable`](../../to/set-variable/)
- [`--set-variables` in command line interface](/docs/manual/misc/command-line-interface/)

{{% /alert %}}

```json
{
    "type": "expression_if",
    "expression": expression
}
```

| Name         | Required     | Description                                 |
| ------------ | ------------ | ------------------------------------------- |
| `type`       | **Required** | `"expression_if"` or `"expression_unless"`. |
| `expression` | **Required** | Target expression.                          |

## Expression specification

`expression` allows you to write arithmetic expressions,
and you can use variables set by `set_variable` manipulations and the following system-provided variables.
If an undefined variable appears in the expression, its value is treated as 0.

- system.now.milliseconds
- system.scroll_direction_is_natural
- system.use_fkeys_as_standard_function_keys

{{% alert color="primary" %}}

The arithmetic syntax used in `expression` follows [exprtk](https://www.partow.net/programming/exprtk/index.html).

{{% /alert %}}

---

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}
