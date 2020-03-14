---
title: 'to.halt'
weight: 800
---

`to.halt` is `true` or `false`. The default value is `false`.

The typical usage of `to.halt` is to cancel `to_after_key_up` if `to_if_alone` or `to_if_held_down` is triggered.

Put `"halt": true` into `to_if_alone` or `to_if_held_down` if you want to suppress `to_after_key_up` when `to_if_alone` or `to_if_held_down` is triggered.

## Example

The following json changes holding `tab` key to `mission_control`.

The `halt` in `to_if_held_down` suppresses `to_after_key_up` after `mission_control` is sent.

```json
{
    "type": "basic",
    "from": {
        "key_code": "tab"
    },
    "to_after_key_up": [
        {
            "key_code": "tab"
        }
    ],
    "to_if_held_down": [
        {
            "key_code": "mission_control",
            "halt": true
        }
    ]
}
```
