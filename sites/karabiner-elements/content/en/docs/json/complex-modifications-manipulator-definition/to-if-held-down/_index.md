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
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["caps_lock"] }
            },
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [
                { "apple_vendor_keyboard_key_code": "launchpad" }
            ],
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            }
        }
    ]
}
```

## Parameter

You can adjust the threshold of holding down periods by `parameters > basic.to_if_held_down_threshold_milliseconds` like the above example.

## More advanced example

When making a key act as a modifier only when held down, `to_if_held_down` alone cannot send the original key, so it must be combined with `to_delayed_action` as follows.

Additionally, you need to specify `halt` in `to_if_alone` to stop `to_delayed_action` when `to_if_alone` is triggered.

```json
{
    "description": "Change the f key to the left shift key if held down",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "f",
                "modifiers": { "optional": ["any"] }
            },
            "to_if_alone": [
                {
                    "key_code": "f",
                    "halt": true
                }
            ],
            "to_if_held_down": [{ "key_code": "left_shift" }],
            "to_delayed_action": {
                "to_if_canceled": [{ "key_code": "f" }]
            },
            "parameters": {
                "basic.to_delayed_action_delay_milliseconds": 500,
                "basic.to_if_held_down_threshold_milliseconds": 500
            }
        }
    ]
}
```
