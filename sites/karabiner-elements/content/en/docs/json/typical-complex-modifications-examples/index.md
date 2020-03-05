---
title: 'Typical complex_modifications examples'
weight: 200
---

## Swap `;` and `:`

(Equal to swap `;` and `shift-;`)

```json
[
    {
        "type": "basic",
        "from": {
            "key_code": "semicolon",
            "modifiers": {
                "mandatory": ["shift"],
                "optional": ["caps_lock"]
            }
        },
        "to": [
            {
                "key_code": "semicolon"
            }
        ]
    },
    {
        "type": "basic",
        "from": {
            "key_code": "semicolon",
            "modifiers": {
                "optional": ["caps_lock"]
            }
        },
        "to": [
            {
                "key_code": "semicolon",
                "modifiers": ["left_shift"]
            }
        ]
    }
]
```

## Change `control-h` to `delete`

And change `control-option-h` to `option-delete`.

```json
{
    "type": "basic",
    "from": {
        "key_code": "h",
        "modifiers": {
            "mandatory": ["control"],
            "optional": ["caps_lock", "option"]
        }
    },
    "to": [
        {
            "key_code": "delete_or_backspace"
        }
    ]
}
```

## Disable `command-l` on Finder

```json
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
```

## Post `escape` if `left_control` is pressed alone

```json
{
    "type": "basic",
    "from": {
        "key_code": "left_control",
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "left_control",
            "lazy": true
        }
    ],
    "to_if_alone": [
        {
            "key_code": "escape"
        }
    ]
}
```

## Open `Alfred 4` if `escape` is held down

```json
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
    "to_if_alone": [
        {
            "key_code": "escape"
        }
    ],
    "to_if_held_down": [
        {
            "shell_command": "open -a 'Alfred 4.app'"
        }
    ]
}
```

## Change `right_shift x2` to `mission_control`

```json
[
    {
        "type": "basic",
        "from": {
            "key_code": "right_shift",
            "modifiers": {
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
                "name": "right_shift pressed",
                "value": 1
            }
        ]
    },
    {
        "type": "basic",
        "from": {
            "key_code": "right_shift",
            "modifiers": {
                "optional": ["any"]
            }
        },
        "to": [
            {
                "set_variable": {
                    "name": "right_shift pressed",
                    "value": 1
                }
            },
            {
                "key_code": "right_shift"
            }
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
```

## Change `equal+delete` to `forward_delete` if these keys are pressed simultaneously

```json
{
    "type": "basic",
    "from": {
        "simultaneous": [
            {
                "key_code": "equal_sign"
            },
            {
                "key_code": "delete_or_backspace"
            }
        ],
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "delete_forward"
        }
    ]
}
```
