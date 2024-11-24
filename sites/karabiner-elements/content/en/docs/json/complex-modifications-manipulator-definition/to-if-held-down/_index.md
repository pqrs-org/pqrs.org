---
title: 'to_if_held_down'
weight: 400
---

`to_if_held_down` posts events when the `from` key is held down.

{{% alert title="Note" color="primary" %}}

If `to` events are specified, `key_up` event of `to` is sent before `to_if_held_down` events are posted.

{{% /alert %}}

## Example

The following json changes the `escape` key to open Launchpad when the `escape` key is held down.

```json
{
    "description": "Open Launchpad when escape is held down",
    "manipulators": [
        {
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["caps_lock"] }
            },
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            },
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [
                { "apple_vendor_keyboard_key_code": "launchpad" }
            ],
            "type": "basic"
        }
    ]
}
```

## Parameter

You can adjust the threshold of holding down periods by `parameters > basic.to_if_held_down_threshold_milliseconds` like the above example.
