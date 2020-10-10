---
title: 'Driver alert keeps showing up'
weight: 10
---

Usually, the following driver alert will appear on first start-up and the alert will disappear after you allow the system software from System Preferences.

Unfortunately, the allow button may sometimes not appear in System Preferences due to a problem with macOS driver loading.<br />
In this case, you can display the allow button by deactivating and activating driver as described in the Advanced section on the alert.

<div style="max-width: 600px">
{{< local-image src="images/dext-alert@2x.png" >}}
</div>

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
