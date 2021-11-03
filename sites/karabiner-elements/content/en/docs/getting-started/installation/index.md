---
title: 'Installation'
weight: 100
---

Some operations are required to grant properly permission from macOS to Karabiner-Elements.
Follow this instruction to set up Karabiner-Elements.

## Install Karabiner-Elements

1.  Open the downloaded file.
    <img src="images/dmg-icon@2x.png" alt="dmg" width="64" />
2.  Open a pkg file.
    <img src="images/pkg-icon@2x.png" alt="pkg" width="64" />
3.  The installer will be opened. Install Karabiner-Elements.
    {{< local-image src="images/installer@2x.png" >}}

## Open Karabiner-Elements Preferences

1.  Open Karabiner-Elements from Launchpad.
    {{< local-image src="images/karabiner-elements-icon@2x.png" >}}

## Allow system software which provides virtual devices for Karabiner-Elements

1.  The following alert will be shown when you open Karabiner-Elements Preferences.
2.  Click **Open Security & Privacy System Preferences** button, then press **Allow** button.
    {{< local-image src="images/dext-alert@2x.png" >}}

{{% alert title="Note" color="primary" %}}

Please follow [this instruction](../../help/troubleshooting/kext-allow-button-does-not-work/) if there are any problem about the **Allow** button.

{{% /alert %}}

## Grant Input Monitoring to Karabiner-Elements processes

1.  **Two Keystroke Receiving** alerts will be shown on macOS Catalina or later after you allow the kernel extension.
2.  Press **Open System Preferences** button on both alerts.
    {{< local-image src="images/karabiner-grabber@2x.png" >}}
    {{< local-image src="images/karabiner-observer@2x.png" >}}
3.  System Preferences will be open after you press the Open System Preferences button.<br/>
    Choose **Privacy > Input Monitoring**, and then enable **karabiner_grabber** and **karabiner_observer**. <br />
    (You have to unlock configuration by the left bottom icon.)
    {{< local-image src="images/input-monitoring@2x.png" >}}

## Setup your keyboard layout

1.  Keyboard Setup Assistant will be opened.<br/>
    Choose your keyboard layout. (ANSI, ISO or JIS)
    {{< local-image src="images/keyboard-setup-assistant@2x.png" >}}

## Configure Karabiner-Elements

Enjoy keyboard configuration!

-   [Configuration manual](../../manual/configuration/)
