---
title: 'to.from_event'
weight: 550
---

{{% alert color="danger" %}}

This feature is available since Karabiner-Elements 15.9.13 (beta).

{{% /alert %}}

Specifying `to.from_event` lets you send the key defined in from as-is.
With this, using a rule like the one below, you can disable changes from other Complex Modifications when you enable pass-through mode with fn+p.

This uses the property that in Complex Modifications, once an event is modified, it is no longer subject to subsequent rules.
In other words, by handling events early with [`from.any`](/docs/json/complex-modifications-manipulator-definition/from/any/) and `to.from_event`, later rules are effectively disabled.

{{% alert title="Relationship with Simple Modifications" color="primary" %}}

Note that Simple Modifications are applied before Complex Modifications are evaluated, so this setting does not disable them.
If you also want to disable Simple Modifications, do the same configuration in Complex Modifications instead of using Simple Modifications, and place it after the disable complex modifications setting.
In other words, in Complex Modifications it should look like this:

- Disable Complex Modifications in Windows App
- Rules migrated from Simple Modifications

or

- Toggle Pass-Through Mode by fn+p
- Rules migrated from Simple Modifications

{{% /alert %}}

## Examples

### Disable Complex Modifications in Windows App

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Disable Complex Modifications in Windows App",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "any": "key_code",
                "modifiers": {
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "from_event": true
                }
            ],
            "conditions": [
                {
                    "type": "frontmost_application_if",
                    "bundle_identifiers": ["^com\\.microsoft\\.rdc\\.macos"]
                }
            ]
        }
    ]
}
```

### Pass-Through Mode

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Toggle Pass-Through Mode by fn+p",
    "manipulators": [
        // fn+p
        {
            "type": "basic",
            "from": {
                "key_code": "p",
                "modifiers": {
                    "mandatory": ["fn"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    // If it's off now, it will turn on, so display a message.
                    "set_notification_message": {
                        "id": "pass_through_mode",
                        "text": "Pass-Through Mode"
                    },
                    "conditions": [
                        {
                            "type": "variable_if",
                            "name": "pass_through_mode",
                            "value": 0
                        }
                    ]
                },
                {
                    // If it's on now, it will turn off, so hide the message.
                    "set_notification_message": {
                        "id": "pass_through_mode",
                        "text": ""
                    },
                    "conditions": [
                        {
                            "type": "variable_if",
                            "name": "pass_through_mode",
                            "value": 1
                        }
                    ]
                },
                {
                    "set_variable": {
                        "name": "pass_through_mode",
                        // pass_through_mode is 0 or 1.
                        "expression": "pass_through_mode != 0 ? 0 : 1"
                    }
                }
            ]
        },
        // pass through any key events
        {
            "type": "basic",
            "from": {
                "any": "key_code",
                "modifiers": {
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "from_event": true
                }
            ],
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "pass_through_mode",
                    "value": 1
                }
            ]
        }
    ]
}
```
