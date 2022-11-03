---
title: 'Required macOS settings'
weight: 5
---

Under normal circumstances, there is no need to read this page, as the necessary settings have already been made during the initial setup.

However, we describe the macOS settings that are made during the initial setup of Karabiner-Elements for the following cases.

-   If you canceled during the initial setup and want to continue in the middle of the process
-   If you want to check the macOS settings made during the initial setup
-   If Karabiner-Elements is not working properly and you want to make sure that macOS is configured properly

---

## Keep background items enabled

{{% alert title="Note" color="danger" %}}

This setting exists only on macOS Venture or later

{{% /alert %}}

{{% alert color="success" %}}

Karabier-Elements has processes running constantly in the background, that handle input events.
You have to keep the background items enabled in `macOS System Settings > General > Login Items`.

{{< local-image src="images/login-items0.png" >}}
{{< local-image src="images/login-items1.png" >}}
{{< local-image src="images/login-items2.png" >}}

{{% /alert %}}

---

## Enable Input Monitoring

{{% alert color="primary" %}}

Karabiner-Elements requires Input Monitoring permission to receive and modify input events.

You can enable it in `macOS System Settings > Privacy & Security > Input Monitoring`.

{{< local-image src="images/input-monitoring2.png" >}}
{{< local-image src="images/input-monitoring3.png" >}}

{{% /alert %}}

{{% alert title="Troubleshooting" color="danger" %}}

If you cannot find `karabiner_grabber` or `karabiner_observer` in the list, this is because you have not closed the following "Keystroke Receiving" dialogs.

`karabiner_grabber` and `karabiner_observer` will be shown in the list after the dialogs are closed.

{{< local-image src="images/input-monitoring0.png" >}}
{{< local-image src="images/input-monitoring1.png" >}}

{{% /alert %}}

---

## Allow system extension

{{% alert color="success" %}}

Karabiner-Elements uses the system extension to provide a virtual keyboard and mouse.
You have to approve system extension before using it.
You can confirm whether the system extension already allowed in [EventViewer](/docs/manual/operation/eventviewer/).

If `org.pqrs.Karabiner-DriverKit-VirtualHIDDevice` appears in the System Extensions of the EventViewer and the status is `[activated enabled]`, the system extension is already allowed.

{{< local-image src="images/system-extension0.png" >}}

Otherwise, you have to approve the system extension in macOS System Settings.

### Approve system extension

You can approve the system extension in `macOS System Settings > Privacy & Security`.

{{< local-image src="images/system-extension2.png" >}}

{{% /alert %}}
