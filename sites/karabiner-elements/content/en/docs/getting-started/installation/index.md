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

{{< local-image src="images/login-items0@2x.png" >}}

The following Login Items in System Settings must be enabled.

-   `Karabiner-Elements Non-Privileged Agents`
-   `Karabiner-Elements Privileged Daemons`

{{< local-image src="images/settings-services@2x.png" >}}

{{% /alert %}}

{{% alert title="Note" color="primary" %}}

If you are using macOS 12 or prior, these items are not shown in System Preferences.
Please proceed to the next step.

{{% /alert %}}

## Grant Input Monitoring to Karabiner-Elements processes

{{% alert color="success" %}}

1.  The Keystroke Receiving alert will be shown.
    {{< local-image src="images/karabiner-grabber@2x.png" >}}
2.  Press the `Open System Settings` button and enable `karabiner_grabber`.
    {{< local-image src="images/settings-input-monitoring@2x.png" >}}

{{% /alert %}}

{{% alert title="Note" color="primary" %}}

If you are using Karabiner-Elements 14.13.0 or earlier, an alert for karabiner_observer will also be displayed, so please grant permission for that as well.

{{% /alert %}}

## Allow system software which provides virtual devices for Karabiner-Elements

{{% alert color="success" %}}

1.  The following alert will be shown.
    {{< local-image src="images/system-extension-blocked@2x.png" >}}
    {{< local-image src="images/settings-driver-extensions@2x.png" >}}
2.  Click `Open System Settings` button, then enable `.Karabiner-VirtualHIDDevice-Manager`.
    {{< local-image src="images/driver-extensions@2x.png" >}}

{{% /alert %}}

{{% alert title="Note" color="primary" %}}

Please follow [this instruction](../../help/troubleshooting/kext-allow-button-does-not-work/) if there is any problem with the **Driver Extensions** button.

{{% /alert %}}

## Configure Karabiner-Elements

Enjoy keyboard configuration!

-   [Configuration manual](../../manual/configuration/)
