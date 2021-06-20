---
title: 'What is the lock indicator on Karabiner-Elements and Karabiner-EventViewer icon'
weight: 300
---

A lock indicator is shown on Karabiner-Elements and Karabiner-EventViewer icon since macOS 11.0 (Big Sur).

These indicators show that these files are protected so that they cannot be deleted from Finder.

{{< local-image src="images/lock@2x.png" >}}

## Why these files are protected

This protection is intended to prevent incomplete uninstallation.

Karabiner-Elements is a system-wide software, and [files are installed in appropriate locations](../installed-files/) besides the Applications folder.

Therefore, if you just put the application icon in Trash like a normal app uninstallation, some files will be left behind.

The file protection forces to use [the built-in uninstaller](/docs/manual/operation/uninstall) and remove installed files properly at the uninstallation.

{{% alert title="Advanced topic" color="danger" %}}
This file locking is achieved with `schg` and `uchg` flags.

You can unlock these files by the following commands in Terminal.

```shell
sudo chflags nouchg,noschg /Applications/Karabiner-Elements.app
sudo chflags nouchg,noschg /Applications/Karabiner-EventViewer.app
```

(Administrator password is required to run the above command.)

{{% /alert %}}
