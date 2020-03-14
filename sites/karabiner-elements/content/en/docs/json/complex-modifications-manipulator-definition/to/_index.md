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

    "modifiers": [
        modifier,
        modifier,
        ...
    ],

    "lazy": false,
    "repeat": true,
    "halt": false,
    "hold_down_milliseconds": 0
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

{{% /alert %}}

| Name                                                | Required | Description                                                                     |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `key_code`                                          | Optional | Key code which you want to post                                                 |
| `consumer_key_code`                                 | Optional | Consumer key code (media key code) which you want to post                       |
| `pointing_button`                                   | Optional | Pointing button name which you want to post                                     |
| [`shell_command`](shell-command/)                   | Optional | Shell command which you want to execute                                         |
| [`select_input_source`](select-input-source/)       | Optional | Input source which you want to switch                                           |
| [`set_variable`](set-variable/)                     | Optional | A varaible name and value which you want to change                              |
| [`mouse_key`](mouse-key/)                           | Optional | A mouse key definition                                                          |
| [`modifiers`](modifiers/)                           | Optional | Modifiers which are post with the event                                         |
| [`lazy`](lazy/)                                     | Optional | Lazy modifier flag                                                              |
| [`repeat`](repeat/)                                 | Optional | Key repeat flag                                                                 |
| [`halt`](halt/)                                     | Optional | A flag for `to_after_key_up`                                                    |
| [`hold_down_milliseconds`](hold-down-milliseconds/) | Optional | Interval of `key_down` and `key_up` when these events are sent at the same time |

```text
                <a href="document.html#eventviewer">You can find key_code by EventViewer.</a>
                <a href="https://github.com/pqrs-org/Karabiner-Elements/blob/master/src/apps/PreferencesWindow/Resources/simple_modifications.json">(list)</a>
```
