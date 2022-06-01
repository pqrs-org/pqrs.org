---
title: 'variable_if, variable_unless'
weight: 500
---

Change an event if/unless the variable is the specified value.

{{% alert title="Tip" color="primary" %}}

`variable_if` and `variable_unless` are designed to use with [`set_variable`](../../to/set-variable/).

{{% /alert %}}

```json
{
    "type": "variable_if",
    "name": "variable name",
    "value": variable value
}
```

| Name          | Required     | Description                                 |
| ------------- | ------------ | ------------------------------------------- |
| `type`        | **Required** | `"variable_if"` or `"variable_unless"`.     |
| `name`        | **Required** | Target variable name.                       |
| `value`       | **Required** | Target variable value (must be an integer). |
| `description` | Optional     | A human-readable comment                    |

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}
