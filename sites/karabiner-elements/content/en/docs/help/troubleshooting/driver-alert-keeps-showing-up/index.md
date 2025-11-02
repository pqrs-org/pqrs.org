---
title: 'Driver alert keeps showing up'
weight: 10
---

Karabiner-Elements provides a driver extension so it can offer a virtual keyboard and mouse.
During setup you need to enable this driver extension.

Normally it's enough to turn on the toggle in System Settings.
However, some people report that the extension never appears in System Settings.

This usually happens because third-party security software blocks the driver extension from loading.
If that's the case, add the driver to the whitelist in your security software so the driver extension can load.

You must allow the following driver extension:

| Team ID    | Bundle ID                                     | Name                                          |
| ---------- | --------------------------------------------- | --------------------------------------------- |
| G43BCU2T37 | org.pqrs.Karabiner-DriverKit-VirtualHIDDevice | org.pqrs.Karabiner-DriverKit-VirtualHIDDevice |

{{< local-image src="images/driver-alert@2x.png" >}}
