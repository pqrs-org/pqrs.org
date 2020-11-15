---
title: 'Allow button in Security & Privacy System Preferences does not work'
weight: 100
aliases:
    - /docs/help/troubleshooting/kext-allow-button-does-not-work/
---

The allow button in Security & Privacy System Preferences should be hidden after you click it.<br/>
If the button does not hide after click, you did not succeed to click it.

{{< local-image src="images/allow@2x.png" >}}

## Reason

The exact cause of the issue has not been determined, but it may be caused by the corrupted system cache by a macOS issue.

This issue may be resolved by starting macOS in safe mode to refresh the system cache.

## Steps

1.  Restart your Mac in safe mode by [this instruction](https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac).
2.  Open Karabiner-Elements from Launchpad to ensure that Allow button is shown on System Preferences.
3.  Open System Preferences and confirm the Allow button is shown.<br/>
    If the Allow button is hidden, close System Preferences and open it again.
4.  Click the Allow button.
5.  Restart your Mac and boot in normal mode.

{{% alert title="Note" color="primary" %}}
Karabiner-Elements does not work in safe mode.
You have to restart macOS in normal mode to use Karabiner-Elements.
{{% /alert %}}
