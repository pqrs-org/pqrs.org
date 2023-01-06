---
title: 'Installation'
weight: 100
---

Some operations are required to grant proper permission from macOS to Karabiner-Elements.
Follow these instructions to set up Karabiner-Elements.

## Install Karabiner-Elements

1.  Open the downloaded file.
    <img src="images/dmg-icon@2x.png" alt="dmg" width="64" />
2.  Open the .pkg file.
    <img src="images/pkg-icon@2x.png" alt="pkg" width="64" />
3.  The installer will be opened. Install Karabiner-Elements.
    {{< local-image src="images/installer@2x.png" >}}

## Keep Login Items enabled

Since macOS 13 Ventura, background item notifications will be shown after the installation.

{{< local-image src="images/login-items0@2x.png" >}}

The following Login Items in System Settings are required, and have to keep enabled.

-   `Karabiner-DriverKit-VirtualHIDDeviceClient.app`
-   `Karabiner-Elements.app`

{{< local-image src="images/login-items1@2x.png" >}}

{{% alert title="Note" color="primary" %}}

If you are using macOS 12 or prior, these items are not shown in System Preferences.
Please proceed to the next step.

{{% /alert %}}

## Open Karabiner-Elements Settings

1.  Open Karabiner-Elements from Launchpad.
    {{< local-image src="images/karabiner-elements-icon@2x.png" >}}

## Allow system software which provides virtual devices for Karabiner-Elements

1.  The following alert will be shown when you open Karabiner-Elements Settings.
2.  Click **Open System Settings** button, then press the **Allow** button.
    {{< local-image src="images/system-extension-blocked@2x.png" >}}
    {{< local-image src="images/system-extension-allow@2x.png" >}}

{{% alert title="Note" color="primary" %}}

Please follow [this instruction](../../help/troubleshooting/kext-allow-button-does-not-work/) if there is any problem with the **Allow** button.

{{% /alert %}}

## Grant Input Monitoring to Karabiner-Elements processes

1.  **Two Keystroke Receiving** alerts will be shown on macOS Catalina or later after you allow the system software.
2.  Press the **Open System Settings** button on both alerts.
    {{< local-image src="images/karabiner-grabber@2x.png" >}}
    {{< local-image src="images/karabiner-observer@2x.png" >}}
3.  System Settings will be opened after you press the **Open System Settings** button.<br/>
    Choose **Privacy & Security > Input Monitoring**, and then enable **karabiner_grabber** and **karabiner_observer**. <br />
    {{< local-image src="images/input-monitoring@2x.png" >}}

## Setup your keyboard layout

1.  Keyboard Setup Assistant will be opened.<br/>
    Choose your keyboard layout. (ANSI, ISO or JIS)
    {{< local-image src="images/keyboard-setup-assistant@2x.png" >}}

## Configure Karabiner-Elements

Enjoy keyboard configuration!

-   [Configuration manual](../../manual/configuration/)
