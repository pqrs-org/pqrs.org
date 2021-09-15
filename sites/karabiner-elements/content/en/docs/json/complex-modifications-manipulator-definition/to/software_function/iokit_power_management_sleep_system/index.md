---
title: 'iokit_power_management_sleep_system'
weight: 300
---

Causes an immediate system sleep.

```json
{
    "to": [
        {
            "software_function": {
                "iokit_power_management_sleep_system": {
                    "delay_milliseconds": 500
                }
            }
        }
    ]
}
```

| Name                 | Required | Description                                  |
| -------------------- | -------- | -------------------------------------------- |
| `delay_milliseconds` | Optional | Waiting time before the system goes to sleep |

## Examples

Use default `delay_milliseconds` (500 ms).

```json
{
    "to": [
        {
            "software_function": {
                "iokit_power_management_sleep_system": {}
            }
        }
    ]
}
```
