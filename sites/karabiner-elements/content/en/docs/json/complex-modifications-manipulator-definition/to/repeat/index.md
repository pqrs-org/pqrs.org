---
title: 'to.repeat'
weight: 700
---

`to.repeat` is `true` or `false`. The default value is `true`.

The key repeating will be suppressed if `to.repeat` is `false`.

{{% alert title="Tip" color="primary" %}}

`to.repeat` affects `key_up` event sending timing as follows.

- If `to.repeat` is `true`:
    - `key_up` event is sent when you release the key.
- If `to.repeat` is `false`:
    - `key_down` and `key_up` events are sent when you press the key.

{{% /alert %}}

## Example

To prevent key repeats like "hellooooooooo" when holding down a key, add "repeat": false to the final key event in the sequence.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Enter 'hello' by right_shift+h",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                { "key_code": "h" },
                { "key_code": "e" },
                { "key_code": "l" },
                { "key_code": "l" },
                { "key_code": "o", "repeat": false }
            ]
        }
    ]
}
```
