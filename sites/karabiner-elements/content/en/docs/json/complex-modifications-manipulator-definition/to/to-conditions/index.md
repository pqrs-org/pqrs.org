---
title: 'to.conditions'
weight: 1000
---

When `conditions` are specified in `to`, the event is sent only if the conditions are satisfied.

{{% alert title="Note" color="primary" %}}

This configuration is intended for highly specific use cases.

If your goal is to define a setting such as "Enable only in Finder", you should use [conditions at a higher level in the hierarchy](../) rather than to.conditions.

{{% /alert %}}

{{% alert color="info" %}}

`to.conditions` is available since Karabiner-Elements 15.3.7.

{{% /alert %}}

## Example

In this example, conditions are used inside `to_if_invoked` and `to_if_canceled` to prevent the <kbd>q</kbd> key from being sent via `to_delayed_action` when the <kbd>escape</kbd> key is pressed.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Change double press of q to escape",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                { "set_variable": { "name": "q pressed", "value": false } },
                { "key_code": "escape" }
            ],
            "conditions": [
                { "type": "variable_if", "name": "q pressed", "value": true }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "set_variable": { "name": "q pressed", "value": true } }],
            "to_delayed_action": {
                "to_if_invoked": [
                    {
                        "key_code": "q",
                        "conditions": [
                            {
                                "type": "variable_if",
                                "name": "q pressed",
                                "value": true
                            }
                        ]
                    },
                    { "set_variable": { "name": "q pressed", "value": false } }
                ],
                "to_if_canceled": [
                    {
                        "key_code": "q",
                        "conditions": [
                            {
                                "type": "variable_if",
                                "name": "q pressed",
                                "value": true
                            }
                        ]
                    },
                    { "set_variable": { "name": "q pressed", "value": false } }
                ]
            }
        }
    ]
}
```

{{% alert title="Advanced topic" color="primary" %}}

Conditions are evaluated when the first event in the sequence of events within `to` is processed.
This means that even if a variable's value changes (e.g., using `set_variable` within `to`), the updated value won't be immediately evaluated.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "to.conditions example",
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
                        "name": "example_flag",
                        "value": true
                    }
                },
                {
                    "key_code": "spacebar",
                    "conditions": [
                        // Because this condition are evaluated before the first event is processed,
                        // the value of example_flag is not true at that stage, so the evaluation will return false.
                        {
                            "type": "variable_if",
                            "name": "example_flag",
                            "value": true
                        }
                    ]
                },
                {
                    "set_variable": {
                        "name": "example_flag",
                        "value": false
                    }
                }
            ]
        }
    ]
}
```

{{% /alert %}}
