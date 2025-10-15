---
title: 'to.set_variable'
weight: 300
---

`set_variable` defines and updates the variable value.

{{% alert title="Tip" color="primary" %}}

`set_variable` is designed to use with the following conditions:

-   [`variable_if` and `variable_unless` conditions](../../conditions/variable/)
-   [`expression_if` and `expression_unless` conditions](../../conditions/expression/).

{{% /alert %}}

## Examples

Pressing the <kbd>a</kbd> key while holding the <kbd>escape</kbd> key launches Activity Monitor.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Pressing the a key while holding the escape key launches Activity Monitor",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "escape_pressed",
                        "value": true,
                        "key_up_value": false
                    }
                }
            ],
            "to_if_alone": [{ "key_code": "escape" }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "a",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "bundle_identifier": "com.apple.ActivityMonitor"
                        }
                    }
                }
            ],
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "escape_pressed",
                    "value": true
                }
            ]
        }
    ]
}
```

## Specification

```json
{
    "to": [
        {
            "set_variable": {
                "name": "variable name",
                "value": variable value,
                "expression": expression,
                "key_up_value": variable value,
                "key_up_expression": expression,
                "type": "set"
            }
        }
    ]
}
```

| Name                | Required             | Description                     | Available since            |
| ------------------- | -------------------- | ------------------------------- | -------------------------- |
| `name`              | **Required**         | Target variable name.           | Karabiner-Elements 11.0.0  |
| `value`             | Required \| Optional | Target variable value.          | Karabiner-Elements 11.0.0  |
| `expression`        | Required \| Optional | Target expression.              | Karabiner-Elements 15.5.19 |
| `key_up_value`      | Optional             | A variable value when key is up | Karabiner-Elements 14.12.6 |
| `key_up_expression` | Optional             | An expression when key is up    | Karabiner-Elements 15.5.19 |
| `type`              | Optional             | "set" or "unset"                | Karabiner-Elements 14.99.2 |

Note: If `key_up_value` or `type` is specified, the `value` can be omitted.

## Available types of `value`

| Type    | Example value      | Available since            |
| ------- | ------------------ | -------------------------- |
| integer | 0,1,2,...          | Karabiner-Elements 11.0.0  |
| boolean | true, false        | Karabiner-Elements 14.4.20 |
| string  | "layer1", "layer2" | Karabiner-Elements 14.4.20 |

## Expression specification

{{% alert color="info" %}}
`expression` and `key_up_expression` are available since Karabiner-Elements 15.5.19.
{{% /alert %}}

`expression` and `key_up_expression` allow you to write arithmetic expressions,
and you can use variables set by other `set_variable` manipulations and the following system-provided variables.
If an undefined variable appears in the expression, its value is treated as 0.

-   system.now.milliseconds
-   system.scroll_direction_is_natural
-   system.use_fkeys_as_standard_function_keys

{{% alert color="primary" %}}

The arithmetic syntax used in `expression` and `key_up_expression` follows [exprtk](https://www.partow.net/programming/exprtk/index.html).

{{% /alert %}}

### Expression examples

Change <kbd>right_shift</kbd> x2 to <kbd>mission_control</kbd>.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Change right_shift x2 to mission_control",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                { "apple_vendor_keyboard_key_code": "mission_control" },
                { "key_code": "vk_none" }
            ],
            "conditions": [
                {
                    "type": "expression_if",
                    "expression": "right_shift_x2_expiration > system.now.milliseconds"
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "right_shift_x2_expiration",
                        "expression": "system.now.milliseconds + 300"
                    }
                },
                { "key_code": "right_shift" }
            ]
        }
    ]
}
```

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}
