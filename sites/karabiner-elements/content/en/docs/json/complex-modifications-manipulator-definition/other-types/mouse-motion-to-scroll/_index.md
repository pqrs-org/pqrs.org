---
title: 'mouse_motion_to_scroll'
weight: 200
---

`mouse_motion_to_scroll` changes mouse cursor movement to scroll wheel.

```json
{
    "type": "mouse_motion_to_scroll",

    "from": {
        "modifiers": {
            "mandatory": [...],
            "optional": [...]
        }
    },

    "conditions": ...,

    "options": {
        "momentum_scroll_enabled": true,
        "speed_multiplier": 1.0
    }
}
```

{{< parameter-table name-header="Key" >}}

```json
[
    {
        "name": "`type`",
        "value": "`\"mouse_motion_to_scroll\"`",
        "required": true,
        "description": "—"
    },
    {
        "name": "`from.modifiers`",
        "value": "Same as [basic.from.modifiers](../../from/modifiers/)",
        "required": false,
        "description": "Enable `mouse_motion_to_scroll` if specified modifiers are pressed"
    },
    {
        "name": "`conditions`",
        "value": "Same as [basic.conditions](../../conditions/)",
        "required": false,
        "description": "Enable `mouse_motion_to_scroll` when specified conditions"
    },
    {
        "name": "`options`",
        "value": "An object of parameters",
        "required": false,
        "description": "—"
    }
]
```

{{< /parameter-table >}}

{{% alert title="Caution" color="danger" %}}

You should set either `from.modifiers` or `conditions`.

Your mouse cursor movement will be always changed to scroll and your mouse will be unusable without `from.modifiers` and `conditions`.

{{% /alert %}}

## Options

{{< parameter-table name-header="Key" >}}

```json
[
    {
        "name": "`momentum_scroll_enabled`",
        "value": "`true` or `false`",
        "required": false,
        "description": "Enable Momentum scroll. The default value is `true`."
    },
    {
        "name": "`speed_multiplier`",
        "value": "float value",
        "required": false,
        "description": "Multiply scroll speed. The default value is `1.0`."
    }
]
```

{{< /parameter-table >}}

## Example

The following json changes `button4 + mouse movement` to `scroll`.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change button4 + mouse movement to scroll",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "pointing_button": "button4",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "enable_mouse_motion_to_scroll",
                        "value": true,
                        "key_up_value": false
                    }
                }
            ]
        },
        {
            "type": "mouse_motion_to_scroll",
            "from": {
                "modifiers": { "optional": ["any"] }
            },
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "enable_mouse_motion_to_scroll",
                    "value": true
                }
            ]
        }
    ]
}
```
