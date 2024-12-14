---
title: 'to.halt'
weight: 800
---

`to.halt` is specified in `to_if_alone` or `to_if_held_down` and is used to cancel subsequent actions like `to_after_key_up` or `to_delayed_action`.

## Example

The following json changes holding `tab` key to `mute`.

The `halt` in `to_if_held_down` suppresses `to_after_key_up` when `mute` is sent.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Mute when tab is held down",
    "manipulators": [
        {
            "type": "basic",
            "from": { "key_code": "tab" },
            "to_after_key_up": [{ "key_code": "tab" }],
            "to_if_held_down": [
                {
                    "consumer_key_code": "mute",
                    "halt": true
                }
            ]
        }
    ]
}
```
