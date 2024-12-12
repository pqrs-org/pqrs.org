---
title: 'to.set_variable'
weight: 300
---

`set_variable` defines and updates the variable value.

{{% alert title="Tip" color="primary" %}}

`set_variable` is designed to use with [`variable_if` and `variable_unless` conditions](../../conditions/variable/).

{{% /alert %}}

## Examples

Pressing the <kbd>a</kbd> key while holding the <kbd>escape</kbd> key launches Activity Monitor.

```json
{
    "description": "Pressing the a key while holding the escape key launches Activity Monitor",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "escape_pressed",
                        "value": true,
                        "key_up_value": false
                    }
                }
            ],
            "to_if_alone": [{ "key_code": "escape" }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "a",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "bundle_identifier": "com.apple.ActivityMonitor"
                        }
                    }
                }
            ],
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "escape_pressed",
                    "value": true
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
            "set_variable": {
                "name": "variable name",
                "value": variable value,
                "key_up_value": variable value,
                "type": "set"
            }
        }
    ]
}
```

| Name           | Required             | Description                     | Available since            |
| -------------- | -------------------- | ------------------------------- | -------------------------- |
| `name`         | **Required**         | Target variable name.           | Karabiner-Elements 11.0.0  |
| `value`        | Required \| Optional | Target variable value.          | Karabiner-Elements 11.0.0  |
| `key_up_value` | Optional             | A variable value when key is up | Karabiner-Elements 14.12.6 |
| `type`         | Optional             | "set" or "unset"                | Karabiner-Elements 14.99.2 |

Note: If `key_up_value` or `type` is specified, the `value` can be omitted.

## Available types of `value`

| Type    | Example value      | Available since            |
| ------- | ------------------ | -------------------------- |
| integer | 0,1,2,...          | Karabiner-Elements 11.0.0  |
| boolean | true, false        | Karabiner-Elements 14.4.20 |
| string  | "layer1", "layer2" | Karabiner-Elements 14.4.20 |

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}
