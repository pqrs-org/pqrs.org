---
title: 'set_mouse_cursor_position'
weight: 400
---

Move the mouse cursor to the specified point.

## Examples

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

Set the mouse cursor position to the center of the focused window by right_shift+w.
If the focused window bounds are unavailable, move the cursor to the center of the screen that currently contains the mouse cursor.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Set the mouse cursor position to center of the focused window by right_shift+w",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "w",
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
                            "relative_to": "focused_window",
                            "fallback_to": "screen"
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
                    "screen": 0,
                    "relative_to": "focused_window",
                    "fallback_to": "screen"
                }
            }
        }
    ]
}
```

{{< parameter-table >}}

```json
[
    {
        "name": "`x`",
        "required": true,
        "description": "The horizontal position relative to the selected origin"
    },
    {
        "name": "`y`",
        "required": true,
        "description": "The vertical position relative to the selected origin"
    },
    {
        "name": "`screen`",
        "required": false,
        "description": "The screen index used when `relative_to` is `screen`, or when falling back to a screen. If omitted, the screen that currently contains the mouse cursor is used"
    },
    {
        "name": "`relative_to`",
        "required": false,
        "description": "The position origin: `screen` (default) or `focused_window`",
        "available_since": "v16.0.0"
    },
    {
        "name": "`fallback_to`",
        "required": false,
        "description": "The behavior when focused window bounds are unavailable: `none` (default) or `screen`",
        "available_since": "v16.0.0"
    }
]
```

{{< /parameter-table >}}

### Position origin

`relative_to` determines the origin of `x` and `y`.

| Value            | Origin                                                                                |
| ---------------- | ------------------------------------------------------------------------------------- |
| `screen`         | The upper-left corner of the selected screen. This is the default.                    |
| `focused_window` | The upper-left corner of the focused window. Percentages use the focused window size. |

When `relative_to` is `focused_window`, the `screen` setting is ignored if focused window bounds are available.
The focused window bounds are obtained through the macOS Accessibility API.

If the focused window bounds are unavailable, `fallback_to` determines the behavior:

| Value    | Behavior                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------- |
| `none`   | Do not move the mouse cursor. This is the default.                                           |
| `screen` | Use the screen specified by `screen`, or the screen containing the cursor if `screen` is omitted. |

### Position format

There are two styles to specify the position.

| Type    | Format  | Example          |
| ------- | ------- | ---------------- |
| Point   | integer | `{ "x": 100 }`   |
| Percent | "xx%"   | `{ "x": "50%" }` |
