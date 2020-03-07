---
title: 'variable_if, variable_unless'
weight: 500
---

Change an event if/unless the variable is the specified value.

{{% alert title="Tip" color="primary" %}}

`variable_if` and `variable_unless` are designed to use with `set_variable`.

{{% /alert %}}

```json
{
    "type": "variable_if",
    "name": "variable name",
    "value": variable value
}
```

| Name          | Required     | Description                             |
| ------------- | ------------ | --------------------------------------- |
| `type`        | **Required** | `"variable_if"` or `"variable_unless"`. |
| `name`        | **Required** | Target variable name.                   |
| `value`       | **Required** | Target variable value.                  |
| `description` | Optional     | A human-readable comment                |
