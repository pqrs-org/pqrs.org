---
title: 'complex_modifications manipulator definition'
weight: 500
---

| Name                             | Required     | Description                                                                           |
| -------------------------------- | ------------ | ------------------------------------------------------------------------------------- |
| `type`                           | **Required** | `"basic"` is specified                                                                |
| [`from`](from-event-definition/) | **Required** | The name of key code, consumer key code or pointing button which you want to change   |
| [`to`](to-event-definition/)     | Optional     | Events which are sent when you press `from` key                                       |
| `to_if_alone`                    | Optional     | Events which are sent when you press `from` key alone                                 |
| `to_if_held_down`                | Optional     | Events which are sent when you hold down `from` key                                   |
| `to_after_key_up`                | Optional     | Events which are sent after you release `from` key                                    |
| `to_delayed_action`              | Optional     | Events which are sent after 500 milliseconds at you press `from` key                  |
| [`conditions`](conditions/)      | Optional     | Manipulator is applied only if condition is matched (e.g., the frontmost application) |
| `parameters`                     | Optional     | Override parameters such as `to_if_alone_timeout_milliseconds`                        |
| `description`                    | Optional     | A human-readable comment                                                              |

## Detail

-   [from event definition](from-event-definition/)
-   [to event definition](to-event-definition/)
-   [conditions](conditions/)
    -   [frontmost_application_if<br/>frontmost_application_unless](conditions/frontmost-application/)
    -   [device_if<br/>device_unless](conditions/device/)
    -   [keyboard_type_if<br/>keyboard_type_unless](conditions/keyboard-type/)
    -   [input_source_if<br/>input_source_unless](conditions/input-source/)
    -   [variable_if<br/>variable_unless](conditions/variable/)
    -   [event_changed_if<br/>event_changed_unless](conditions/event-changed/)
