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
