---
title: 'keyboard_type_if, keyboard_type_unless'
weight: 300
---

Change an event if/unless the event is from specified type keyboard.

```json
{
    "type": "keyboard_type_if",
    "keyboard_types": ["ansi", "iso"]
}
```

{{% alert title="Tip" color="primary" %}}

It's useful for supporting "change control-[ to escape" with all keyboard types.
[(example json)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/public/json/example_keyboard_type.json)

Some characters have different key code for each keyboard types.<br />
(e.g., **[** is `open_bracket` on ansi and iso, `close_bracket` on jis.)

{{% /alert %}}

| Name             | Required     | Description                                      |
| ---------------- | ------------ | ------------------------------------------------ |
| `type`           | **Required** | `"keyboard_type_if"` or `"keyboard_type_unless"` |
| `keyboard_types` | **Required** | An array of `"ansi"`, `"iso"` or `"jis"`         |
| `description`    | Optional     | A human-readable comment                         |

## Multiple keyboard types

`keyboard_types` are joined by "or".

The following condition is matched if the keyboard type is "ansi" **or** "iso".

```json
{
    "type": "keyboard_type_if",
    "keyboard_types": ["ansi", "iso"]
}
```
