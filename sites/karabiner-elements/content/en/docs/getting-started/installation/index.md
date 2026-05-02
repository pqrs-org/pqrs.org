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

## Grant permissions to Karabiner-Elements in System Settings

When you open Karabiner-Elements Settings, instructions such as allowing Background Services will be displayed.
Follow those instructions and grant the required permissions in System Settings.

Specifically, the following permissions are required:

- Allow privileged and non-privileged background services to run
- Grant Accessibility permission
- Grant Input Monitoring permission
- Allow Driver Extension for the virtual keyboard and mouse

(Normally, Accessibility permission also covers Input Monitoring permission, so it will be granted automatically when you allow Accessibility.)

{{< local-image src="images/setup-services@2x.png" >}}

{{% alert title="Troubleshooting" color="danger" %}}

If the driver extension fails to appear in System Settings or you run into similar issues, check this page:

- [Driver alert keeps showing up](/docs/help/troubleshooting/driver-alert-keeps-showing-up/)

{{% /alert %}}

## Choose your keyboard layout

When setup is complete, you will be asked which virtual keyboard layout to use.
Choose the same type as the keyboard you are using.
(You can change this setting later from the Virtual Keyboard tab.)

{{< local-image src="images/setup-keyboard-type@2x.png" >}}

{{% alert title="Note" color="success" %}}

This setting changes the behavior of some keys (symbol keys) on the keyboard.
If the printed characters on your keyboard do not match what is input, please change this in the Virtual Keyboard settings.

{{% /alert %}}

## Configure Karabiner-Elements

Enjoy keyboard configuration!

- [Configuration manual](../../manual/configuration/)
