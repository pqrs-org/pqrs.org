---
title: 'keyboard_type_if, keyboard_type_unless'
weight: 300
---

Change an event if/unless the event is from specified type keyboard.

The keyboard type mentioned here refers to [the type of the virtual keyboard](/docs/manual/configuration/configure-keyboard-type/).

## Example

Change `control-[` key to `escape`, including JIS layout support.

Note: [the <kbd>\[</kbd> key is <kbd>close_bracket</kbd> in JIS layout](/docs/help/troubleshooting/symbols-with-non-ansi-keyboard/)

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change control-[ to escape",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "open_bracket",
                "modifiers": {
                    "mandatory": ["control"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "escape" }],
            "conditions": [
                {
                    "keyboard_types": ["ansi", "iso"],
                    "type": "keyboard_type_if"
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "close_bracket",
                "modifiers": {
                    "mandatory": ["control"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [{ "key_code": "escape" }],
            "conditions": [
                {
                    "keyboard_types": ["jis"],
                    "type": "keyboard_type_if"
                }
            ]
        }
    ]
}
```

---

## Specification

```json
{
    "type": "keyboard_type_if",
    "keyboard_types": ["ansi", "iso"]
}
```

{{< parameter-table >}}

```json
[
    {
        "name": "`type`",
        "required": true,
        "description": "`\"keyboard_type_if\"` or `\"keyboard_type_unless\"`"
    },
    {
        "name": "`keyboard_types`",
        "required": true,
        "description": "An array of `\"ansi\"`, `\"iso\"` or `\"jis\"`"
    },
    {
        "name": "`description`",
        "required": false,
        "description": "A human-readable comment"
    }
]
```

{{< /parameter-table >}}

### Multiple keyboard types

`keyboard_types` are joined by "or".

The following condition is matched if the keyboard type is "ansi" **or** "iso".

```json
{
    "type": "keyboard_type_if",
    "keyboard_types": ["ansi", "iso"]
}
```
