---
title: 'cg_event_double_click'
weight: 100
---

{{% alert title="Beta feature" color="danger" %}}
`cg_event_double_click` is available since Karabiner-Elements 13.5.1.
{{% /alert %}}

Send pseudo double click event.
`cg_event_double_click` ensures that the click event occurs at the same location even if the mouse cursor is moving between the first click and the second click.

```json
{
    "to": [
        {
            "software_function": {
                "cg_event_double_click": {
                    "button": 0
                }
            }
        }
    ]
}
```

| Name     | Required     | Description                                                                                                           |
| -------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `button` | **Required** | An integer of CGMouseButton.<br><br>0: Left Click<br>1: Right Click<br>2: Middle Click<br>3,4,5,...,31: Other Buttons |

{{% alert title="Low responsiveness" color="primary" %}}

This event will be lagged since these events are sent by software implementation.
It is better response sending `pointing_button::button1` twice instead of using `cg_event_double_click`.

{{% /alert %}}

{{% alert title="Accessibility" color="primary" %}}

`cg_event_double_click` uses the accessibility features.
You have to allow `karabiner_console_user_server` in Security & Privacy System Preferences.

{{< local-image src="images/karabiner_console_user_server_accessibility@2x.png" >}}

{{% /alert %}}

## Examples

Sending right button double click:

```json
{
    "to": [
        {
            "software_function": {
                "cg_event_double_click": {
                    "button": 1
                }
            }
        }
    ]
}
```
