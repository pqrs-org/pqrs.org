---
title: 'About "Device is ignored temporarily" alert'
weight: 100
---

{{% alert title="Note" color="primary" %}}

This limitation was removed in v15.8.0. The content written here applies to older versions.

{{% /alert %}}

"Device is ignored temporarily" alert will be shown in any of the following cases:

- If you hold keys or buttons down before Karabiner-Elements open the device.
- Your device sends unintented key up events regardless you do not touch the keys.<br />
  (e.g., Swiftpoint ProPoint sends key up events of the music play key periodically.)

Press the described key or button again to dismiss the alert.

{{< local-image src="images/notification-window@2x.png" >}}
