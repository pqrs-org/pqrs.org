---
title: 'Installation'
weight: 100
---

Some operations are required to grant proper permission from macOS to Karabiner-Elements.
Follow these instructions to set up Karabiner-Elements.

## Install Karabiner-Elements

1.  Open the downloaded file.
    <img src="images/dmg-icon@2x.png" alt="dmg" width="64" />
2.  Open the Karabiner-Elements.pkg.
    <img src="images/pkg-icon@2x.png" alt="pkg" width="64" />
3.  The installer will be opened. Install Karabiner-Elements.
    {{< local-image src="images/installer@2x.png" >}}

After installation, you'll need to grant the necessary permissions for Karabiner-Elements to function.
This is part of macOS's protection mechanism to prevent applications from accessing information without user consent.
There are a few required steps, so please follow the instructions.

Additionally, when you open Karabiner-Elements Settings, the necessary actions will be displayed, so you can follow those prompts as well.

## Open Karabiner-Elements Settings

Open Karabiner-Elements from Apps or Finder.

{{< local-image src="images/spotlight@2x.png" >}}

## Setup your keyboard layout

{{% alert color="success" %}}

Choose your keyboard layout. (ANSI, ISO or JIS).

This setting changes the behavior of some keys (symbol keys) on the keyboard.
If the printed characters on your keyboard do not match what is input, please change this later in the Virtual Keyboard settings.

{{< local-image src="images/settings-keyboard-type@2x.png" >}}

{{% /alert %}}

## Keep Login Items enabled

{{% alert color="success" %}}

The background item notifications will be shown after the installation.

{{< local-image src="images/login-items@2x.png" >}}

The following Login Items in System Settings must be enabled.

-   `Karabiner-Elements Non-Privileged Agents v2`
-   `Karabiner-Elements Privileged Daemons v2`

{{< local-image src="images/settings-services@2x.png" >}}

{{% /alert %}}

## Grant Input Monitoring to Karabiner-Elements processes

{{% alert color="success" %}}

1.  The Keystroke Receiving alert will be shown.
    {{< local-image src="images/input-monitoring-dialog@2x.png" >}}
2.  Press the `Open System Settings` button and enable `Karabiner-Core-Service`.
    {{< local-image src="images/settings-input-monitoring@2x.png" >}}

{{% /alert %}}

## Allow system software which provides virtual devices for Karabiner-Elements

{{% alert color="success" %}}

1.  Click the "Open System Settings" button in the dialog below, or open "Login Items & Extensions" from System Settings.
    {{< local-image src="images/system-extension-blocked@2x.png" >}}
2.  Then enable `.Karabiner-VirtualHIDDevice-Manager`.
    {{< local-image src="images/settings-driver-extensions@2x.png" >}}
    {{< local-image src="images/driver-extensions@2x.png" >}}

{{% /alert %}}

{{% alert title="Note" color="primary" %}}

If the driver extension fails to appear in System Settings or you run into similar issues, check this page:

-   [Driver alert keeps showing up](/docs/help/troubleshooting/driver-alert-keeps-showing-up/)

{{% /alert %}}

## Configure Karabiner-Elements

Enjoy keyboard configuration!

-   [Configuration manual](../../manual/configuration/)
