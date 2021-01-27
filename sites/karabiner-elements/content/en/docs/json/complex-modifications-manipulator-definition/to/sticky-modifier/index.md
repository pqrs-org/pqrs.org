---
title: 'to.sticky_modifier'
weight: 450
---

`sticky_modifier` changes a key to a sticky modifier key.

```json
{
    "to": [
        {
            "sticky_modifier": {
                "{modifier_name}": "on | off | toggle"
            }
        }
    ]
}
```

| Name              | Required | Description                                                                                                                                                        |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{modifier_name}` | Optional | - `on` always activates a sticky modifier.<br />- `off` is vice versa.<br />- `toggle` toggles a sticky modifier. <br /><br />`toggle` is suitable for most cases. |

## Supported modifiers

-   left_control
-   left_shift
-   left_option
-   left_command
-   right_control
-   right_shift
-   right_option
-   right_command
-   fn

## Examples

```json
{
    "to": [
        {
            "sticky_modifier": {
                "right_option": "toggle"
            }
        }
    ]
}
```

{{% alert title="Note" color="danger" %}}
You have to specify only one modifier.

If you want to activate multiple sticky modifiers, put multiple sticky_modifier as follows.

```json
{
    "to": [
        {
            "sticky_modifier": {
                "left_control": "toggle"
            }
        },
        {
            "sticky_modifier": {
                "left_shift": "toggle"
            }
        }
    ]
}
```

{{% /alert %}}
