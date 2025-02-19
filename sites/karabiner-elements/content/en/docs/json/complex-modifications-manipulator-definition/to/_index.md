---
title: 'to event definition'
weight: 200
---

```json
{
    "key_code": "The name of key_code",
    "consumer_key_code": "The name of consumer_key_code",
    "pointing_button": "The name of pointing_button",

    "shell_command": "shell command",

    "select_input_source": {
        "language": "language regex",
        "input_source_id": "input source id regex",
        "input_mode_id": "input mode id regex"
    },

    "set_variable": {
        "name": "variable name",
        "value": "variable value"
    },

    "mouse_key": mouse_key definition,

    "sticky_modifier": sticky modifier definition,

    "software_function": software function definition,

    "modifiers": [
        modifier,
        modifier,
        ...
    ],

    "lazy": false,
    "repeat": true,
    "halt": false,
    "hold_down_milliseconds": 0,
    "conditions": [...]
}
```

{{% alert title="Note" color="primary" %}}

The following keys are exclusive.<br/>
You cannot specify multiple items into one `to` entry.

-   `key_code`
-   `consumer_key_code`
-   `pointing_button`
-   `shell_command`
-   `select_input_source`
-   `set_variable`
-   `mouse_key`
-   `sticky_modifier`
-   `software_function` (`software_function` is available since Karabiner-Elements v13.5.1)

{{% /alert %}}

| Name                                                | Required | Description                                                                         |
| --------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| `key_code`                                          | Optional | Key code which you want to post                                                     |
| `consumer_key_code`                                 | Optional | Consumer key code (media key code) which you want to post                           |
| `pointing_button`                                   | Optional | Pointing button name which you want to post                                         |
| [`shell_command`](shell-command/)                   | Optional | Shell command which you want to execute                                             |
| [`select_input_source`](select-input-source/)       | Optional | Input source which you want to switch                                               |
| [`set_variable`](set-variable/)                     | Optional | A varaible name and value which you want to change                                  |
| [`mouse_key`](mouse-key/)                           | Optional | A mouse key definition                                                              |
| [`sticky_modifier`](sticky-modifier/)               | Optional | A sticky modifier key definition                                                    |
| [`software_function`](software_function/)           | Optional | A software function definition                                                      |
| [`modifiers`](modifiers/)                           | Optional | Modifiers which are post with the event                                             |
| [`lazy`](lazy/)                                     | Optional | Lazy modifier flag                                                                  |
| [`repeat`](repeat/)                                 | Optional | Key repeat flag                                                                     |
| [`halt`](halt/)                                     | Optional | A flag for `to_after_key_up`                                                        |
| [`hold_down_milliseconds`](hold-down-milliseconds/) | Optional | Interval of `key_down` and `key_up` when these events are sent at the same time     |
| [`conditions`](to-conditions/)                      | Optional | The event is transmitted only when the conditions are satisfied (e.g., variable_if) |

## Investigate key names

-   You can find `key_code`, `consumer_key_code` and `pointing_button` names by [EventViewer](../../../manual/operation/eventviewer/).
-   You can also confirm [names in list](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/apps/SettingsWindow/Resources/simple_modifications.json).
    (See `"data"` in the list.)

{{% alert title="Tip: using numbers instead of names" color="primary" %}}

You can also specify `key_code`, `consumer_key_code`, `pointing_button` with raw number as follows.<br />

```json
{
    "to": [
        {
            "key_code": 41
        }
    ]
}
```

{{% /alert %}}

{{% alert title="Tip: Sending both key_down and key_up events when a key is pressed" color="primary" %}}

Normally, a corresponding key_down event is sent when a key is pressed, and a key_up event is sent when it is released.

However, for certain keys, you might want both key_down and key_up to be sent when the key is pressed.
For example, the `mission_control` key closes Mission Control on key_up, so if you press and hold the key and then release it, the Mission Control window you just opened will end up closing.

In such cases, you can send both key_down and key_up when the key is pressed by adding `vk_none`.
In this scenario, no event will be triggered when the key is released.

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Open Mission Control by right_command + e",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "e",
                "modifiers": {
                    "mandatory": ["right_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                { "apple_vendor_keyboard_key_code": "mission_control" },
                { "key_code": "vk_none" }
            ]
        }
    ]
}
```

{{% /alert %}}

## Table of Contents
