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

    "from_event": true,
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

- `key_code`
- `consumer_key_code`
- `pointing_button`
- `shell_command`
- `select_input_source`
- `set_variable`
- `mouse_key`
- `sticky_modifier`
- `software_function` (`software_function` is available since Karabiner-Elements v13.5.1)

{{% /alert %}}

{{< parameter-table >}}

```json
[
    {
        "name": "`key_code`",
        "required": false,
        "description": "Key code which you want to post"
    },
    {
        "name": "`consumer_key_code`",
        "required": false,
        "description": "Consumer key code (media key code) which you want to post"
    },
    {
        "name": "`pointing_button`",
        "required": false,
        "description": "Pointing button name which you want to post"
    },
    {
        "name": "[`shell_command`](shell-command/)",
        "required": false,
        "description": "Shell command which you want to execute"
    },
    {
        "name": "[`select_input_source`](select-input-source/)",
        "required": false,
        "description": "Input source which you want to switch"
    },
    {
        "name": "[`set_variable`](set-variable/)",
        "required": false,
        "description": "A varaible name and value which you want to change"
    },
    {
        "name": "[`mouse_key`](mouse-key/)",
        "required": false,
        "description": "A mouse key definition"
    },
    {
        "name": "[`sticky_modifier`](sticky-modifier/)",
        "required": false,
        "description": "A sticky modifier key definition"
    },
    {
        "name": "[`software_function`](software_function/)",
        "required": false,
        "description": "A software function definition"
    },
    {
        "name": "[`modifiers`](modifiers/)",
        "required": false,
        "description": "Modifiers which are post with the event"
    },
    {
        "name": "[`from_event`](from-event/)",
        "required": false,
        "description": "Send the key or button specified in `from`"
    },
    {
        "name": "[`lazy`](lazy/)",
        "required": false,
        "description": "Lazy modifier flag"
    },
    {
        "name": "[`repeat`](repeat/)",
        "required": false,
        "description": "Key repeat flag"
    },
    {
        "name": "[`halt`](halt/)",
        "required": false,
        "description": "A flag for `to_after_key_up`"
    },
    {
        "name": "[`hold_down_milliseconds`](hold-down-milliseconds/)",
        "required": false,
        "description": "Interval of `key_down` and `key_up` when these events are sent at the same time"
    },
    {
        "name": "[`conditions`](to-conditions/)",
        "required": false,
        "description": "The event is transmitted only when the conditions are satisfied (e.g., variable_if)"
    }
]
```

{{< /parameter-table >}}

## Investigate key names

- You can find `key_code`, `consumer_key_code` and `pointing_button` names by [EventViewer](../../../manual/operation/eventviewer/).
- You can also confirm [names in list](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/apps/SettingsWindow/Resources/simple_modifications.json).
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

{{< karabiner-elements-complex-modifications-json-usage >}}

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
