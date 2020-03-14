---
title: 'to_if_held_down'
weight: 400
---

`to_if_held_down` posts events when the `from` key is held down.

{{% alert title="Note" color="primary" %}}

If `to` events are specified, `key_up` event of `to` is sent before `to_if_held_down` events are posted.

{{% /alert %}}

## Example

The following json changes the `escape` key to open Alfred when the `escape` key is held down.

```json
{
    "type": "basic",
    "from": {
        "key_code": "escape",
        "modifiers": {
            "optional": ["caps_lock"]
        }
    },
    "parameters": {
        "basic.to_if_alone_timeout_milliseconds": 250,
        "basic.to_if_held_down_threshold_milliseconds": 250
    },
    "to_if_alone": [
        {
            "key_code": "escape"
        }
    ],
    "to_if_held_down": [
        {
            "shell_command": "open -a 'Alfred 4.app'"
        }
    ]
}
```

## Parameter

You can adjust the threshold of holding down periods by `parameters > basic.to_if_held_down_threshold_milliseconds` like the above example.
