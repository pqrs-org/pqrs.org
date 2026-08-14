---
title: 'from.modifiers'
weight: 200
---

`from.modifiers` is a object which has the following keys.

{{< parameter-table name-header="Key" >}}

```json
[
    {
        "name": "`mandatory`",
        "value": "An array of strings",
        "required": false,
        "description": "Modifiers which must be pressed"
    },
    {
        "name": "`optional`",
        "value": "An array of strings",
        "required": false,
        "description": "Modifiers which can be pressed"
    }
]
```

{{< /parameter-table >}}

## `from.modifiers.mandatory`

- Events are manipulated only if mandatory modifiers are pressed.
- Mandatory modifiers are removed from `to` events.

## `from.modifiers.optional`

- Events are also manipulated even if optional modifiers are pressed.
- Optional modifiers are kept in `to` events.

{{% alert title="Tip" color="primary" %}}
If you do not include `any` in `modifiers.optional`, your manipulator does not change event if extra modifiers (modifiers which are not included in `modifiers.mandatory`) are pressed.
{{% /alert %}}

## List of modifiers

`modifiers.mandatory` and `modifiers.optional` are array of the folowing strings.

{{< parameter-table >}}

```json
[
    { "name": "`caps_lock`", "description": "—" },
    { "name": "`left_command`", "description": "—" },
    { "name": "`left_control`", "description": "—" },
    { "name": "`left_option`", "description": "—" },
    { "name": "`left_shift`", "description": "—" },
    { "name": "`right_command`", "description": "—" },
    { "name": "`right_control`", "description": "—" },
    { "name": "`right_option`", "description": "—" },
    { "name": "`right_shift`", "description": "—" },
    { "name": "`fn`", "description": "—" },
    {
        "name": "`command`",
        "description": "Either left command or right command is pressed"
    },
    {
        "name": "`control`",
        "description": "Either left control or right control is pressed"
    },
    {
        "name": "`option`",
        "description": "Either left option or right option is pressed"
    },
    {
        "name": "`shift`",
        "description": "Either left shift or right shift is pressed"
    },
    {
        "name": "`left_alt`",
        "description": "Alias of `left_option`",
        "available_since": "Karabiner-Elements 12.3.0"
    },
    {
        "name": "`left_gui`",
        "description": "Alias of `left_command`",
        "available_since": "Karabiner-Elements 12.3.0"
    },
    {
        "name": "`right_alt`",
        "description": "Alias of `right_option`",
        "available_since": "Karabiner-Elements 12.3.0"
    },
    {
        "name": "`right_gui`",
        "description": "Alias of `right_command`",
        "available_since": "Karabiner-Elements 12.3.0"
    },
    { "name": "`any`", "description": "Any modifiers" }
]
```

{{< /parameter-table >}}

## Examples

### Without `modifiers`

This json defines manipulator which changes `escape` to `tab`.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change escape to tab (without from.modifiers)",
    "manipulators": [
        {
            "type": "basic",
            "from": { "key_code": "escape" },
            "to": [{ "key_code": "tab" }]
        }
    ]
}
```

- Without `modifiers`, the event is changed only any modifiers are not pressed.

| Input                   | Output                  | Manipulated     |
| ----------------------- | ----------------------- | --------------- |
| <kbd>escape</kbd>       | <kbd>tab</kbd>          | **Manipulated** |
| `left_shift + escape`   | `left_shift + escape`   | Not manipulated |
| `left_control + escape` | `left_control + escape` | Not manipulated |
| `caps_lock + escape`    | `caps_lock + escape`    | Not manipulated |

### With `modifiers.optional`

This json defines manipulator which changes `escape` to `tab`.<br/>
(`left_shift` and `left_control` can be pressed.)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change escape to tab (from.modifiers.optional)",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "escape",
                "modifiers": {
                    "optional": ["left_shift", "left_control"]
                }
            },
            "to": [{ "key_code": "tab" }]
        }
    ]
}
```

- The optional modifiers (`left_shift` and `left_control`) are kept in output events.
- The event is not changed if modifiers are not included in `optional` such as `left_option`.

| Input                               | Output                              | Manipulated     |
| ----------------------------------- | ----------------------------------- | --------------- |
| <kbd>escape</kbd>                   | <kbd>tab</kbd>                      | **Manipulated** |
| <kbd>left_shift + escape</kbd>      | <kbd>left_shift + tab</kbd>         | **Manipulated** |
| <kbd>left_control + escape</kbd>    | <kbd>left_control + tab</kbd>       | **Manipulated** |
| `left_option + escape`              | `left_option + escape`              | Not manipulated |
| `left_shift + left_option + escape` | `left_shift + left_option + escape` | Not manipulated |

### With `modifiers.mandatory`

This json defines manipulator which changes `control + h` to `delete_or_backspace`.<br/>

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change control+h to delete_or_backspace (from.modifiers.mandatory)",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": ["control"]
                }
            },
            "to": [{ "key_code": "delete_or_backspace" }]
        }
    ]
}
```

- The mandatory modifier (`control`) are removed in output events.
- The event is not changed if `left_control` and `right_control` are not pressed.

| Input                            | Output                           | Manipulated     |
| -------------------------------- | -------------------------------- | --------------- |
| `h`                              | `h`                              | Not manipulated |
| <kbd>left_control + h</kbd>      | <kbd>delete_or_backspace</kbd>   | **Manipulated** |
| `left_control + left_option + h` | `left_control + left_option + h` | Not manipulated |

### With `modifiers.mandatory` and `modifiers.optional`

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change control+h to delete_or_backspace (mandatory and optional)",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": ["control"],
                    "optional": ["any"]
                }
            },
            "to": [{ "key_code": "delete_or_backspace" }]
        }
    ]
}
```

- The mandatory modifier (`control`) are removed in output events.
- The event is not changed if `left_control` and `right_control` are not pressed.
- `"optional": ["any"]` allows any modifiers.

| Input                                     | Output                                       | Manipulated     |
| ----------------------------------------- | -------------------------------------------- | --------------- |
| `h`                                       | `h`                                          | Not manipulated |
| <kbd>left_control + h</kbd>               | <kbd>delete_or_backspace</kbd>               | **Manipulated** |
| <kbd>left_control + left_option + h</kbd> | <kbd>left_option + delete_or_backspace</kbd> | **Manipulated** |
| <kbd>left_control + left_shift + h</kbd>  | <kbd>left_shift + delete_or_backspace</kbd>  | **Manipulated** |

### With caps_lock

When setting caps lock as modifiers.mandatory, you need to configure to carefully; otherwise, caps lock will be turned off.

#### Solution 1: Add `caps_lock` to `to.modifiers`

This approach is more stable, so if the shortcut works fine even with caps lock on, please use this method.

```json
{
    "description": "Change caps_lock+m to mission_control",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "m",
                "modifiers": {
                    "mandatory": ["caps_lock"]
                }
            },
            "to": [
                {
                    "apple_vendor_keyboard_key_code": "mission_control",
                    "modifiers": ["caps_lock"]
                }
            ]
        }
    ]
}
```

#### Solution 2: Explicitly turn caps_lock off in `to`, then turn it back on

```json
{
    "description": "Change caps_lock+h to Hello",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "h",
                "modifiers": {
                    "mandatory": ["caps_lock"]
                }
            },
            "to": [
                {
                    "key_code": "caps_lock",
                    "hold_down_milliseconds": 200
                },
                { "key_code": "h", "modifiers": ["left_shift"] },
                { "key_code": "e" },
                { "key_code": "l" },
                { "key_code": "l" },
                { "key_code": "o" },
                {
                    "key_code": "caps_lock",
                    "hold_down_milliseconds": 200
                },
                { "key_code": "vk_none" }
            ]
        }
    ]
}
```
