---
title: 'to_if_other_key_pressed'
weight: 410
---

{{% alert color="danger" %}}

This feature is available since Karabiner-Elements 15.9.17 (beta).

{{% /alert %}}

`to_if_other_key_pressed` changes a key while it is being held down if another specified key is pressed during that time.
Its main use is to change modifiers under specific conditions, as in the example below.

## Example

Change option+tab to command+tab.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change option+tab to command+tab",
    "manipulators": [
        // Change left_option to left_command if tab key is pressed together.
        {
            "type": "basic",
            "from": {
                "key_code": "left_option",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_option" }],
            "to_if_other_key_pressed": [
                {
                    "other_keys": [
                        {
                            "key_code": "tab",
                            "modifiers": { "optional": ["any"] }
                        }
                    ],
                    "to": [
                        {
                            "key_code": "left_command"
                        }
                    ]
                }
            ]
        },

        // Change right_option to right_command if tab key is pressed together.
        {
            "type": "basic",
            "from": {
                "key_code": "right_option",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "right_option" }],
            "to_if_other_key_pressed": [
                {
                    "other_keys": [
                        {
                            "key_code": "tab",
                            "modifiers": { "optional": ["any"] }
                        }
                    ],
                    "to": [
                        {
                            "key_code": "right_command"
                        }
                    ]
                }
            ]
        }
    ]
}
```

{{% alert title="Note: A bad pattern for remapping option+tab" color="danger" %}}

With the following configuration, you can also change `left_option`+`tab` to `left_command`+`tab`.

However, this only changes the `left_option` key to `left_command` when sending `tab`,
and the `left_option` key itself remains `left_option`.
As a result, if you press `left_shift` after pressing `tab`, `left_option`+`left_shift` will be sent, and `left_command` will be released.

For normal use this is usually not a problem, but for `left_command`+`tab` specifically,
the application switcher closes the moment `left_command` is released,
so you need to use `to_if_other_key_pressed` to change the `left_option` key itself into `left_command`.

```json
{
    "description": "A bad pattern for remapping option+tab",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "tab",
                "modifiers": {
                    "mandatory": ["left_option"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "key_code": "tab",
                    "modifiers": ["left_command"]
                }
            ]
        }
    ]
}
```

{{% /alert %}}
