---
title: 'set_mouse_cursor_position'
weight: 400
---

Move the mouse cursor to the specified point.

## Example

Set the mouse cursor position to center of the first screen by right_shift+c.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Set the mouse cursor position to center of the first screen by right_shift+c",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "c",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "set_mouse_cursor_position": {
                            "x": "50%",
                            "y": "50%",
                            "screen": 0
                        }
                    }
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
            "software_function": {
                "set_mouse_cursor_position": {
                    "x": 0,
                    "y": 0,
                    "screen": 0
                }
            }
        }
    ]
}
```

| Name     | Required     | Description                                     |
| -------- | ------------ | ----------------------------------------------- |
| `x`      | **Required** | The new mouse cursor position                   |
| `y`      | **Required** | The new mouse cursor position                   |
| `screen` | Optional     | The screen index of the new mouse cursor origin |

### Position format

There are two styles to specify the position.

| Type    | Format  | Example          |
| ------- | ------- | ---------------- |
| Point   | integer | `{ "x": 100 }`   |
| Percent | "xx%"   | `{ "x": "50%" }` |
