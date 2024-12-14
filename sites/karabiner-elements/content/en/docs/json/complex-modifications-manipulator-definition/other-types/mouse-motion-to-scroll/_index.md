---
title: 'mouse_motion_to_scroll'
weight: 100
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

| Key              | Value                                                 | Required     | Description                                                        |
| ---------------- | ----------------------------------------------------- | ------------ | ------------------------------------------------------------------ |
| `type`           | `"mouse_motion_to_scroll"`                            | **Required** | ---                                                                |
| `from.modifiers` | Same as [basic.from.modifiers](../../from/modifiers/) | Optional     | Enable `mouse_motion_to_scroll` if specified modifiers are pressed |
| `conditions`     | Same as [basic.conditions](../../conditions/)         | Optional     | Enable `mouse_motion_to_scroll` when specified conditions          |
| `options`        | An object of parameters                               | Optional     | ---                                                                |

{{% alert title="Caution" color="danger" %}}

You should set either `from.modifiers` or `conditions`.

Your mouse cursor movement will be always changed to scroll and your mouse will be unusable without `from.modifiers` and `conditions`.

{{% /alert %}}

## Options

| Key                       | Value             | Required | Description                                          |
| ------------------------- | ----------------- | -------- | ---------------------------------------------------- |
| `momentum_scroll_enabled` | `true` or `false` | Optional | Enable Momentum scroll. The default value is `true`. |
| `speed_multiplier`        | float value       | Optional | Multiply scroll speed. The default value is `1.0`.   |

## Example

The following json changes `button4 + mouse movement` to `scroll`.

{{< karabiner-elements-complex-modifications-usage >}}

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
