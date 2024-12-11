---
title: 'keyboard_type_if, keyboard_type_unless'
weight: 300
---

Change an event if/unless the event is from specified type keyboard.

The keyboard type mentioned here refers to [the type of the virtual keyboard](/docs/manual/configuration/configure-keyboard-type/).


## Example

Change `control-[` key to `escape`, including JIS layout support.

Note: [the <kbd>\[</kbd> key is <kbd>close_bracket</kbd> in JIS layout](/docs/help/troubleshooting/symbols-with-non-ansi-keyboard/)

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

| Name             | Required     | Description                                      |
| ---------------- | ------------ | ------------------------------------------------ |
| `type`           | **Required** | `"keyboard_type_if"` or `"keyboard_type_unless"` |
| `keyboard_types` | **Required** | An array of `"ansi"`, `"iso"` or `"jis"`         |
| `description`    | Optional     | A human-readable comment                         |

### Multiple keyboard types

`keyboard_types` are joined by "or".

The following condition is matched if the keyboard type is "ansi" **or** "iso".

```json
{
    "type": "keyboard_type_if",
    "keyboard_types": ["ansi", "iso"]
}
```
