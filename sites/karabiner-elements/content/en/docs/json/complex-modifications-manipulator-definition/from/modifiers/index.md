---
title: 'from.modifiers'
weight: 200
---

`from.modifiers` is a object which has the following keys.

| Key         | Value               | Required | Description                     |
| ----------- | ------------------- | -------- | ------------------------------- |
| `mandatory` | An array of strings | Optional | Modifiers which must be pressed |
| `optional`  | An array of strings | Optional | Modifiers which can be pressed  |

## `from.modifiers.mandatory`

-   Events are manipulated only if mandatory modifiers are pressed.
-   Mandatory modifiers are removed from `to` events.

## `from.modifiers.optional`

-   Events are also manipulated even if optional modifiers are pressed.
-   Optional modifiers are kept in `to` events.

{{% alert title="Tip" color="primary" %}}
If you do not include `any` in `modifiers.optional`, your manipulator does not change event if extra modifiers (modifiers which are not included in `modifiers.mandatory`) are pressed.
{{% /alert %}}

## List of modifiers

`modifiers.mandatory` and `modifiers.optional` are array of the folowing strings.

| Name            | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `caps_lock`     | ---                                                                |
| `left_command`  | ---                                                                |
| `left_control`  | ---                                                                |
| `left_option`   | ---                                                                |
| `left_shift`    | ---                                                                |
| `right_command` | ---                                                                |
| `right_control` | ---                                                                |
| `right_option`  | ---                                                                |
| `right_shift`   | ---                                                                |
| `fn`            | ---                                                                |
| `command`       | Either left command or right command is pressed                    |
| `control`       | Either left control or right control is pressed                    |
| `option`        | Either left option or right option is pressed                      |
| `shift`         | Either left shift or right shift is pressed                        |
| `left_alt`      | Alias of left_option (available since Karabiner-Elements 12.3.0)   |
| `left_gui`      | Alias of left_command (available since Karabiner-Elements 12.3.0)  |
| `right_alt`     | Alias of right_option (available since Karabiner-Elements 12.3.0)  |
| `right_gui`     | Alias of right_command (available since Karabiner-Elements 12.3.0) |
| `any`           | Any modifiers                                                      |

## Examples

### Without `modifiers`

This json defines manipulator which changes `escape` to `tab`.

```json
{
    "type": "basic",
    "from": {
        "key_code": "escape"
    },
    "to": [
        {
            "key_code": "tab"
        }
    ]
}
```

-   Without `modifiers`, the event is changed only any modifiers are not pressed.

| Input                   | Output                  | Manipulated     |
| ----------------------- | ----------------------- | --------------- |
| `escape`                | `tab`                   | **Manipulated** |
| `left_shift + escape`   | `left_shift + escape`   | Not manipulated |
| `left_control + escape` | `left_control + escape` | Not manipulated |

### With `modifiers.optional`

This json defines manipulator which changes `escape` to `tab`.<br/>
(`left_shift` and `left_control` can be pressed.)

```json
{
    "type": "basic",
    "from": {
        "key_code": "escape",
        "modifiers": {
            "optional": ["left_shift", "left_control"]
        }
    },
    "to": [
        {
            "key_code": "tab"
        }
    ]
}
```

-   The optional modifiers (`left_shift` and `left_control`) are kept in output events.
-   The event is not changed if modifiers are not included in `optional` such as `left_option`.

| Input                               | Output                              | Manipulated     |
| ----------------------------------- | ----------------------------------- | --------------- |
| `escape`                            | `tab`                               | **Manipulated** |
| `left_shift + escape`               | `left_shift + tab`                  | **Manipulated** |
| `left_control + escape`             | `left_control + tab`                | **Manipulated** |
| `left_option + escape`              | `left_option + escape`              | Not manipulated |
| `left_shift + left_option + escape` | `left_shift + left_option + escape` | Not manipulated |

### With `modifiers.mandatory`

This json defines manipulator which changes `control + h` to `delete_or_backspace`.<br/>

```json
{
    "type": "basic",
    "from": {
        "key_code": "h",
        "modifiers": {
            "mandatory": ["control"]
        }
    },
    "to": [
        {
            "key_code": "delete_or_backspace"
        }
    ]
}
```

-   The mandatory modifier (`control`) are removed in output events.
-   The event is not changed if `left_control` and `right_control` are not pressed.

| Input                            | Output                           | Manipulated     |
| -------------------------------- | -------------------------------- | --------------- |
| `h`                              | `h`                              | Not manipulated |
| `left_control + h`               | `delete_or_backspace`            | **Manipulated** |
| `left_control + left_option + h` | `left_control + left_option + h` | Not manipulated |

### With `modifiers.mandatory` and `modifiers.optional`

```json
{
    "type": "basic",
    "from": {
        "key_code": "h",
        "modifiers": {
            "mandatory": ["control"],
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "delete_or_backspace"
        }
    ]
}
```

-   The mandatory modifier (`control`) are removed in output events.
-   The event is not changed if `left_control` and `right_control` are not pressed.
-   `"optional": ["any"]` allows any modifiers.

| Input                            | Output                              | Manipulated     |
| -------------------------------- | ----------------------------------- | --------------- |
| `h`                              | `h`                                 | Not manipulated |
| `left_control + h`               | `delete_or_backspace`               | **Manipulated** |
| `left_control + left_option + h` | `left_option + delete_or_backspace` | **Manipulated** |
| `left_control + left_shift + h`  | `left_shift + delete_or_backspace`  | **Manipulated** |
