---
title: 'to_if_alone'
weight: 300
---

`to_if_alone` posts events when the `from` key is pressed alone.<br />
The events are posted at the `from` key is released.

## Example

The following json changes `left_control` to sending `escape` when `left_control` is pressed alone.

```json
{
    "description": "Send the escape key when the left control key is tapped",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "left_control",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "key_code": "left_control",
                    "lazy": true
                }
            ],
            "to_if_alone": [{ "key_code": "escape" }]
        }
    ]
}
```

## About cancellation

`to_if_alone` is canceled if other events (keys, buttons or scroll wheel) is happen while the `from` key is pressed down.

Cancellation also occurs when you press the `from` key for a long time. (The default timeout is 1000 milliseconds.)

You can adjust the timeout milliseconds by `parameters > basic.to_if_alone_timeout_milliseconds`.<br />
The following example sets the timeout 200 milliseconds.

```json
{
    "description": "Send the escape key when the left control key is tapped",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "left_control",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "key_code": "left_control",
                    "lazy": true
                }
            ],
            "to_if_alone": [{ "key_code": "escape" }],
            "parameters": { "basic.to_if_alone_timeout_milliseconds": 200 }
        }
    ]
}
```

## About keyboard repeat

`to_if_alone` posts both `key_down` and `key_up` events at the same time.
Thus, you cannot use key repeat for `to_if_alone` events.
