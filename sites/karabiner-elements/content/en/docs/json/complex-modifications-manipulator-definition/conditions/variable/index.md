---
title: 'variable_if, variable_unless'
weight: 500
---

Change an event if/unless the variable is the specified value.

## Example

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

---

## Specification

{{% alert title="Tip" color="primary" %}}

`variable_if` and `variable_unless` are designed to be used with the following features:

- [`set_variable`](../../to/set-variable/)
- [`--set-variables` in command line interface](/docs/manual/misc/command-line-interface/)

{{% /alert %}}

```json
{
    "type": "variable_if",
    "name": "variable name",
    "value": variable value
}
```

{{< parameter-table >}}

```json
[
    {
        "name": "`type`",
        "required": true,
        "description": "`\"variable_if\"` or `\"variable_unless\"`."
    },
    {
        "name": "`name`",
        "required": true,
        "description": "Target variable name."
    },
    {
        "name": "`value`",
        "required": true,
        "description": "Target variable value."
    },
    {
        "name": "`description`",
        "required": false,
        "description": "A human-readable comment"
    }
]
```

{{< /parameter-table >}}

### Available types of `value`

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

{{% alert title="Comparison between different types" color="warning" %}}

Whenever the type of `value` is different, it is treated as having different contents.

- `1` != `true`
- `true` != `"true"`

{{% /alert %}}

{{% alert title="Default value" color="primary" %}}

If the variable is not set to a value, the value is treated as `0`.

{{% /alert %}}

---

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}

## System variables

The system variables are automatically set by Karabiner-Elements.

{{< parameter-table >}}

```json
[
    {
        "name": "`system.scroll_direction_is_natural`",
        "type": "boolean",
        "data_source": "The scroll direction setting of mouse in System Settings",
        "available_since": "Karabiner-Elements 15.2.3"
    },
    {
        "name": "`system.use_fkeys_as_standard_function_keys`",
        "type": "boolean",
        "data_source": "The \"Use all F1, F2, etc. keys as standard function keys\" setting in System Settings",
        "available_since": "Karabiner-Elements 15.2.3"
    },
    {
        "name": "`system.now.milliseconds`",
        "type": "integer",
        "data_source": "The current UNIX time in milliseconds",
        "available_since": "Karabiner-Elements 15.5.19"
    },
    {
        "name": "`system.temporarily_ignore_all_devices`",
        "type": "boolean",
        "data_source": "True when \"Temporarily turns off all Karabiner-Elements modifications\" is enabled in EventViewer",
        "available_since": "Karabiner-Elements 15.5.91"
    }
]
```

{{< /parameter-table >}}

## Accessibility variables

Information about the Focused UI Element obtained through the Accessibility API is automatically set by Karabiner-Elements.
You can use these variables to [modify behavior only unless an input field is focused](/docs/json/typical-complex-modifications-examples/#open-files-in-finder-using-the-return-key), for example.

{{< parameter-table >}}

```json
[
    {
        "name": "`accessibility.focused_ui_element.role_string`",
        "type": "string",
        "data_source": "kAXRoleAttribute",
        "available_since": "Karabiner-Elements 15.90.22"
    },
    {
        "name": "`accessibility.focused_ui_element.subrole_string`",
        "type": "string",
        "data_source": "kAXSubroleAttribute",
        "available_since": "Karabiner-Elements 15.90.22"
    },
    {
        "name": "`accessibility.focused_ui_element.title_string`",
        "type": "string",
        "data_source": "kAXTitleAttribute",
        "available_since": "Karabiner-Elements 15.90.22"
    },
    {
        "name": "`accessibility.focused_ui_element.window_position_x`",
        "type": "integer",
        "data_source": "kAXWindowAttribute or kAXFocusedWindowAttribute",
        "available_since": "Karabiner-Elements 15.90.17"
    },
    {
        "name": "`accessibility.focused_ui_element.window_position_y`",
        "type": "integer",
        "data_source": "kAXWindowAttribute or kAXFocusedWindowAttribute",
        "available_since": "Karabiner-Elements 15.90.17"
    },
    {
        "name": "`accessibility.focused_ui_element.window_size_height`",
        "type": "integer",
        "data_source": "kAXWindowAttribute or kAXFocusedWindowAttribute",
        "available_since": "Karabiner-Elements 15.90.17"
    },
    {
        "name": "`accessibility.focused_ui_element.window_size_width`",
        "type": "integer",
        "data_source": "kAXWindowAttribute or kAXFocusedWindowAttribute",
        "available_since": "Karabiner-Elements 15.90.17"
    }
]
```

{{< /parameter-table >}}
