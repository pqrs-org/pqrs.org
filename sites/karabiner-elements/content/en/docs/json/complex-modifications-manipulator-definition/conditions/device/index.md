---
title: 'device_if, device_unless, device_exists_if, device_exists_unless'
weight: 200
---

Change an event if/unless the event is from specified device.

## Example

Change caps_lock to escape on Apple keyboards, wiht the vendor ID is 1452 (0x05ac) or 76 (0x004c) or if it's a built-in keyboard.

{{< karabiner-elements-complex-modifications-json-usage >}}

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

{{< parameter-table >}}

```json
[
    {
        "name": "`type`",
        "required": true,
        "description": "`\"device_if\"` or `\"device_unless\"` or `\"device_exists_if\"` or `\"device_exists_unless\"`"
    },
    {
        "name": "`identifiers`",
        "required": true,
        "description": "Target device definitions"
    },
    {
        "name": "`description`",
        "required": false,
        "description": "A human-readable comment"
    }
]
```

{{< /parameter-table >}}

### `type`

{{< parameter-table name-header="Type" >}}

```json
[
    {
        "name": "`device_if`",
        "description": "Valid only for devices specified in identifiers",
        "available_since": "Karabiner-Elements 11.0.0"
    },
    {
        "name": "`device_unless`",
        "description": "Valid only for devices other than specified in identifiers",
        "available_since": "Karabiner-Elements 11.0.0"
    },
    {
        "name": "`device_exists_if`",
        "description": "Valid if a specified device is connected",
        "available_since": "Karabiner-Elements 14.8.4"
    },
    {
        "name": "`device_exists_unless`",
        "description": "Valid unless a specified device is connected",
        "available_since": "Karabiner-Elements 14.8.4"
    }
]
```

{{< /parameter-table >}}

### `identifiers`

`identifiers` is an array of objects.

{{< parameter-table >}}

```json
[
    {
        "name": "`vendor_id`",
        "required": false,
        "description": "Vendor ID of device",
        "fixed_value": "Yes"
    },
    {
        "name": "`product_id`",
        "required": false,
        "description": "Product ID of device",
        "fixed_value": "Yes"
    },
    {
        "name": "`device_address`",
        "required": false,
        "description": "Bluetooth address (Bluetooth MAC address) of device<br />(only available for Bluetooth devices)",
        "available_since": "Karabiner-Elements 14.12.2",
        "fixed_value": "Yes `[1]`"
    },
    {
        "name": "`location_id`",
        "required": false,
        "description": "Location ID of device",
        "fixed_value": "No `[2]`"
    },
    {
        "name": "`is_keyboard`",
        "required": false,
        "description": "`true` or `false`",
        "fixed_value": "Yes"
    },
    {
        "name": "`is_pointing_device`",
        "required": false,
        "description": "`true` or `false`",
        "fixed_value": "Yes"
    },
    {
        "name": "`is_game_pad`",
        "required": false,
        "description": "`true` or `false`",
        "available_since": "Karabiner-Elements 14.12.4",
        "fixed_value": "Yes"
    },
    {
        "name": "`is_consumer`",
        "required": false,
        "description": "`true` or `false`",
        "available_since": "Karabiner-Elements 15.3.18",
        "fixed_value": "Yes"
    },
    {
        "name": "`is_touch_bar`",
        "required": false,
        "description": "`true` or `false`",
        "fixed_value": "Yes"
    },
    {
        "name": "`is_built_in_keyboard`",
        "required": false,
        "description": "`true` or `false`",
        "available_since": "Karabiner-Elements 14.8.2",
        "fixed_value": "Yes"
    }
]
```

{{< /parameter-table >}}

- `[1]` The `device_address` will change when you replace the hardware.
- `[2]` The `location_id` will change when you change the USB port which the device is connected.

#### Multiple identifiers

If you specify multiple identifiers (`vendor_id`, `product_id`, `location_id`, ...), these are joined by "and".

The following condition is matched if Vendor ID is 1111 **and** Product ID is 2222 **and** keyboard.

```json
{
    "type": "device_if",
    "identifiers": [
        {
            "vendor_id": 1111,
            "product_id": 2222,
            "is_keyboard": true
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
