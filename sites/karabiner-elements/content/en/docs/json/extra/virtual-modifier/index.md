---
title: 'Virtual modifier'
weight: 200
---

Karabiner-Elements does not provide virtual modifiers, however you can make your own flag similar to virtual modifier using variables.

## Example

The following json change `keypad_1` to virtual modifier.

-   Change `keypad_1` to virtual modifier (`my_modifier_1`).
-   Change `keypad_1 + a` to `mission_control`.
-   Change `keypad_1 + s` to `launchpad`.

```json
[
    {
        "type": "basic",
        "from": {
            "key_code": "keypad_1",
            "modifiers": {
                "mandatory": [],
                "optional": ["any"]
            }
        },
        "to": [
            {
                "set_variable": {
                    "name": "my_modifier_1",
                    "value": 1
                }
            }
        ],
        "to_after_key_up": [
            {
                "set_variable": {
                    "name": "my_modifier_1",
                    "value": 0
                }
            }
        ]
    },

    {
        "type": "basic",
        "from": {
            "key_code": "a",
            "modifiers": {
                "mandatory": [],
                "optional": ["any"]
            }
        },
        "to": [
            {
                "key_code": "mission_control"
            }
        ],
        "conditions": [
            {
                "type": "variable_if",
                "name": "my_modifier_1",
                "value": 1
            }
        ]
    },

    {
        "type": "basic",
        "from": {
            "key_code": "s",
            "modifiers": {
                "mandatory": [],
                "optional": ["any"]
            }
        },
        "to": [
            {
                "key_code": "launchpad"
            }
        ],
        "conditions": [
            {
                "type": "variable_if",
                "name": "my_modifier_1",
                "value": 1
            }
        ]
    }
]
```
