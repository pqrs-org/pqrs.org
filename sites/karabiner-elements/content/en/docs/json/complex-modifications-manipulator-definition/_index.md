---
title: 'complex_modifications manipulator definition'
weight: 500
---

| Name                          | Required     | Description                                                                           |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| `type`                        | **Required** | `"basic"` is specified                                                                |
| [`from`](from/)               | **Required** | The name of key code, consumer key code or pointing button which you want to change   |
| [`to`](to/)                   | Optional     | Events which are sent when you press `from` key                                       |
| [`to_if_alone`](to-if-alone/) | Optional     | Events which are sent when you press `from` key alone                                 |
| `to_if_held_down`             | Optional     | Events which are sent when you hold down `from` key                                   |
| `to_after_key_up`             | Optional     | Events which are sent after you release `from` key                                    |
| `to_delayed_action`           | Optional     | Events which are sent after 500 milliseconds at you press `from` key                  |
| [`conditions`](conditions/)   | Optional     | Manipulator is applied only if condition is matched (e.g., the frontmost application) |
| `parameters`                  | Optional     | Override parameters such as `to_if_alone_timeout_milliseconds`                        |
| `description`                 | Optional     | A human-readable comment                                                              |

## Detail

-   [from event definition](from/)
-   [to event definition](to/)
-   [conditions](conditions/)
