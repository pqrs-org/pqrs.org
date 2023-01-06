---
title: 'Allow button in Privacy & Security System Settings does not appear'
weight: 50
---

The allow button in Privacy & Security System Settings appear for your approval after you open Karabiner-Elements for the first time.

However, this allow button may not appear in some environments.

{{< local-image src="images/system-extension-allow@2x.png" >}}

## Reason

The exact cause of the issue has not been determined, but it may be caused by the corrupted system cache by a macOS issue.

This issue may be resolved by starting macOS in safe mode to refresh the system cache.

## Steps

1.  Restart your Mac in safe mode by [this instruction](https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac).
2.  Open Karabiner-Elements from Launchpad to ensure that Allow button is shown on System Settings.
3.  Open System Settings and confirm the Allow button is shown.<br/>
    If the Allow button is hidden, close System Settings and open it again.
4.  Click the Allow button.
5.  Restart your Mac and boot in normal mode.

{{% alert title="Note" color="primary" %}}
Karabiner-Elements does not work in safe mode.
You have to restart macOS in normal mode to use Karabiner-Elements.
{{% /alert %}}
