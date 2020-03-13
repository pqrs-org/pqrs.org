---
title: 'to.lazy'
weight: 600
---

`to.lazy` is `true` or `false`. The default value is `false`.

If `to.lazy` is `true` and `to.key_code` is modifier flag such as `"key_code": "left_shift"`, the `to.key_code` acts as lazy modifier.

The lazy modifier does not send own key events until another key is pressed together.

{{% alert title="Tip" color="primary" %}}
The lazy modifier is designed using with `to_if_alone` or key combinations such as changing `left_control + h` to `delete_or_backspace` in order to suppress unnecessary modifier key events.
{{% /alert %}}

## Example

The following json changes:

-   `left_control` to the lazy left control
-   `left_control + m` to `return`

Behavior of the json:

-   The `left_control` key event will not be sent when you press `left_control` alone.
-   Only the `return` key event will be sent when you press `left_control + m`.
-   You can use `left_control` for other keys such as `left_control + a`, `left_control + b`, etc.

```json
[
    {
        "type": "basic",
        "from": {
            "key_code": "left_control"
        },
        "to": [
            {
                "key_code": "left_control",
                "lazy": true
            }
        ]
    },
    {
        "type": "basic",
        "from": {
            "key_code": "m",
            "modifiers": {
                "mandatory": ["left_control"],
                "optional": ["any"]
            }
        },
        "to": [
            {
                "key_code": "return"
            }
        ]
    }
]
```
