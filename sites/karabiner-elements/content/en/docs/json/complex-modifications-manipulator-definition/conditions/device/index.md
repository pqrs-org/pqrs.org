---
title: 'device_if, device_unless, device_exists_if, device_exists_unless'
weight: 200
---

Change an event if/unless the event is from specified device.

## Example

Change caps_lock to escape on Apple keyboards, wiht the vendor ID is 1452 (0x05ac) or 76 (0x004c) or if it's a built-in keyboard.

```json
{
    "description": "Change caps_lock to escape on Apple keyboards",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "caps_lock",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "escape" }],
            "conditions": [
                {
                    "type": "device_if",
                    "identifiers": [
                        { "vendor_id": 1452 },
                        { "vendor_id": 76 },
                        { "is_built_in_keyboard": true }
                    ]
                }
            ]
        }
    ]
}
```

---

## Specification

```json
{
    "type": "device_if",
    "identifiers": [
        {
            "vendor_id": 1111,
            "product_id": 2222,
            "description": "my keyboard 1"
        },
        {
            "vendor_id": 3333,
            "product_id": 4444,
            "description": "my keyboard 2"
        },
        ...
    ]
}
```

| Name          | Required     | Description                                                                            |
| ------------- | ------------ | -------------------------------------------------------------------------------------- |
| `type`        | **Required** | `"device_if"` or `"device_unless"` or `"device_exists_if"` or `"device_exists_unless"` |
| `identifiers` | **Required** | Target device definitions                                                              |
| `description` | Optional     | A human-readable comment                                                               |

### `type`

| Type                   | Description                                                | Available since           |
| ---------------------- | ---------------------------------------------------------- | ------------------------- |
| `device_if`            | Valid only for devices specified in identifiers            | Karabiner-Elements 11.0.0 |
| `device_unless`        | Valid only for devices other than specified in identifiers | Karabiner-Elements 11.0.0 |
| `device_exists_if`     | Valid if a specified device is connected                   | Karabiner-Elements 14.8.4 |
| `device_exists_unless` | Valid unless a specified device is connected               | Karabiner-Elements 14.8.4 |

### `identifiers`

`identifiers` is an array of objects.

| Name                   | Required | Description                                                                                                                                         | Fixed Value |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `vendor_id`            | Optional | Vendor ID of device                                                                                                                                 | Yes         |
| `product_id`           | Optional | Product ID of device                                                                                                                                | Yes         |
| `device_address`       | Optional | Bluetooth address (Bluetooth MAC address) of device <br />(only available for Bluetooth devices) <br />(available since Karabiner-Elements 14.12.2) | Yes `[1]`   |
| `location_id`          | Optional | Location ID of device                                                                                                                               | No `[2]`    |
| `is_keyboard`          | Optional | `true` or `false`                                                                                                                                   | Yes         |
| `is_pointing_device`   | Optional | `true` or `false`                                                                                                                                   | Yes         |
| `is_game_pad`          | Optional | `true` or `false`<br />(available since Karabiner-Elements 14.12.4)                                                                                 | Yes         |
| `is_touch_bar`         | Optional | `true` or `false`                                                                                                                                   | Yes         |
| `is_built_in_keyboard` | Optional | `true` or `false`<br />(available since Karabiner-Elements 14.8.2)                                                                                  | Yes         |

-   `[1]` The `device_address` will change when you replace the hardware.
-   `[2]` The `location_id` will change when you change the USB port which the device is connected.

#### Multiple identifiers

If you specify multiple identifiers (`vendor_id`, `product_id`, `location_id`, ...), these are joined by "and".

The following condition is matched if Vendor ID is 1111 **and** Product ID is 2222.

```json
{
    "type": "device_if",
    "identifiers": [
        {
            "vendor_id": 1111,
            "product_id": 2222
        }
    ]
}
```

#### Multiple entries

If you specify multiple entries at `identifiers`, conditions are joined by "or".

The following condition is matched if Vendor ID is 1111 **or** 1112.

```json
{
    "type": "device_if",
    "identifiers": [
        {
            "vendor_id": 1111
        },
        {
            "vendor_id": 1112
        }
    ]
}
```

---

## Investigate the device identifiers

You can find them by EventViewer > Devices tab.

{{< local-image src="images/eventviewer-devices@2x.png" >}}
