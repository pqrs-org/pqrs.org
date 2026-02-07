---
title: 'to.set_notification_message'
weight: 310
---

`set_notification_message` sets or remove the notification message.

{{< local-image src="images/set-notification-message@2x.png" >}}

## Examples

Show the notification message while you press right shift key.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Show a message while right_shift is pressed",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "right_shift",
                "modifiers": {
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    // Show the notification message
                    "set_notification_message": {
                        "id": "my_message",
                        "text": "Hello World!"
                    }
                },
                {
                    "key_code": "right_shift"
                }
            ],
            "to_after_key_up": [
                {
                    // Hide the notification message
                    "set_notification_message": {
                        "id": "my_message",
                        "text": ""
                    }
                }
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
            "set_notification_message": {
                "id": "identifier of the message",
                "text": "message text"
            }
        }
    ]
}
```

| Name   | Required     | Description                                            |
| ------ | ------------ | ------------------------------------------------------ |
| `id`   | **Required** | Specify an unique string for your notification message |
| `text` | **Required** | Message body                                           |

{{% alert title="Important" color="danger" %}}
Do not forget to remove the notification message.
{{% /alert %}}

{{% alert title="How to remove the notification message" color="success" %}}
Set empty string to `text` to remove the notification message.
{{% /alert %}}
