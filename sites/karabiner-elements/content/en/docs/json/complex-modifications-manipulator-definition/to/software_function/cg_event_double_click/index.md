---
title: 'cg_event_double_click'
weight: 100
---

Send double click event by software.
`cg_event_double_click` ensures that the click event occurs at the same location even if the mouse cursor is moving between the first click and the second click.

{{% alert title="Low responsiveness" color="primary" %}}

This configuration is highly specific.

This event will be lagged since it is sent by software implementation.
It is better to send `pointing_button::button1` twice instead of `cg_event_double_click` to get a better response.

Only use it if you absolutely must trigger double-click events without sending regular button events.

{{% /alert %}}

## Example

-   Change right_shift+v to software double click
-   Change right_shift+b to regular double click

```json
{
    "description": "Change right_shift+v to software double click, right_shift+b to regular double click",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "v",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["any"]
                }
            },
            "to": [
                // Pause briefly before releasing from.modifiers.mandatory.
                // This is not required if from.modifiers.mandatory is not specified.
                {
                    "key_code": "vk_none",
                    "hold_down_milliseconds": 100
                },

                {
                    "software_function": {
                        "cg_event_double_click": { "button": 0 }
                    }
                }
            ]
        },

        {
            "type": "basic",
            "from": {
                "key_code": "b",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["any"]
                }
            },
            "to": [
                // The waiting is not necessary in the case of pointing_button.
                { "pointing_button": "button1" },
                { "pointing_button": "button1" }
            ]
        }
    ]
}
```

## Specification

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

{{% alert title="Accessibility" color="primary" %}}

`cg_event_double_click` uses the accessibility features.
You have to allow `karabiner_console_user_server` in Privacy & Security System Settings.

{{< local-image src="images/karabiner_console_user_server_accessibility@2x.png" >}}

{{% /alert %}}
