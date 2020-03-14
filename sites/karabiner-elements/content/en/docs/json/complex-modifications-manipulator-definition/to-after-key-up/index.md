---
title: 'to_after_key_up'
weight: 500
---

`to_after_key_up` posts events when the `from` key is released.

{{% alert title="Tips" color="primary" %}}

`to_after_key_up` is typically used to:

-   Unset variables using [`set_variable`](../to/set-variable/)
-   Used with `to_if_held_down` and `to.halt` in order to define fallback behavior.

{{% /alert %}}

## Example

The following json changes holding `tab` key to `mission_control`.

```json
{
    "type": "basic",
    "from": {
        "key_code": "tab"
    },
    "to_after_key_up": [
        {
            "key_code": "tab"
        }
    ],
    "to_if_held_down": [
        {
            "key_code": "mission_control",
            "halt": true
        }
    ]
}
```
