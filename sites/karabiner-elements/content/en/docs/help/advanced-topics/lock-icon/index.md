---
title: 'What is the lock indicator on Karabiner-Elements and Karabiner-EventViewer icon'
weight: 300
---

{{% alert title="Info" color="primary" %}}

This content is for older versions of Karabiner Elements.

{{% /alert %}}

Prior to Karabiner-Elements 14.10.0, a lock indicator is shown on Karabiner-Elements and Karabiner-EventViewer icon.

These indicators show that these files are protected so that they cannot be deleted from Finder.

{{< local-image src="images/lock@2x.png" >}}

## Why these files are protected

This protection is intended to prevent incomplete uninstallation.

Karabiner-Elements is a system-wide software, and [files are installed in appropriate locations](../installed-files/) besides the Applications folder.

Therefore, if you just put the application icon in Trash like a normal app uninstallation, some files will be left behind.

The file protection forces to use [the built-in uninstaller](/docs/manual/operation/uninstall) and remove installed files properly at the uninstallation.

{{% alert title="Advanced topic" color="danger" %}}
This file locking is achieved with `schg` and `uchg` flags.

You can unlock these files by running the following commands in Terminal.
(Administrator password is required to run the commands.)

```shell
sudo chflags nouchg,noschg /Applications/Karabiner-Elements.app
sudo chflags nouchg,noschg /Applications/Karabiner-EventViewer.app
```

If you got the "Operation not permitted" error, grant App Management rights to Terminal.

{{< local-image src="images/app-management1@2x.png" >}}
{{< local-image src="images/app-management2@2x.png" >}}

{{% /alert %}}
