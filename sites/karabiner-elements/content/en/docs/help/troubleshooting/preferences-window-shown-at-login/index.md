---
title: 'Settings window is shown at login'
weight: 800
---

If you manually registered Karabiner-Elements to `Open at Login`, the settings window will always appear at startup.

Karabiner-Elements will start automatically via launchd even if it is not in `Open at Login`, so remove it from your `Open at Login`.

1.  Open System Settings.
2.  Open General > Login Items.
3.  Remove Karabiner-Elements from `Open at Login`.

{{% alert title="Caution" color="danger" %}}

Do not disable Karabiner-Elements.app in `Allow in the Background`.
It's a required setting for Karabiner-Elements to work.

{{% /alert %}}

{{< local-image src="images/open-at-login@2x.png" >}}
