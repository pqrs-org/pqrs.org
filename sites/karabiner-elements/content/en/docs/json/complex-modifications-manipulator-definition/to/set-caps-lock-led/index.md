---
title: 'to.set_caps_lock_led'
weight: 320
---

`set_caps_lock_led` controls the Caps Lock LED independently of the Caps Lock state.

{{% alert color="info" %}}

`to.set_caps_lock_led` is available since Karabiner-Elements 16.99.8.

{{% /alert %}}


## Example

Press Caps Lock to toggle a layer that changes <kbd>w</kbd>, <kbd>a</kbd>, <kbd>s</kbd>, and <kbd>d</kbd> to arrow keys.
The Caps Lock LED is illuminated while the layer is active.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Use the Caps Lock LED as a layer indicator",
    "description_notes": [
        "Press caps_lock to toggle a layer in which w/a/s/d work as arrow keys."
    ],
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "caps_lock",
                "modifiers": { "optional": ["any"] }
            },
            "to": [
                {
                    "set_variable": {
                        "name": "layer",
                        "expression": "layer == 0 ? 1 : 0"
                    }
                },
                {
                    "set_caps_lock_led": "on",
                    "conditions": [
                        {
                            "type": "variable_unless",
                            "name": "layer",
                            "value": 1
                        }
                    ]
                },
                {
                    "set_caps_lock_led": "auto",
                    "conditions": [
                        {
                            "type": "variable_if",
                            "name": "layer",
                            "value": 1
                        }
                    ]
                }
            ]
        },

        //
        // WASD -> arrows
        //

        {
            "type": "basic",
            "from": { "key_code": "w" },
            "to": [{ "key_code": "up_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "layer", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "a" },
            "to": [{ "key_code": "left_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "layer", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "s" },
            "to": [{ "key_code": "down_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "layer", "value": 1 }
            ]
        },
        {
            "type": "basic",
            "from": { "key_code": "d" },
            "to": [{ "key_code": "right_arrow" }],
            "conditions": [
                { "type": "variable_if", "name": "layer", "value": 1 }
            ]
        }
    ]
}
```

## Specification

```json
{
    "to": [
        {
            "set_caps_lock_led": "on | off | auto"
        }
    ]
}
```

{{< parameter-table name-header="Value" >}}

```json
[
    {
        "name": "`on`",
        "description": "Forces the Caps Lock LED on.",
        "available_since": "Karabiner-Elements 16.99.8"
    },
    {
        "name": "`off`",
        "description": "Forces the Caps Lock LED off.",
        "available_since": "Karabiner-Elements 16.99.8"
    },
    {
        "name": "`auto`",
        "description": "Removes the override so that the LED follows the Caps Lock state again.",
        "available_since": "Karabiner-Elements 16.99.8"
    }
]
```

{{< /parameter-table >}}

{{% alert title="Important" color="danger" %}}
The `on` and `off` overrides remain active until another `set_caps_lock_led` changes them.

Use `auto` to restore the normal Caps Lock LED behavior.
{{% /alert %}}
