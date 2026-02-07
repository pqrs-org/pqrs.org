---
title: 'mouse_basic'
weight: 100
---

`mouse_basic` allows you to invert or disable mouse movement.

{{% alert title="Note" color="primary" %}}

To use this setting, you need to enable your mouse in the Devices tab.

{{% /alert %}}

```json
{
    "type": "mouse_basic",
    "flip": ["x", "y", "vertical_wheel", "horizontal_wheel"],
    "swap": ["xy", "wheels"],
    "discard": ["x", "y", "vertical_wheel", "horizontal_wheel"]

    "conditions": ...,
}
```

| Key          | Required     | Description                                                                                            |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------ |
| `type`       | **Required** | `"mouse_basic"` is specified                                                                           |
| `flip`       | Optional     | An array of directions you want to invert.                                                             |
| `swap`       | Optional     | Use `"xy"` if you want to rotate the mouse cursor movement by 90 degrees. Use it together with `flip`. |
| `discard`    | Optional     | An array of directions in which events should not be sent.                                             |
| `conditions` | Optional     | Same as [basic.conditions](../../conditions/)                                                          |

{{% alert title="Caution" color="danger" %}}

When using discard, make sure to explicitly specify the device using conditions.
Otherwise, there's a risk that the mouse cursor may become completely unmovable.

{{% /alert %}}

## Example

Disable the scroll wheel on Logitech mice.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Disable the scroll wheel on Logitech mice",
    "manipulators": [
        {
            "type": "mouse_basic",
            "discard": ["vertical_wheel", "horizontal_wheel"],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [{ "vendor_id": 1133 }]
                }
            ]
        }
    ]
}
```

Reverse the scroll wheel direction in the Windows app.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Reverse the scroll wheel direction in the Windows app",
    "manipulators": [
        {
            "type": "mouse_basic",
            "flip": ["vertical_wheel", "horizontal_wheel"],
            "conditions": [
                {
                    "type": "frontmost_application_if",
                    "bundle_identifiers": ["^com\\.microsoft\\.rdc\\.macos$"]
                }
            ]
        }
    ]
}
```
