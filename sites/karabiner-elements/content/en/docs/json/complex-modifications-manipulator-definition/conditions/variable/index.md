---
title: 'variable_if, variable_unless'
weight: 500
---

Change an event if/unless the variable is the specified value.

## Example

-   [Change `right_shift` x2 to `mission_control`](/docs/json/typical-complex-modifications-examples/#change-right_shift-x2-to-mission_control)
-   [Virtual modifier](/docs/json/extra/virtual-modifier/)

---

## Specification

{{% alert title="Tip" color="primary" %}}

`variable_if` and `variable_unless` are designed to be used with the following features:

-   [`set_variable`](../../to/set-variable/)
-   [`--set-variables` in command line interface](/docs/manual/misc/command-line-interface/)

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

### Available types of `value`

| Type    | Example value      | Available since            |
| ------- | ------------------ | -------------------------- |
| integer | 0,1,2,...          | Karabiner-Elements 11.0.0  |
| boolean | true, false        | Karabiner-Elements 14.4.20 |
| string  | "layer1", "layer2" | Karabiner-Elements 14.4.20 |

{{% alert title="Comparison between different types" color="warning" %}}

Whenever the type of `value` is different, it is treated as having different contents.

-   `1` != `true`
-   `true` != `"true"`

{{% /alert %}}

{{% alert title="Default value" color="primary" %}}

If the variable is not set to a value, the value is treated as `0`.

{{% /alert %}}

---

## Confirm the current variable values

You can see the current variable values by EventViewer > Variables.

{{< local-image src="images/eventviewer-variables@2x.png" >}}

## System variables

Some variables are automatically set by Karabiner-Elements.

| Name                                         | Type    | Data source                                                                          | Available since           |
| -------------------------------------------- | ------- | ------------------------------------------------------------------------------------ | ------------------------- |
| `system.scroll_direction_is_natural`         | boolean | The scroll direction setting of mouse in System Settings                             | Karabiner-Elements 15.2.3 |
| `system.use_fkeys_as_standard_function_keys` | boolean | The "Use all F1, F2, etc. keys as standard function keys" setting in System Settings | Karabiner-Elements 15.2.3 |
