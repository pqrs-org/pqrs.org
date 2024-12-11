---
title: 'Typical complex_modifications examples'
weight: 200
---

## Swap `;` and `:`

(Equal to swap `;` and `shift-;`)

```json
{
    "description": "Swap ; and :",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "semicolon",
                "modifiers": {
                    "mandatory": ["shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "semicolon" }]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "semicolon",
                "modifiers": {
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "semicolon", "modifiers": ["left_shift"] }]
        }
    ]
}
```

## Change `control-h` to `delete`

And change `control-option-h` to `option-delete`.

```json
{
    "description": "Change control-h to delete",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": ["control"],
                    "optional": ["caps_lock", "option"]
                }
            },
            "to": [{ "key_code": "delete_or_backspace" }]
        }
    ]
}
```

## Disable `command-l` on Finder

```json
{
    "description": "Disable command-l on Finder",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "l",
                "modifiers": {
                    "mandatory": ["command"],
                    "optional": ["caps_lock"]
                }
            },
            "conditions": [
                {
                    "type": "frontmost_application_if",
                    "bundle_identifiers": ["^com\\.apple\\.finder$"]
                }
            ]
        }
    ]
}
```

## Post `escape` if `left_control` is pressed alone

```json
{
    "description": "Post escape if left_control is tapped",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "left_control",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "key_code": "left_control",
                    "lazy": true
                }
            ],
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [{ "key_code": "left_control" }],
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 100,
                "basic.to_if_held_down_threshold_milliseconds": 100
            }
        }
    ]
}
```

{{% alert color="info" %}}
This uses `"lazy": true` to prevent <kbd>left_control</kbd> from being sent immediately after the key is pressed. Instead, it explicitly sends left_control using `to_if_held_down` when the key is held down for a short period.
{{% /alert %}}

## Open `Safari` if `escape` is held down

```json
{
    "description": "Open Safari if escape is held down",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": {
                    "optional": ["caps_lock"]
                }
            },
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            },
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [
                { "shell_command": "open -b 'com.apple.Safari'" }
            ]
        }
    ]
}
```

## Change `right_shift x2` to `mission_control`

```json
{
    "description": "Change right_shift x2 to mission_control",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                { "apple_vendor_keyboard_key_code": "mission_control" },
                { "key_code": "vk_none" }
            ],
            "conditions": [
                {
                    "type": "variable_if",
                    "name": "right_shift pressed",
                    "value": 1
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "right_shift pressed",
                        "value": 1
                    }
                },
                { "key_code": "right_shift" }
            ],
            "to_delayed_action": {
                "to_if_invoked": [
                    {
                        "set_variable": {
                            "name": "right_shift pressed",
                            "value": 0
                        }
                    }
                ],
                "to_if_canceled": [
                    {
                        "set_variable": {
                            "name": "right_shift pressed",
                            "value": 0
                        }
                    }
                ]
            }
        }
    ]
}
```

## Change double press of `q` to `escape`

This example is available since Karabiner-Elements 15.3.7.

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

## Change `equal+delete` to `forward_delete` if these keys are pressed simultaneously

```json
{
    "description": "Change equal+delete to forward_delete if these keys are pressed simultaneously",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "simultaneous": [
                    { "key_code": "equal_sign" },
                    { "key_code": "delete_or_backspace" }
                ],
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "delete_forward" }]
        }
    ]
}
```
