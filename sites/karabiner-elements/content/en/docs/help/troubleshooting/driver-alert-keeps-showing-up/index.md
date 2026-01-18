---
title: 'Driver alert keeps showing up'
weight: 10
---

Karabiner-Elements provides a driver extension so it can offer a virtual keyboard and mouse.
During setup you need to enable this driver extension.

Normally it's enough to turn on the toggle in System Settings.
However, some people report that the extension never appears in System Settings.

In this case, Karabiner-Elements displays the following alert.

- `Please grant permission for a Driver Extension`
- `Waiting for a connection to the IOKit service`

{{< local-image src="images/driver-alert@2x.png" >}}

## Team ID and Bundle ID

This usually happens because third-party security software blocks the driver extension from loading.
If that's the case, add the driver to the whitelist in your security software so the driver extension can load.

You must allow the following driver extension:

| Team ID    | Bundle ID                                     | Name                                          |
| ---------- | --------------------------------------------- | --------------------------------------------- |
| G43BCU2T37 | org.pqrs.Karabiner-DriverKit-VirtualHIDDevice | org.pqrs.Karabiner-DriverKit-VirtualHIDDevice |

## macOS log messages

You can also check the driver extension loading status and log messages from System Extensions in Settings.
The log messages are useful for investigating the cause.

{{< local-image src="images/log@2x.png" >}}
