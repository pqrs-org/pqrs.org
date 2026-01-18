---
title: 'Extra Features: Automatic Volume unmounting'
weight: 500
---

TrueWidget provides a feature to automatically unmount volumes when it launches for Macs used for verification/testing that have multiple macOS versions installed.

{{% alert title="Notes" color="primary" %}}

Automatic unmounting is performed only once per volume after macOS starts, so if you manually remount a volume after it was automatically unmounted, it remains mounted.

{{% /alert %}}

{{< local-image src="images/automatic-volume-unmounting@2x.png" >}}

{{% alert title="TrueWidget Privileged Helper" color="primary" %}}

To use this feature, you need to enable the TrueWidget Privileged Helper in System Settings.

{{< local-image src="images/system-settings-daemon@2x.png" >}}

{{% /alert %}}
