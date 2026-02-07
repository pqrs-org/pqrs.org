---
title: 'to_after_key_up'
weight: 500
---

`to_after_key_up` posts events when the `from` key is released.

{{% alert title="Tip" color="primary" %}}

`to_after_key_up` is typically used to:

- Unset variables using [`set_variable`](../to/set-variable/)
- Used with `to_if_held_down` and `to.halt` in order to define fallback behavior.

{{% /alert %}}

## Example

The following json changes holding `tab` key to `mute`.

{{< karabiner-elements-complex-modifications-json-usage >}}

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
