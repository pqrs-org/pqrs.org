---
title: 'from.simultaneous_options'
weight: 400
---

`simultaneous_options` adjust the `simultaneous` behavior.

| Key                               | Value                                       | Description                                                             |
| --------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| `detect_key_down_uninterruptedly` | `true` or `false`                           | Specify whether key_down detection is interrupted with unrelated events |
| `key_down_order`                  | `insensitive`, `strict` or `strict_inverse` | Restriction of key_down order                                           |
| `key_up_order`                    | `insensitive`, `strict` or `strict_inverse` | Restriction of key_up order                                             |
| `key_up_when`                     | `any` or `all`                              | When key_up events are posted                                           |
| `to_after_key_up`                 | An array of `to` event definitions          | Events will be posted when all `from` events are released               |

## `detect_key_down_uninterruptedly`

If `detect_key_down_uninterruptedly` is true, Karabiner-Elements changes simultaneous events even if unrelated key down event exists between target events.

For example, when `escape+3 -> mission_control`, `escape,1,3` will be `mission_control,1` if `detect_key_down_uninterruptedly` is true.

The default value is `false`.

## `key_down_order`

`simultaneous` checks the order of key_down events if `key_down_order` is specified and is not `insensitive`.

For example, this definition manipulates `tab,q` to `mission_control` and does not manipulate `q,tab` events.

```json
{
    "description": "Pressing the tab,q keys simultaneously launches Mission Control (key_down_order)",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "simultaneous": [
                    {
                        "key_code": "tab"
                    },
                    {
                        "key_code": "q"
                    }
                ],
                "simultaneous_options": {
                    "key_down_order": "strict"
                },
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "apple_vendor_keyboard_key_code": "mission_control" }]
        }
    ]
}
```

## `key_up_order`

`simultaneous` checks the order of key_up events if `key_up_order` is specified and is not `insensitive`.

{{% alert title="Tip" color="primary" %}}

`key_up_order` is ignored if `simultaneous_threshold_milliseconds` is reached.

You should set a large value to `simultaneous_threshold_milliseconds` when you use `key_up_order`.

{{% /alert %}}

For example, this definition manipulates `tab,q` to `mission_control` if the `tab` key is released before the `q` key within 500 milliseconds.

| Input                | Output                                               |
| -------------------- | ---------------------------------------------------- |
| `tab` & `q` key_down | ---                                                  |
| `tab` key_up         | `mission_control` key_down, `mission_control` key_up |
| `q` key_up           | ---                                                  |

{{% alert title="Note" color="primary" %}}

Events will be posted just before the last from event's key_up.

{{% /alert %}}

```json
{
    "description": "Pressing the tab,q keys simultaneously launches Mission Control (key_up_order)",
    "manipulators": [
        {
            "type": "basic",
            "parameters": {
                "basic.simultaneous_threshold_milliseconds": 500
            },
            "from": {
                "simultaneous": [
                    {
                        "key_code": "tab"
                    },
                    {
                        "key_code": "q"
                    }
                ],
                "simultaneous_options": {
                    "key_up_order": "strict"
                },
                "modifiers": {
                    "optional": ["any"]
                }
            },
            "to": [{ "apple_vendor_keyboard_key_code": "mission_control" }]
        }
    ]
}
```

## `key_up_when`

Specify when key_up events are posted.

| Value | Description                                   |
| ----- | --------------------------------------------- |
| `any` | Post key_up events when any key is released   |
| `all` | Post key_up events when all keys are released |

## `to_after_key_up`

`to_after_key_up` will be posted when all `from` events are released.

This feature is typically used to clear mode flag variables when all `from` events are released.

Example:

-   Mouse Keys Mode v4
    -   [json](https://github.com/pqrs-org/KE-complex_modifications/blob/main/public/json/mouse_keys_mode_v4.json)
    -   [json generator](https://github.com/pqrs-org/KE-complex_modifications/blob/main/src/json/mouse_keys_mode_v4.json.rb)
    -   [Import](https://ke-complex-modifications.pqrs.org/#mouse_keys_mode_v4)
