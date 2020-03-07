---
title: 'event_changed_if, event_changed_unless'
weight: 500
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
| `type`        | **required** | `"event_changed_if"` or `"event_changed_unless"` |
| `value`       | **required** | `true` or `false`                                |
| `description` | optional     | A human-readable comment                         |
