---
title: 'from.any'
weight: 100
---

from.any is a way to match all events of the specified types. Its two main uses are:

- Combine it with [`to.from_event`](/docs/json/complex-modifications-manipulator-definition/to/from-event/) to create pass-through mode
- Combine it with filters such as [`variable_if`](/docs/json/complex-modifications-manipulator-definition/conditions/variable/) to disable key events under specific conditions.

You can use `from.any` as follows.<br />
These matches all key codes, consumer key codes or pointing buttons.

- `"any": "key_code"`
- `"any": "consumer_key_code"`
- `"any": "pointing_button"`

{{% alert title="Caution" color="danger" %}}
Be careful using `"any": "pointing_button"`.<br />
You may lose the left click button and system will be unusable.
{{% /alert %}}

## Example

With the configuration below, you can toggle Arrow Only Mode with <kbd>fn</kbd>+<kbd>l</kbd>, and when the mode is enabled, all keys except the arrow keys and modifiers are disabled.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Toggle arrow only mode by fn+l",
    "manipulators": [
        // fn+l
        {
            "type": "basic",
            "from": {
                "key_code": "l",
                "modifiers": {
                    "mandatory": ["fn"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    // If it's off now, it will turn on, so display a message.
                    "set_notification_message": {
                        "id": "arrow_only_mode",
                        "text": "Arrow Only Mode"
                    },
                    "conditions": [
                        {
                            "type": "variable_if",
                            "name": "arrow_only_mode",
                            "value": 0
                        }
                    ]
                },
                {
                    // If it's on now, it will turn off, so hide the message.
                    "set_notification_message": {
                        "id": "arrow_only_mode",
                        "text": ""
                    },
                    "conditions": [
                        {
                            "type": "variable_if",
                            "name": "arrow_only_mode",
                            "value": 1
                        }
                    ]
                },
                {
                    "set_variable": {
                        "name": "arrow_only_mode",
                        // arrow_only_mode is 0 or 1.
                        "expression": "arrow_only_mode != 0 ? 0 : 1"
                    }
                }
            ]
        },

        //
        // Pass arrow keys
        //

        {
            "type": "basic",
            "from": {
                "key_code": "up_arrow",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "up_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "down_arrow",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "down_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "left_arrow",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_arrow",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },

        //
        // Pass modifiers
        //

        // left_*
        {
            "type": "basic",
            "from": {
                "key_code": "left_command",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_command" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "left_control",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_control" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "left_option",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_option" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "left_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_shift" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        // right_*
        {
            "type": "basic",
            "from": {
                "key_code": "right_command",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_command" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_control",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_control" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_option",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_option" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_shift" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },
        // fn
        {
            "type": "basic",
            "from": {
                "key_code": "fn",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "fn" }],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        },

        //
        // Disable other keys
        //

        {
            "type": "basic",
            "from": {
                "any": "key_code",
                "modifiers": { "optional": ["any"] }
            },
            "to": [],
            "conditions": [
                { "type": "variable_if", "name": "arrow_only_mode", "value": 1 }
            ]
        }
    ]
}
```
