---
title: 'iokit_power_management_sleep_system'
weight: 200
---

Put the system to sleep.

{{% alert color="info" %}}
`iokit_power_management_sleep_system` is available since Karabiner-Elements 13.7.1.
{{% /alert %}}

## Examples

Put the system to sleep using fn+z.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Put the system to sleep using fn+z",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "z",
                "modifiers": {
                    "mandatory": ["fn"],
                    "optional": ["caps_lock"]
                }
            },
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
    ]
}
```

## Specification

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

| Name                 | Required | Description                                                          |
| -------------------- | -------- | -------------------------------------------------------------------- |
| `delay_milliseconds` | Optional | Waiting time before the system goes to sleep (500 ms if unspecified) |
