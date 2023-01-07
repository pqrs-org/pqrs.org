---
title: 'to.mouse_key'
weight: 400
---

Move mouse pointer and scroll by `mouse_key`.

```json
{
    "to": [
        {
            "mouse_key": {
                "x": speed,
                "y": speed,
                "vertical_wheel": speed,
                "horizontal_wheel": speed,
                "speed_multiplier": 1.0
            }
        }
    ]
}
```

| Name               | Required | Description                                                        |
| ------------------ | -------- | ------------------------------------------------------------------ |
| `x`                | Optional | Move left (x < 0) or right (x > 0)                                 |
| `y`                | Optional | Move up (y < 0) or down (y > 0)                                    |
| `vertical_wheel`   | Optional | Scroll up (vertical_wheel < 0) or down (vertical_wheel > 0)        |
| `horizontal_wheel` | Optional | Scroll left (horizontal_wheel > 0) or right (horizontal_wheel < 0) |
| `speed_multiplier` | Optional | Multiply mouse keys speed while this key is hold down              |

{{% alert title="Note" color="primary" %}}
Speed and scroll direction depend on System Settings > Mouse configuration.
{{% /alert %}}

## Examples

|              | json                                           |
| ------------ | ---------------------------------------------- |
| Move left    | `{ "mouse_key": { "x": -1536 } }`              |
| Move right   | `{ "mouse_key": { "x": 1536 } }`               |
| Move up      | `{ "mouse_key": { "y": -1536 } }`              |
| Move down    | `{ "mouse_key": { "y": 1536 } }`               |
| Scroll left  | `{ "mouse_key": { "horizontal_wheel": 32 } }`  |
| Scroll right | `{ "mouse_key": { "horizontal_wheel": -32 } }` |
| Scroll up    | `{ "mouse_key": { "vertical_wheel": -32 } }`   |
| Scroll down  | `{ "mouse_key": { "vertical_wheel": 32 } }`    |

### Complete json examples

-   [Mouse keys (simple)](https://ke-complex-modifications.pqrs.org/#mouse_keys_simple)
-   [Mouse Keys Mode v4](https://ke-complex-modifications.pqrs.org/#mouse_keys_mode_v4)
