---
title: 'Driver alert keeps showing up'
weight: 10
---

The following driver alerts will appear on first start-up and the alerts will disappear after you allow the system software from System Preferences.

Unfortunately, the allow button may not appear in System Preferences due to a problem with macOS driver loading.<br />
In this case, you can display the allow button by deactivating and activating driver as described in the Advanced section.

{{% alert title="macOS Catalina Note" color="danger" %}}

There is an additional problem on the macOS side if you are using macOS Catalina.<br/>
The above steps may not resolve the issue and the alert may keep showing up.

If you are facing the problem, restart macOS between deactivating and activating to refresh the macOS internal state.

1.  Press `Deactivate driver` button.
2.  Enter the administrator password.
3.  **Restart macOS.**
4.  Press `Activate driver` button.
5.  Open Security & Privacy System Preferences and press the allow button.

{{% /alert %}}

{{< local-image src="images/dext-alert@2x.png" >}}
