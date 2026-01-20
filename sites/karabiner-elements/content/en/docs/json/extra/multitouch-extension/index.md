---
title: 'MultitouchExtension integration'
weight: 100
---

[Karabiner-MultitouchExtension](../../../manual/misc/multitouch-extension/) allows you to change keys only when the finger is on the trackpad.

You can use `variable_if` or `variable_unless` to determine either the finger is on trackpad.

## Example

The following json changes `k` key to `up_arrow` when the finger is on the trackpad.

```json
{
    "type": "basic",
    "from": {
        "key_code": "k",
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "up_arrow"
        }
    ],
    "conditions": [
        {
            "type": "variable_unless",
            "name": "multitouch_extension_finger_count_total",
            "value": 0
        }
    ]
}
```

## Variables

Karabiner-MultitouchExtension changes the following variables when the finger count on the trackpad is changed.

| Name                                                | Value                                          |
| --------------------------------------------------- | ---------------------------------------------- |
| `multitouch_extension_finger_count_total`           | Total count of fingers on the trackpad         |
| `multitouch_extension_finger_count_upper_half_area` | Count of fingers on the upper half of trackpad |
| `multitouch_extension_finger_count_lower_half_area` | Count of fingers on the lower half of trackpad |
| `multitouch_extension_finger_count_left_half_area`  | Count of fingers on the left half of trackpad  |
| `multitouch_extension_finger_count_right_half_area` | Count of fingers on the right half of trackpad |

{{% alert title="Note" color="primary" %}}

- `finger_count_total == finger_count_upper_half_area + finger_count_lower_half_area`
- `finger_count_total == finger_count_left_half_area + finger_count_right_half_area`

{{% /alert %}}

You can confirm the variables state on Karabiner-EventViewer > Variables.

{{< local-image src="images/karabiner-elements-eventviewer-variables@2x.png" >}}
