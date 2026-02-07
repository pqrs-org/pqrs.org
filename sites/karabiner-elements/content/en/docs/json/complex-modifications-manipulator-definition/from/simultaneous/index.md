---
title: 'from.simultaneous'
weight: 300
---

`simultaneous` manipulates keys which are pressed simultaneously in 50 milliseconds.

## Example

This json defines manipulator which changes `a+s+d` to `mission_control`.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Pressing the a,s,d keys simultaneously launches Mission Control",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "simultaneous": [
                    { "key_code": "a" },
                    { "key_code": "s" },
                    { "key_code": "d" }
                ],
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "apple_vendor_keyboard_key_code": "mission_control" }]
        }
    ]
}
```

{{% alert title="Note" color="primary" %}}

There are some cases `simultaneous` does not modify events.

- `simultaneous` does not modify events if any `from` events are released before all `from` events are pressed.
- `simultaneous` does not modify events if `from` events are interrupted by another key_down event.

{{% /alert %}}

### Manipulated input #1

- Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `d` key_down
- Output:
    1.  `mission_control`

### Manipulated input #2

- Input:
    1.  `s` key_down
    2.  `a` key_down
    3.  `d` key_down
- Output:
    1.  `mission_control`

### Not manipulated input #1

`a` is released before all input events are pressed.

- Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `a` key_up
    4.  `d` key_down
- Output:
    1.  `a` key_down
    2.  `s` key_down
    3.  `a` key_up
    4.  `d` key_down

### Not manipulated input #2

Another key (`f`) is pressed before all input events are pressed.

- Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `f` key_down
    4.  `d` key_down
- Output:
    1.  `a` key_down
    2.  `s` key_down
    3.  `f` key_down
    4.  `d` key_down

## About key_up

The key_up event is posted when you release any `from` events.

For example, changing `tab+q` to `mission_control` works as follows.

| Input          | Output                     |
| -------------- | -------------------------- |
| `tab` key_down | ---                        |
| `q` key_down   | `mission_control` key_down |
| `tab` key_up   | `mission_control` key_up   |
| `q` key_up     | ---                        |

## Change threshold milliseconds

You can adjust threshold on Karabiner-Elements Settings > Parameters.

{{< local-image src="images/karabiner-elements-simultaneous_threshold_milliseconds@2x.png" >}}

It is same as adjusting `basic.simultaneous_threshold_milliseconds` parameter in json.
