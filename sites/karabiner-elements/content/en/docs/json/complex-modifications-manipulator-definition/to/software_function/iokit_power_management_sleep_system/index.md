---
title: 'iokit_power_management_sleep_system'
weight: 300
---

Causes an immediate system sleep.

{{% alert title="Available since" color="danger" %}}
`iokit_power_management_sleep_system` is available since Karabiner-Elements 13.7.1.
{{% /alert %}}

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
