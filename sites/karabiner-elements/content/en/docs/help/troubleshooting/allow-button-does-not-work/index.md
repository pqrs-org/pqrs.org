---
title: 'Allow button in Privacy & Security System Settings does not work'
weight: 100
aliases:
    - /docs/help/troubleshooting/kext-allow-button-does-not-work/
---

{{% alert title="Info" color="primary" %}}

This content is for older versions of Karabiner Elements.

{{% /alert %}}

The allow button in Privacy & Security System Settings appear for your approval after you open Karabiner-Elements for the first time.

However, the following symptoms have been reported:

-   The allow button may not appear in some environments.
-   The button is supposed to disappear after you click it, but nothing happens when you press it and it doesn't work.

{{< local-image src="images/system-extension-allow@2x.png" >}}

## Possible causes of this issue

-   Third-party security software is blocking the system extension.
-   The macOS cache is corrupted.

You may be able to repair the macOS cache by [booting once in safe mode](https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac).

{{% alert title="Note" color="primary" %}}
Karabiner-Elements does not work in safe mode.
You have to restart macOS in normal mode to use Karabiner-Elements.
{{% /alert %}}

## macOS Catalina Notes

Karabiner-Elements requires macOS 10.15.6 or later, because macOS 10.15.5 or earlier has an issue around DriverKit.

Please use [Karabiner-Elements 12.10.0](/docs/releasenotes/#karabiner-elements-12100) if you are using macOS 10.15.5 or earlier.

{{% alert title="macOS Catalina Note #1" color="primary" %}}

Even worse, there is an additional problem on the macOS side if you are using macOS Catalina.<br/>
The above steps might not resolve the issue and the alert may keep showing up.

If you are facing the problem, restart macOS between deactivating and activating to refresh the macOS internal state.

1.  Press `Deactivate driver` button.
2.  Enter the administrator password.
3.  **Restart macOS.**
4.  Press `Activate driver` button.
5.  Open Security & Privacy System Preferences and press the allow button.

{{% /alert %}}

{{% alert title="macOS Catalina Note #2" color="danger" %}}

The problem is caused by macOS Catalina issues around DriverKit driver.

Karabiner-Elements v12.10.0 uses a legacy kernel extension, so it is not affected by the macOS issues.
So, downgrading to [Karabiner-Elements 12.10.0](/docs/releasenotes/#karabiner-elements-12100) also solves the issue.

{{% /alert %}}
