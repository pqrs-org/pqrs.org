---
title: 'to.mouse_key'
weight: 400
---

Move mouse pointer and scroll by `mouse_key`.

## Example

|                   | shortcuts                               |
| ----------------- | --------------------------------------- |
| Move mouse cursor | <kbd>right_shift + arrow keys</kbd>     |
| Fast move         | <kbd>right_shift + f + arrow keys</kbd> |
| Click             | <kbd>right_shift + v</kbd>              |
| Scroll wheel      | <kbd>right_command + arrow keys</kbd>   |

```json
{
    "description": "Move mouse cursor by right_shift + arrows, scroll by right_command + arrows",
    "manipulators": [
        // y
        {
            "type": "basic",
            "from": {
                "key_code": "up_arrow",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "mouse_key": { "y": -1536 } }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "down_arrow",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "mouse_key": { "y": 1536 } }]
        },

        // x
        {
            "type": "basic",
            "from": {
                "key_code": "left_arrow",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "mouse_key": { "x": -1536 } }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_arrow",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "mouse_key": { "x": 1536 } }]
        },

        // speed_multiplier
        {
            "type": "basic",
            "from": {
                "key_code": "f",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "mouse_key": { "speed_multiplier": 4.0 } }]
        },

        // click
        {
            "type": "basic",
            "from": {
                "key_code": "v",
                "modifiers": { "mandatory": "right_shift", "optional": ["any"] }
            },
            "to": [{ "pointing_button": "button1" }]
        },

        // vertical_wheel
        {
            "type": "basic",
            "from": {
                "key_code": "up_arrow",
                "modifiers": {
                    "mandatory": "right_command",
                    "optional": ["any"]
                }
            },
            "to": [{ "mouse_key": { "vertical_wheel": -32 } }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "down_arrow",
                "modifiers": {
                    "mandatory": "right_command",
                    "optional": ["any"]
                }
            },
            "to": [{ "mouse_key": { "vertical_wheel": 32 } }]
        },

        // horizontal_wheel
        {
            "type": "basic",
            "from": {
                "key_code": "left_arrow",
                "modifiers": {
                    "mandatory": "right_command",
                    "optional": ["any"]
                }
            },
            "to": [{ "mouse_key": { "horizontal_wheel": 32 } }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_arrow",
                "modifiers": {
                    "mandatory": "right_command",
                    "optional": ["any"]
                }
            },
            "to": [{ "mouse_key": { "horizontal_wheel": -32 } }]
        }
    ]
}
```

## Specification

```json
{
    "to": [
        {
            "mouse_key": {
                "x": speed,
                "y": speed,
                "vertical_wheel": speed,
                "horizontal_wheel": speed,
                "speed_multiplier": 1.0
            }
        }
    ]
}
```

| Name               | Required | Description                                                        |
| ------------------ | -------- | ------------------------------------------------------------------ |
| `x`                | Optional | Move left (x < 0) or right (x > 0)                                 |
| `y`                | Optional | Move up (y < 0) or down (y > 0)                                    |
| `vertical_wheel`   | Optional | Scroll up (vertical_wheel < 0) or down (vertical_wheel > 0)        |
| `horizontal_wheel` | Optional | Scroll left (horizontal_wheel > 0) or right (horizontal_wheel < 0) |
| `speed_multiplier` | Optional | Multiply mouse keys speed while this key is hold down              |

{{% alert title="Note" color="primary" %}}
Speed and scroll direction depend on System Settings > Mouse configuration.
{{% /alert %}}

### Complete json examples

-   [Mouse keys (simple)](https://ke-complex-modifications.pqrs.org/#mouse_keys_simple)
-   [Mouse Keys Mode v4](https://ke-complex-modifications.pqrs.org/#mouse_keys_mode_v4)
