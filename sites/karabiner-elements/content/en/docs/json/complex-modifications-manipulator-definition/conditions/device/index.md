---
title: 'device_if, device_unless, device_exists_if, device_exists_unless'
weight: 200
---

Change an event if/unless the event is from specified device.

## Example

Change `1` key to `f1` if the device is Apple keyboard.

```json
{
    "type": "basic",
    "from": {
        "key_code": "1",
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "f1"
        }
    ],
    "conditions": [
        {
            "type": "device_if",
            "identifiers": [
                {
                    "vendor_id": 1452
                },
                {
                    "vendor_id": 76
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

| Name          | Required     | Description                                                                           |
| ------------- | ------------ | ------------------------------------------------------------------------------------- |
| `type`        | **Required** | `"device_if"` or `"device_unless"` or `"device_exists_if"` or `"device_exists_unless" |
| `identifiers` | **Required** | Target device definitions                                                             |
| `description` | Optional     | A human-readable comment                                                              |

### `type`

| Type                   | Description                                                | Available since           |
| ---------------------- | ---------------------------------------------------------- | ------------------------- |
| `device_if`            | Valid only for devices specified in identifiers            | Karabiner-Elements 11.0.0 |
| `device_unless`        | Valid only for devices other than specified in identifiers | Karabiner-Elements 11.0.0 |
| `device_exists_if`     | Valid if a specified device is connected                   | Karabiner-Elements 14.8.4 |
| `device_exists_unless` | Valid unless a specified device is connected               | Karabiner-Elements 14.8.4 |

### `identifiers`

`identifiers` is an array of objects.

| Name                   | Required | Description                                                                       |
| ---------------------- | -------- | --------------------------------------------------------------------------------- |
| `vendor_id`            | Optional | Vendor ID of device which is fixed value for each device                          |
| `product_id`           | Optional | Product ID of device which is fixed value for each device                         |
| `location_id`          | Optional | Location ID of device which is changed by where the port your device is connected |
| `is_keyboard`          | Optional | `true` or `false`                                                                 |
| `is_pointing_device`   | Optional | `true` or `false`                                                                 |
| `is_touch_bar`         | Optional | `true` or `false`                                                                 |
| `is_built_in_keyboard` | Optional | `true` or `false` (available since Karabiner-Elements 14.8.2)                     |

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
