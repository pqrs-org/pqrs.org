---
title: 'Installed files'
weight: 100
---

Karabiner-Elements installs files into the following locations.

## System files

```text
/Applications/Karabiner-Elements.app
/Applications/Karabiner-EventViewer.app
/Applications/.Karabiner-VirtualHIDDevice-Manager.app
/Library/Application Support/org.pqrs/Karabiner-Elements
/Library/Application Support/org.pqrs/Karabiner-DriverKit-VirtualHIDDevice
/Library/Application Support/org.pqrs/config
/Library/Application Support/org.pqrs/tmp
/var/log/karabiner
```

{{% alert title="Note" color="primary" %}}

If you are using Karabiner-Elements 14.13.0 or earlier, there are also files located in the following places.

```text
/Library/LaunchDaemons/org.pqrs.karabiner.karabiner_grabber.plist
/Library/LaunchDaemons/org.pqrs.karabiner.karabiner_kextd.plist
/Library/LaunchDaemons/org.pqrs.karabiner.karabiner_observer.plist
/Library/LaunchAgents/org.pqrs.karabiner.agent.karabiner_grabber.plist
/Library/LaunchAgents/org.pqrs.karabiner.agent.karabiner_observer.plist
/Library/LaunchAgents/org.pqrs.karabiner.karabiner_console_user_server.plist
/Library/LaunchAgents/org.pqrs.karabiner.karabiner_session_monitor.plist
```

{{% /alert %}}

## User files

```text
~/.config/karabiner
~/.local/share/karabiner
~/Library/Preferences/org.pqrs.Karabiner-Elements.Settings.plist
~/Library/Preferences/org.pqrs.Karabiner-EventViewer.plist
~/Library/Preferences/org.pqrs.Karabiner-MultitouchExtension.plist
```

{{% alert title="Warning" color="warning" %}}
If you want to remove Karabiner-Elements, you have to use [uninstaller](/docs/manual/operation/uninstall).
{{% /alert %}}
