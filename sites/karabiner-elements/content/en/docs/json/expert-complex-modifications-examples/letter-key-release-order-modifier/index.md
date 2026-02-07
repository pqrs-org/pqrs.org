---
title: 'Letter key release order modifier'
weight: 200
---

Holding down <kbd>v</kbd> and pressing <kbd>j</kbd> or <kbd>k</kbd> enters arrow mode.

- <kbd>v (hold)</kbd> + <kbd>j</kbd>: <kbd>down arrow</kbd>
- <kbd>v (hold)</kbd> + <kbd>k</kbd>: <kbd>up arrow</kbd>

{{% alert title="Note" color="primary" %}}

- You need to keep holding down the <kbd>v</kbd> and <kbd>j</kbd> or <kbd>k</kbd> keys, or release the <kbd>j</kbd> or <kbd>k</kbd> key to enter arrow mode.
- If you release the <kbd>v</kbd> key first, `vj` or `vk` will be typed as normal characters.

{{% /alert %}}

## JavaScript code

{{< karabiner-elements-complex-modifications-js-usage >}}

```js
// JavaScript must be written in ECMAScript 5.1.

function main() {
    const manipulators = []
    const definitions = [
        { from: 'j', to: 'down_arrow' },
        { from: 'k', to: 'up_arrow' },
    ]

    definitions.forEach(function (def) {
        manipulators.push({
            type: 'basic',
            from: {
                key_code: def.from,
                modifiers: { optional: ['any'] },
            },
            to: [{ key_code: def.to }],
            conditions: [{ type: 'variable_if', name: 'v_flag', value: true }],
        })

        manipulators.push({
            type: 'basic',
            from: {
                simultaneous: [{ key_code: 'v' }, { key_code: def.from }],
                simultaneous_options: {
                    key_down_order: 'strict',
                    key_up_order: 'strict_inverse',
                    to_after_key_up: [
                        { set_variable: { name: 'v_flag', value: false } },
                    ],
                },
                modifiers: { optional: ['any'] },
            },
            to: [
                { set_variable: { name: 'v_flag', value: true } },
                { key_code: def.to },
            ],
            parameters: {
                'basic.simultaneous_threshold_milliseconds': 500,
            },
        })
    })

    return {
        description: 'Holding down v and pressing j,k enters arrow mode',
        manipulators: manipulators,
    }
}

main()
```

## JSON code

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Holding down v and pressing j,k enters arrow mode",
    "manipulators": [
        //
        // v+j
        //

        {
            "type": "basic",
            "from": {
                "key_code": "j",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "down_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "v_flag", "value": true }
            ]
        },
        {
            "type": "basic",
            "from": {
                "simultaneous": [{ "key_code": "v" }, { "key_code": "j" }],
                "simultaneous_options": {
                    "key_down_order": "strict",
                    "key_up_order": "strict_inverse",
                    "to_after_key_up": [
                        { "set_variable": { "name": "v_flag", "value": false } }
                    ]
                },
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                { "set_variable": { "name": "v_flag", "value": true } },
                { "key_code": "down_arrow" }
            ],
            "parameters": {
                "basic.simultaneous_threshold_milliseconds": 500
            }
        },

        //
        // v+k
        //

        {
            "type": "basic",
            "from": {
                "key_code": "k",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "up_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "v_flag", "value": true }
            ]
        },
        {
            "type": "basic",
            "from": {
                "simultaneous": [{ "key_code": "v" }, { "key_code": "k" }],
                "simultaneous_options": {
                    "key_down_order": "strict",
                    "key_up_order": "strict_inverse",
                    "to_after_key_up": [
                        { "set_variable": { "name": "v_flag", "value": false } }
                    ]
                },
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                { "set_variable": { "name": "v_flag", "value": true } },
                { "key_code": "up_arrow" }
            ],
            "parameters": {
                "basic.simultaneous_threshold_milliseconds": 500
            }
        }
    ]
}
```
