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

-   The macOS cache is corrupted.
-   Third-party security software is blocking the system extension.

You may be able to repair the macOS cache by [booting once in safe mode](https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac).

{{% alert title="Note" color="primary" %}}
Karabiner-Elements does not work in safe mode.
You have to restart macOS in normal mode to use Karabiner-Elements.
{{% /alert %}}
