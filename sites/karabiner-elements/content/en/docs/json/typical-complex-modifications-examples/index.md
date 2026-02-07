---
title: 'Typical complex_modifications examples'
weight: 200
---

## Swap `;` and `:`

- Equal to swap `;` and `shift-;`: [from.modifiers](/docs/json/complex-modifications-manipulator-definition/from/modifiers/)

{{< karabiner-elements-complex-modifications-json-usage >}}

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

- Change `control-h` to `delete`: [from.modifiers](/docs/json/complex-modifications-manipulator-definition/from/modifiers/)
- Change `control-option-h` to `option-delete`.

{{< karabiner-elements-complex-modifications-json-usage >}}

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

## Change `caps_lock` to `escape` on the built-in keyboard

- An example of using modifiers.optional == ["any"]: [from.modifiers](/docs/json/complex-modifications-manipulator-definition/from/modifiers/)
- Device-specific rule: [device_if, device_unless, device_exists_if, device_exists_unless](/docs/json/complex-modifications-manipulator-definition/conditions/device/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change caps_lock to escape on the built-in keyboard",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "caps_lock",
                "modifiers": {
                    "optional": ["any"]
                }
            },
            "to": [{ "key_code": "escape" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": true }]
                }
            ]
        }
    ]
}
```

## Change left_command+3 -> 2, left_shift+3 -> @ on the built-in keyboard

- An example of using modifiers.optional == ["any"] with modifiers.mandatory: [from.modifiers](/docs/json/complex-modifications-manipulator-definition/from/modifiers/)
- Device-specific rule: [device_if, device_unless, device_exists_if, device_exists_unless](/docs/json/complex-modifications-manipulator-definition/conditions/device/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change left_command+3 -> 2, left_shift+3 -> @ on the built-in keyboard",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "3",
                "modifiers": {
                    "mandatory": ["left_command"],
                    "optional": ["any"]
                }
            },
            "to": [{ "key_code": "2" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": true }]
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "3",
                "modifiers": {
                    "mandatory": ["left_shift"],
                    "optional": ["any"]
                }
            },
            "to": [{ "key_code": "2", "modifiers": ["left_shift"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": true }]
                }
            ]
        }
    ]
}
```

## Disable `command-l` on Finder

- Application-specific rule: [frontmost_application_if, frontmost_application_unless](/docs/json/complex-modifications-manipulator-definition/conditions/frontmost-application/)

{{< karabiner-elements-complex-modifications-json-usage >}}

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

- Post events when a key is pressed alone: [to_if_alone](/docs/json/complex-modifications-manipulator-definition/to-if-alone/)
- Post events when a key is held down: [to_if_held_down](/docs/json/complex-modifications-manipulator-definition/to-if-held-down/)
- The lazy modifier: [to.lazy](/docs/json/complex-modifications-manipulator-definition/to/lazy/)

{{< karabiner-elements-complex-modifications-json-usage >}}

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

- Post events when a key is pressed alone: [to_if_alone](/docs/json/complex-modifications-manipulator-definition/to-if-alone/)
- Post events when a key is held down: [to_if_held_down](/docs/json/complex-modifications-manipulator-definition/to-if-held-down/)
- Open an application: [open_application](/docs/json/complex-modifications-manipulator-definition/to/software_function/open_application/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Open Safari if escape is held down",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["caps_lock"] }
            },
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            },
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [
                {
                    "software_function": {
                        "open_application": {
                            "bundle_identifier": "com.apple.Safari"
                        }
                    }
                }
            ]
        }
    ]
}
```

## Paste (command+v) if `escape` is held down

- Post events when a key is pressed alone: [to_if_alone](/docs/json/complex-modifications-manipulator-definition/to-if-alone/)
- Post events when a key is held down: [to_if_held_down](/docs/json/complex-modifications-manipulator-definition/to-if-held-down/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Paste (command+v) if escape is held down",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": { "optional": ["any"] }
            },
            "parameters": {
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            },
            "to_if_alone": [{ "key_code": "escape" }],
            "to_if_held_down": [
                {
                    "key_code": "v",
                    "modifiers": ["left_command"],
                    "repeat": false
                }
            ]
        }
    ]
}
```

## Change `right_shift x2` to `mission_control` (new style)

This example is available since Karabiner-Elements 15.5.19.

- Use variable:
    - [expression_if, expression_unless](/docs/json/complex-modifications-manipulator-definition/conditions/expression/)
    - [to.set_variable](/docs/json/complex-modifications-manipulator-definition/to/set-variable/)
- [to_delayed_action](/docs/json/complex-modifications-manipulator-definition/to-delayed-action/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change right_shift x2 to mission_control (new style)",
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
                    "type": "expression_if",
                    "expression": "right_shift_x2_expiration > system.now.milliseconds"
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
                        "name": "right_shift_x2_expiration",
                        "expression": "system.now.milliseconds + 300"
                    }
                },
                { "key_code": "right_shift" }
            ]
        }
    ]
}
```

## Change `right_shift x2` to `mission_control` (old style)

- Use variable:
    - [variable_if, variable_unless](/docs/json/complex-modifications-manipulator-definition/conditions/variable/)
    - [to.set_variable](/docs/json/complex-modifications-manipulator-definition/to/set-variable/)
- [to_delayed_action](/docs/json/complex-modifications-manipulator-definition/to-delayed-action/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change right_shift x2 to mission_control (old style)",
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

- Use variable:
    - [variable_if, variable_unless](/docs/json/complex-modifications-manipulator-definition/conditions/variable/)
    - [to.set_variable](/docs/json/complex-modifications-manipulator-definition/to/set-variable/)
- [to_delayed_action](/docs/json/complex-modifications-manipulator-definition/to-delayed-action/)

{{< karabiner-elements-complex-modifications-json-usage >}}

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

- [from.simultaneous](/docs/json/complex-modifications-manipulator-definition/from/simultaneous/)

{{< karabiner-elements-complex-modifications-json-usage >}}

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

## Input Unicode characters via the clipboard

- [to.hold_down_milliseconds](/docs/json/complex-modifications-manipulator-definition/to/hold-down-milliseconds/)

With this setting, pressing <kbd>fn</kbd>+<kbd>x</kbd> copies ✅🆗 to the clipboard and then pastes it.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Input ✅🆗 by fn+x",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "x",
                "modifiers": {
                    "mandatory": ["fn"]
                }
            },
            "to": [
                {
                    "shell_command": "/bin/echo -n '✅🆗' | LANG=en_US.UTF-8 /usr/bin/pbcopy",
                    "hold_down_milliseconds": 200
                },
                {
                    "key_code": "v",
                    "modifiers": ["left_command"]
                }
            ]
        }
    ]
}
```

{{% alert color="info" %}}
The key point is to specify `LANG` when running pbcopy. If you don't, the string won't be copied correctly.
{{% /alert %}}

## Input Unicode characters using Unicode Hex Input

- [to.select_input_source](/docs/json/complex-modifications-manipulator-definition/to/select-input-source/)

In this setting, <kbd>fn</kbd>+<kbd>d</kbd> changes the Input Source to Unicode Hex Input and inputs ✅ (U+2705).
Therefore, you need to enable Unicode Hex Input in [Input Source settings](https://support.apple.com/guide/mac-help/mchlp1406/26/mac/26).

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Input ✅ by fn+d",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "d",
                "modifiers": {
                    "mandatory": ["fn"]
                }
            },
            "to": [
                {
                    "select_input_source": {
                        "input_source_id": "com.apple.keylayout.UnicodeHexInput"
                    },
                    "hold_down_milliseconds": 200
                },
                {
                    "key_code": "2",
                    "modifiers": ["left_option"]
                },
                {
                    "key_code": "7",
                    "modifiers": ["left_option"]
                },
                {
                    "key_code": "0",
                    "modifiers": ["left_option"]
                },
                {
                    "key_code": "5",
                    "modifiers": ["left_option"]
                },
                {
                    "select_input_source": { "language": "en" }
                }
            ]
        }
    ]
}
```
