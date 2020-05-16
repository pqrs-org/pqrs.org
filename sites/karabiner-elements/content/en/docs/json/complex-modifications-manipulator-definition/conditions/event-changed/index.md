---
title: 'event_changed_if, event_changed_unless'
weight: 600
---

Change an event if/unless the event is already changed by other manipulators.

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
