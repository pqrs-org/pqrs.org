---
title: 'mouse_motion_and_wheel_to_key'
weight: 300
---

`mouse_motion_and_wheel_to_key` changes mouse cursor movement or scroll wheel input to key taps.

{{% alert color="info" %}}

`mouse_motion_and_wheel_to_key` is available since Karabiner-Elements 16.3.9.

{{% /alert %}}


```json
{
    "type": "mouse_motion_and_wheel_to_key",

    "from": {
        "source": "xy",
        "threshold": 20,
        "sampling_interval_milliseconds": 100,
        "modifiers": {
            "mandatory": [...],
            "optional": [...]
        }
    },

    "to": {
        "up": [...],
        "down": [...],
        "left": [...],
        "right": [...]
    },

    "conditions": ...
}
```

{{< parameter-table name-header="Key" >}}

```json
[
    {
        "name": "`type`",
        "value": "`\"mouse_motion_and_wheel_to_key\"`",
        "required": true,
        "description": "—"
    },
    {
        "name": "`from.source`",
        "value": "`\"xy\"`, `\"wheels\"`, `\"horizontal_wheel\"`, `\"vertical_wheel\"`",
        "required": true,
        "description": "Select mouse cursor movement or wheel input. See Input sources below."
    },
    {
        "name": "`from.threshold`",
        "value": "Number",
        "required": false,
        "description": "Minimum accumulated input delta to emit a key tap. The default value is `20` for `xy`, or `1` for wheel sources. Units are input deltas, not pixels or scroll lines."
    },
    {
        "name": "`from.sampling_interval_milliseconds`",
        "value": "Number",
        "required": false,
        "description": "Sampling window duration in milliseconds. The default value is `100`."
    },
    {
        "name": "`from.modifiers`",
        "value": "Same as [basic.from.modifiers](../../from/modifiers/)",
        "required": false,
        "description": "Enable the manipulator if specified modifiers are pressed"
    },
    {
        "name": "`to`",
        "value": "An object mapping `up`, `down`, `left`, and `right` to output arrays",
        "required": true,
        "description": "Each direction contains an array of [output events](../../to/). Directions you do not need can be omitted."
    },
    {
        "name": "`conditions`",
        "value": "Same as [basic.conditions](../../conditions/)",
        "required": false,
        "description": "Enable the manipulator when specified conditions are met"
    }
]
```

{{< /parameter-table >}}

{{% alert title="Caution" color="danger" %}}

When using `from.source: "xy"`, you should set either `from.modifiers` or `conditions`.

Without them, mouse cursor movement is always consumed, so you cannot move the cursor with that mouse.

{{% /alert %}}

## Input sources

| `from.source`      | Selected input          | Output directions             |
| ------------------ | ----------------------- | ----------------------------- |
| `xy`               | Both mouse cursor axes  | `up`, `down`, `left`, `right` |
| `wheels`           | Both scroll wheel axes  | `up`, `down`, `left`, `right` |
| `horizontal_wheel` | Horizontal wheel (tilt) | `left`, `right`               |
| `vertical_wheel`   | Vertical wheel          | `up`, `down`                  |

Direction names refer to input deltas before macOS scrolling preferences are applied.

| Input        | `to.left`      | `to.right`     | `to.up`      | `to.down`    |
| ------------ | -------------- | -------------- | ------------ | ------------ |
| Mouse cursor | X < 0          | X > 0          | Y < 0        | Y > 0        |
| Scroll wheel | Horizontal < 0 | Horizontal > 0 | Vertical > 0 | Vertical < 0 |

## Examples

### fn + mouse movement to control + arrow keys

The following json changes `fn + mouse movement` to `control + arrow keys`.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change fn + mouse movement to control + arrow keys",
    "manipulators": [
        {
            "type": "mouse_motion_and_wheel_to_key",
            "from": {
                "source": "xy",
                "threshold": 32,
                "sampling_interval_milliseconds": 100,
                "modifiers": {
                    "mandatory": ["fn"],
                    "optional": ["any"]
                }
            },
            "to": {
                "up": [
                    { "key_code": "up_arrow", "modifiers": ["left_control"] }
                ],
                "down": [
                    { "key_code": "down_arrow", "modifiers": ["left_control"] }
                ],
                "left": [
                    { "key_code": "left_arrow", "modifiers": ["left_control"] }
                ],
                "right": [
                    { "key_code": "right_arrow", "modifiers": ["left_control"] }
                ]
            }
        }
    ]
}
```

### Wheel tilt to command + arrow keys

The following json changes horizontal wheel input (tilt) to `command + left_arrow` or `command + right_arrow`. Vertical scrolling, mouse cursor movement, and button clicks pass through unchanged.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Change wheel tilt to command + arrow keys",
    "manipulators": [
        {
            "type": "mouse_motion_and_wheel_to_key",
            "from": {
                "source": "horizontal_wheel",
                "threshold": 1,
                "sampling_interval_milliseconds": 100,
                "modifiers": { "optional": ["any"] }
            },
            "to": {
                "left": [
                    { "key_code": "left_arrow", "modifiers": ["left_command"] }
                ],
                "right": [
                    { "key_code": "right_arrow", "modifiers": ["left_command"] }
                ]
            }
        }
    ]
}
```
