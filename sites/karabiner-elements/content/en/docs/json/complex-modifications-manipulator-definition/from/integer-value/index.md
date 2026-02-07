---
title: 'from.integer_value'
weight: 250
---

{{% alert color="info" %}}
This feature is available since Karabiner-Elements 15.5.21.
{{% /alert %}}

`from.integer_value` is rarely needed.
Only a handful of devices require you to distinguish buttons by integer_value, and that's when you use it.

One such device is the VEC USB Footpedal INFINITY USB-3.
It has three buttons, each of which sends the following events:

| Hardware Button | event                           | integer_value        |
| --------------- | ------------------------------- | -------------------- |
| Left Button     | `"pointing_button": "button75"` | `"integer_value": 1` |
| Middle Button   | `"pointing_button": "button75"` | `"integer_value": 2` |
| Right Button    | `"pointing_button": "button75"` | `"integer_value": 4` |

{{% alert title="Limitation" color="primary" %}}

If you press the Middle Button while holding the Left Button, the integer_value becomes 3.
However, patterns where integer_value changes mid-press are not supported.
The value is interpreted from the first button that was pressed, so in this case it evaluates as integer_value 1.

{{% /alert %}}

## Examples

- Change the left button to mission_control.
- Change the middle button to f12.
- Change the right button to command+shift+4.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change VEC USB Footpedal INFINITY USB-3 buttons",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "pointing_button": "button75",
                "modifiers": { "optional": ["any"] },
                "integer_value": 1
            },
            "to": [{ "apple_vendor_keyboard_key_code": "mission_control" }]
        },
        {
            "type": "basic",
            "from": {
                "pointing_button": "button75",
                "modifiers": { "optional": ["any"] },
                "integer_value": 2
            },
            "to": [
                {
                    "key_code": "f12",
                    "modifiers": ["fn"]
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "pointing_button": "button75",
                "modifiers": { "optional": ["any"] },
                "integer_value": 4
            },
            "to": [
                {
                    "key_code": "4",
                    "modifiers": ["left_command", "left_shift"]
                }
            ]
        }
    ]
}
```
