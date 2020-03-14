---
title: 'to.hold_down_milliseconds'
weight: 900
---

`to.hold_down_milliseconds` is an integer value. The default value is `0`.

The value is an interval of `key_down` and `key_up` when `key_down` and `key_up` events are sent at the same time such as multiple `to` events.

{{% alert title="Note" color="primary" %}}

Generally `to.hold_down_milliseconds` is used with `"key_code": "caps_lock"`.

{{% /alert %}}

## Example

The following json changes `caps_lock` key to sending `caps_lock key_down`, `wait 200 milliseconds`, `caps_lock key_up`.

```json
{
    "type": "basic",
    "from": {
        "key_code": "caps_lock",
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "caps_lock",
            "hold_down_milliseconds": 200
        },
        {
            "key_code": "vk_none"
        }
    ]
}
```
