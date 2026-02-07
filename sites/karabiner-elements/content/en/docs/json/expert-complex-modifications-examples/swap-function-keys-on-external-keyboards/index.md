---
title: 'Swap fn and non-fn behavior for function keys on external keyboards'
weight: 300
---

- Use f3 as Mission Control on the built-in keyboard, and fn+f3 as Mission Control on external keyboards.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Swap fn and non-fn behavior for function keys on external keyboards",
    "manipulators": [
        //
        // f1
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f1",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f1" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f1", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f1", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f2
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f2",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f2" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f2", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f2", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f3
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f3",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f3" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f3", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f3", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f4
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f4",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f4" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f4", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f4", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f5
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f5",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f5" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f5", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f5", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f6
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f6",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f6" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f6", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f6", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f7
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f7",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f7" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f7", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f7", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f8
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f8",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f8" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f8", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f8", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f9
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f9",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f9" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f9", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f9", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f10
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f10",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f10" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f10", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f10", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f11
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f11",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f11" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f11", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f11", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },

        //
        // f12
        //

        {
            "type": "basic",
            "from": {
                "key_code": "f12",
                "modifiers": { "mandatory": ["fn"], "optional": ["any"] }
            },
            "to": [{ "key_code": "f12" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "f12", "modifiers": { "optional": ["any"] } },
            "to": [{ "key_code": "f12", "modifiers": ["fn"] }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "is_built_in_keyboard": false }]
                }
            ]
        }
    ]
}
```
