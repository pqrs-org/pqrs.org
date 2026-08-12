---
title: 'to.set_variable'
weight: 300
---

`set_variable` defines and updates the variable value.

{{% alert title="Tip" color="primary" %}}

`set_variable` is designed to use with the following conditions:

- [`variable_if` and `variable_unless` conditions](../../conditions/variable/)
- [`expression_if` and `expression_unless` conditions](../../conditions/expression/).

{{% /alert %}}

## Examples

Pressing the <kbd>a</kbd> key while holding the <kbd>escape</kbd> key launches Activity Monitor.

{{< karabiner-elements-complex-modifications-json-usage >}}

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

{{< parameter-table >}}

```json
[
    {
        "name": "`name`",
        "required": true,
        "description": "Target variable name.",
        "available_since": "Karabiner-Elements 11.0.0"
    },
    {
        "name": "`value`",
        "required": "Required | Optional",
        "description": "Target variable value.",
        "available_since": "Karabiner-Elements 11.0.0"
    },
    {
        "name": "`expression`",
        "required": "Required | Optional",
        "description": "Target expression.",
        "available_since": "Karabiner-Elements 15.5.19"
    },
    {
        "name": "`key_up_value`",
        "required": false,
        "description": "A variable value when key is up",
        "available_since": "Karabiner-Elements 14.12.6"
    },
    {
        "name": "`key_up_expression`",
        "required": false,
        "description": "An expression when key is up",
        "available_since": "Karabiner-Elements 15.5.19"
    },
    {
        "name": "`type`",
        "required": false,
        "description": "\"set\" or \"unset\"",
        "available_since": "Karabiner-Elements 14.99.2"
    }
]
```

{{< /parameter-table >}}

Note: If `key_up_value` or `type` is specified, the `value` can be omitted.

## Available types of `value`

{{< parameter-table name-header="Type" >}}

```json
[
    {
        "name": "integer",
        "example_value": "0,1,2,...",
        "available_since": "Karabiner-Elements 11.0.0"
    },
    {
        "name": "boolean",
        "example_value": "true, false",
        "available_since": "Karabiner-Elements 14.4.20"
    },
    {
        "name": "string",
        "example_value": "\"layer1\", \"layer2\"",
        "available_since": "Karabiner-Elements 14.4.20"
    }
]
```

{{< /parameter-table >}}

## Expression specification

{{% alert color="info" %}}
`expression` and `key_up_expression` are available since Karabiner-Elements 15.5.19.
{{% /alert %}}

`expression` and `key_up_expression` allow you to write arithmetic expressions,
and you can use variables set by other `set_variable` manipulations and the following system-provided variables.
If an undefined variable appears in the expression, its value is treated as 0.

- system.now.milliseconds
- system.scroll_direction_is_natural
- system.use_fkeys_as_standard_function_keys

{{% alert color="primary" %}}

The arithmetic syntax used in `expression` and `key_up_expression` follows [exprtk](https://www.partow.net/programming/exprtk/index.html).

{{% /alert %}}

### Expression examples

#### Toggle a value

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Toggle my_flag by right_shift+m",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "m",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "my_flag",
                        // my_flag is 1 or 0
                        "expression": "my_flag != 0 ? 0 : 1"
                    }
                }
            ]
        }
    ]
}
```

#### Change <kbd>right_shift</kbd> x2 to <kbd>mission_control</kbd>

{{< karabiner-elements-complex-modifications-json-usage >}}

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
