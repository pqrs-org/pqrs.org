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

| Name                                      | Required     | Description                                                                           |
| ----------------------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| `type`                                    | **Required** | `"basic"` is specified                                                                |
| [`from`](from/)                           | **Required** | The name of key code, consumer key code or pointing button which you want to change   |
| [`to`](to/)                               | Optional     | Events which are sent when you press `from` key                                       |
| [`to_if_alone`](to-if-alone/)             | Optional     | Events which are sent when you press `from` key alone                                 |
| [`to_if_held_down`](to-if-held-down/)     | Optional     | Events which are sent when you hold down `from` key                                   |
| [`to_after_key_up`](to-after-key-up/)     | Optional     | Events which are sent after you release `from` key                                    |
| [`to_delayed_action`](to-delayed-action/) | Optional     | Events which are sent after 500 milliseconds at you press `from` key                  |
| [`conditions`](conditions/)               | Optional     | Manipulator is applied only if condition is matched (e.g., the frontmost application) |
| `parameters`                              | Optional     | Override parameters such as `to_if_alone_timeout_milliseconds`                        |
| `description`                             | Optional     | A human-readable comment                                                              |

## Detail

-   [from event definition](from/)
-   [to event definition](to/)
-   [to_if_alone](to-if-alone/)
-   [to_if_held_down](to-if-held-down/)
-   [to_after_key_up](to-after-key-up/)
-   [to_delayed_action](to-delayed-action/)
-   [conditions](conditions/)

## Other manipulators

Manipulators which `type` is not `"basic"`.

-   [`mouse_basic`](other-types/mouse-basic/)
-   [`mouse_motion_to_scroll`](other-types/mouse-motion-to-scroll/)

## Table of Contents
