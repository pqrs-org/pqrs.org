---
title: 'Required macOS settings'
weight: 5
---

Under normal circumstances, there is no need to read this page, as the necessary settings have already been made during the initial setup.

However, we explain the macOS settings made during the initial setup of Karabiner-Elements for the following purposes:

- If you want to check the macOS settings made during the initial setup.
- If Karabiner-Elements is not working properly and you want to ensure that the macOS settings are correct.

---

## Enable background services

{{% alert color="primary" %}}

Karabier-Elements has processes running constantly in the background, that handle input events.
You have to keep the background items enabled in `macOS System Settings > General > Login Items`.

{{< local-image src="images/settings-services@2x.png" >}}

{{% /alert %}}

---

## Enable Accessibility

{{% alert color="primary" %}}

Karabiner-Elements requires Accessibility permission for the following purpose:

- To accurately and efficiently detect the currently active application and the focused UI element, so that input event modification rules can be switched based on the focused app.
- To capture keyboard events via CGEventTap when "Enable CGEventTap fallback" is enabled.
- As a secondary effect, granting Accessibility permission also provides the permission needed to capture input events from physical devices.

You can enable it in `macOS System Settings > Privacy & Security > Accessibility`.

{{< local-image src="images/settings-accessibility@2x.png" >}}

{{% /alert %}}

---

## Allow system extension

{{% alert color="primary" %}}

You can approve the system extension in `macOS System Settings > Login Items & Extensions > Driver Extensions`.

{{< local-image src="images/settings-driver-extensions@2x.png" >}}

Karabiner-Elements uses the system extension to provide a virtual keyboard and mouse.
You have to approve system extension before using it.
You can confirm whether the system extension already allowed in [EventViewer](/docs/manual/operation/eventviewer/).

If `org.pqrs.Karabiner-DriverKit-VirtualHIDDevice` appears in the System Extensions of the EventViewer and the status is `[activated enabled]`, the system extension is already allowed.

{{< local-image src="images/system-extensions@2x.png" >}}

Otherwise, you have to approve the system extension in macOS System Settings.

{{% /alert %}}

---

## Enable Input Monitoring (when using Karabiner-Elements 15.9.0 or earlier)

{{% alert color="obsoleted" %}}

**This setting is usually unnecessary in Karabiner-Elements 16.0.0 and later, because it is covered by the Accessibility setting.**

Karabiner-Elements requires Input Monitoring permission to receive and modify input events.

You can enable it in `macOS System Settings > Privacy & Security > Input Monitoring`.

{{< local-image src="images/settings-input-monitoring@2x.png" >}}

{{% /alert %}}
