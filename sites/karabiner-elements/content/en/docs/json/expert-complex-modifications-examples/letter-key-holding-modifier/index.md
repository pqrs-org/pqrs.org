---
title: 'Letter key holding modifier'
weight: 100
---

Switch to the app launcher when the <kbd>u</kbd> key is held down.

- <kbd>u (hold for 250 ms)</kbd> + <kbd>s</kbd>: Open Safari
- <kbd>u (hold for 250 ms)</kbd> + <kbd>t</kbd>: Open Terminal

## JavaScript version

{{< karabiner-elements-complex-modifications-js-usage >}}

```js
// JavaScript must be written in ECMAScript 5.1.

function main() {
    const definitions = [
        { from: 's', to: 'com.apple.Safari' },
        { from: 't', to: 'com.apple.Terminal' },
    ]

    const manipulators = [
        {
            type: 'basic',
            from: {
                key_code: 'u',
                modifiers: { optional: ['any'] },
            },
            to_if_held_down: [
                {
                    set_variable: {
                        name: 'u_flag',
                        value: true,
                    },
                },
            ],
            to_after_key_up: [
                {
                    set_variable: {
                        name: 'u_flag',
                        value: false,
                    },
                    // Cancel the `to_delayed_action`
                    halt: true,
                },
            ],
            to_if_alone: [{ key_code: 'u' }],
            to_delayed_action: {
                to_if_canceled: [{ key_code: 'u' }],
            },
            parameters: {
                'basic.to_delayed_action_delay_milliseconds': 250,
                'basic.to_if_alone_timeout_milliseconds': 250,
                'basic.to_if_held_down_threshold_milliseconds': 250,
            },
        },
    ]

    definitions.forEach(function (def) {
        manipulators.push({
            type: 'basic',
            from: { key_code: def.from },
            conditions: [{ name: 'u_flag', type: 'variable_if', value: true }],
            to: [
                {
                    software_function: {
                        open_application: {
                            bundle_identifier: def.to,
                        },
                    },
                },
            ],
        })
    })

    return {
        description: 'Switch to the app launcher when the u key is held down',
        manipulators: manipulators,
    }
}

main()
```

## JSON version

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Switch to the app launcher when the u key is held down",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "u",
                "modifiers": { "optional": ["any"] }
            },
            "to_if_held_down": [
                {
                    "set_variable": {
                        "name": "u_flag",
                        "value": true
                    }
                }
            ],
            "to_after_key_up": [
                {
                    "set_variable": {
                        "name": "u_flag",
                        "value": false
                    },
                    // Cancel the `to_delayed_action`
                    "halt": true
                }
            ],
            "to_if_alone": [{ "key_code": "u" }],
            "to_delayed_action": {
                "to_if_canceled": [{ "key_code": "u" }]
            },
            "parameters": {
                "basic.to_delayed_action_delay_milliseconds": 250,
                "basic.to_if_alone_timeout_milliseconds": 250,
                "basic.to_if_held_down_threshold_milliseconds": 250
            }
        },

        //
        // Open Safari
        //

        {
            "type": "basic",
            "from": { "key_code": "s" },
            "conditions": [
                { "name": "u_flag", "type": "variable_if", "value": true }
            ],
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "bundle_identifier": "com.apple.Safari"
                        }
                    }
                }
            ]
        },

        //
        // Open Terminal
        //

        {
            "type": "basic",
            "from": { "key_code": "t" },
            "conditions": [
                { "name": "u_flag", "type": "variable_if", "value": true }
            ],
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "bundle_identifier": "com.apple.Terminal"
                        }
                    }
                }
            ]
        }
    ]
}
```
