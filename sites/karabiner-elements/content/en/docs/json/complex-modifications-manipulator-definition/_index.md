---
title: 'complex_modifications manipulator definition'
weight: 500
---

```json
"manipulators": [
    {
        "type": "basic",
        "from": {...},
        "to": [...],
        "to_if_alone": [...],
        "to_if_held_down": [...],
        "to_if_other_key_pressed": [...],
        "to_after_key_up": [...],
        "to_delayed_action": {
            "to_if_invoked": [...],
            "to_if_canceled": [...],
        },
        "conditions": [...],
        "parameters": {...},
        "description": "Optional description for human"
    },
    ...
]
```

{{< parameter-table >}}

```json
[
    {
        "name": "`type`",
        "required": true,
        "description": "`\"basic\"` is specified"
    },
    {
        "name": "[`from`](from/)",
        "required": true,
        "description": "The name of key code, consumer key code or pointing button which you want to change"
    },
    {
        "name": "[`to`](to/)",
        "required": false,
        "description": "Events which are sent when you press `from` key"
    },
    {
        "name": "[`to_if_alone`](to-if-alone/)",
        "required": false,
        "description": "Events which are sent when you press `from` key alone"
    },
    {
        "name": "[`to_if_held_down`](to-if-held-down/)",
        "required": false,
        "description": "Events which are sent when you hold down `from` key"
    },
    {
        "name": "[`to_if_other_key_pressed`](to-if-other-key-pressed/)",
        "required": false,
        "description": "Events which are sent when you press other keys with `from` key"
    },
    {
        "name": "[`to_after_key_up`](to-after-key-up/)",
        "required": false,
        "description": "Events which are sent after you release `from` key"
    },
    {
        "name": "[`to_delayed_action`](to-delayed-action/)",
        "required": false,
        "description": "Events which are sent after 500 milliseconds at you press `from` key"
    },
    {
        "name": "[`conditions`](conditions/)",
        "required": false,
        "description": "Manipulator is applied only if condition is matched (e.g., the frontmost application)"
    },
    {
        "name": "`parameters`",
        "required": false,
        "description": "Override parameters such as `to_if_alone_timeout_milliseconds`"
    },
    {
        "name": "`description`",
        "required": false,
        "description": "A human-readable comment"
    }
]
```

{{< /parameter-table >}}

## Detail

- [from event definition](from/)
- [to event definition](to/)
- [to_if_alone](to-if-alone/)
- [to_if_held_down](to-if-held-down/)
- [to_if_other_key_pressed](to-if-other-key-pressed/)
- [to_after_key_up](to-after-key-up/)
- [to_delayed_action](to-delayed-action/)
- [conditions](conditions/)

## Other manipulators

Manipulators which `type` is not `"basic"`.

- [`mouse_basic`](other-types/mouse-basic/)
- [`mouse_motion_to_scroll`](other-types/mouse-motion-to-scroll/)

## Table of Contents
