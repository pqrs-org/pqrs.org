---
title: 'event_changed_if, event_changed_unless'
weight: 600
---

Change an event if/unless the event is already changed by other manipulators.

## Example

Change `tab` key to `return_or_enter` if the tab key is the physical tab key.
(If the tab key is the result of modifying another key by simple modification, the key is ignored.)

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Change tab key to return_or_enter if the tab key is the physical tab key",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "tab",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "return_or_enter" }],
            "conditions": [
                {
                    "type": "event_changed_if",
                    "value": false
                }
            ]
        }
    ]
}
```

---

## Specification

```json
{
    "type": "event_changed_if",
    "value": true
}
```

| Name          | Required     | Description                                      |
| ------------- | ------------ | ------------------------------------------------ |
| `type`        | **Required** | `"event_changed_if"` or `"event_changed_unless"` |
| `value`       | **Required** | `true` or `false`                                |
| `description` | Optional     | A human-readable comment                         |

{{% alert title="Tip" color="primary" %}}

`event_changed_unless` is designed to prevent `Function Keys Modifications` from changing fx keys which are changed in `Complex Modifications` (e.g., Change command+e to f2).

If you use `event_changed_if` or `event_changed_unless` in `Complex Modifications`, your rule is ignored for keys which are changed in `Simple Modifications`.

{{% /alert %}}
