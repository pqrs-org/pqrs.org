---
title: 'to_if_alone'
weight: 300
---

`to_if_alone` posts events when the `from` key is pressed alone.<br />
The events are posted at the `from` key is released.

## Example

The following json changes `left_control` to sending `escape` when `left_control` is pressed alone.

{{< karabiner-elements-complex-modifications-json-usage >}}

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
                    "key_code": "left_control"
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

{{< karabiner-elements-complex-modifications-json-usage >}}

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
                    "key_code": "left_control"
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

## About sending caps lock

`to_if_alone` posts both `key_down` and `key_up` events at the same time.
Since the caps_lock key needs to be held down for a certain duration, you need to specify hold_down_milliseconds.

```json
{
    "description": "Change caps_lock to left_control",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "caps_lock",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "key_code": "left_control"
                }
            ],
            "to_if_alone": [
                {
                    "key_code": "caps_lock",
                    "hold_down_milliseconds": 200
                }
            ]
        }
    ]
}
```

## With the lazy flag

When changing a key to a modifier and sending the key only when pressed alone, there may be cases where you do not want to send the modifier in that situation.
In such cases, add `lazy` to `to`. This ensures that the modifier is sent only when pressed together with another key.
Additionally, by combining this with `to_if_held_down`, you can send the modifier when the key is held down for a certain duration, ensuring that cases where the modifier needs to be sent alone are also covered.

```json
{
    "description": "Post escape if left_control is tapped",
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
            "to_if_held_down": [{ "key_code": "left_control" }],
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 100,
                "basic.to_if_held_down_threshold_milliseconds": 100
            }
        }
    ]
}
```
