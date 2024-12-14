---
title: 'to_delayed_action'
weight: 600
---

`to_delayed_action` posts events after 500 milliseconds from the `from` key is pressed.

-   `to_delayed_action.to_if_invoked`
    -   An array of `to` events that will be sent if no other key is pressed after the `from` key is pressed.
-   `to_delayed_action.to_if_canceled`
    -   An array of `to` events that will be sent if another key is pressed after the `from` key is pressed before `to_delayed_action.to_if_invoked` is sent.

{{% alert title="Tip" color="primary" %}}

`to_delayed_action` is typically used to:

-   Double tap key (e.g., change `right_shift x2`)
-   2 stroke keys such as C-x of Emacs Mode.

{{% /alert %}}

## Example

The following json provide `Quit application by pressing command-q twice`.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Quit application by pressing command-q twice",
    "manipulators": [
        {
            "type": "basic",
            "conditions": [
                { "type": "variable_if", "name": "command-q", "value": 1 }
            ],
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "q", "modifiers": "left_command" }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "set_variable": { "name": "command-q", "value": 1 } }],
            "to_delayed_action": {
                "to_if_invoked": [
                    { "set_variable": { "name": "command-q", "value": 0 } }
                ],
                "to_if_canceled": [
                    { "set_variable": { "name": "command-q", "value": 0 } }
                ]
            }
        }
    ]
}
```

## Parameters

You can adjust the milliseconds invoking `to_delayed_action` by `parameters > basic.to_delayed_action_delay_milliseconds` as follows.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Quit application by pressing command-q twice",
    "manipulators": [
        {
            "type": "basic",
            "conditions": [
                { "type": "variable_if", "name": "command-q", "value": 1 }
            ],
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "q", "modifiers": "left_command" }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "q",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "set_variable": { "name": "command-q", "value": 1 } }],
            "to_delayed_action": {
                "to_if_invoked": [
                    { "set_variable": { "name": "command-q", "value": 0 } }
                ],
                "to_if_canceled": [
                    { "set_variable": { "name": "command-q", "value": 0 } }
                ]
            },
            "parameters": { "basic.to_delayed_action_delay_milliseconds": 1000 }
        }
    ]
}
```
