---
title: 'to.set_variable'
weight: 300
---

`set_variable` defines and updates the variable value.

{{% alert title="Tip" color="primary" %}}

`set_variable` is designed to use with [`variable_if` and `variable_unless` conditions](../../conditions/variable/).

{{% /alert %}}

```json
{
    "to": [
        {
            "set_variable": {
                "name": "variable name",
                "value": variable value
            }
        }
    ]
}
```

| Name    | Required     | Description                                 |
| ------- | ------------ | ------------------------------------------- |
| `name`  | **Required** | Target variable name.                       |
| `value` | **Required** | Target variable value (must be an integer). |

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}
