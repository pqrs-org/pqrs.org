---
title: 'variable_if, variable_unless'
weight: 400
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
| `type`        | **required** | `"variable_if"` or `"variable_unless"`. |
| `name`        | **required** | Target variable name.                   |
| `value`       | **required** | Target variable value.                  |
| `description` | optional     | A human-readable comment                |
