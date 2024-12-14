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

{{< karabiner-elements-complex-modifications-usage >}}

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

The nature of `to_if_held_down` means that events may not fire in the order the keys are pressed when typing in combination with other keys.
(Even if the `to_if_held_down` key is pressed first, its event will fire after the others.)

In cases where this behavior becomes problematic, such as wanting to modify a letter key to another key only when held down, a more advanced configuration will be necessary.

In the example below, the <kbd>f</kbd> key becomes the <kbd>left shift</kbd> key when held down.

In this example, `to_if_held_down.to_if_canceled` is used to send the <kbd>f</kbd> key event when the next key is pressed.
Additionally, `to_if_alone` is used to send the <kbd>f</kbd> key when it is pressed alone.

The `halt` specified in `to_if_alone` prevents the <kbd>f</kbd> key from being sent by both `to_if_alone` and `to_delayed_action`.

{{< karabiner-elements-complex-modifications-usage >}}

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
