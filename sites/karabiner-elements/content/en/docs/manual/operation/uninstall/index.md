---
title: 'Uninstall'
weight: 200
---

Karabiner-Elements provides built-in uninstaller.<br />
Use the uninstaller to remove Karabiner-Elements from your system.

You can launch the uninstaller from "Launch uninstaller" button on Uninstall tab.
{{< local-image src="images/uninstall-button@2x.png" >}}

Then, follow the instruction of the dialog. (The uninstaller ask your administrator password in order to remove files.)

{{< local-image src="images/uninstaller@2x.png" >}}

{{% alert title="Uninstall from command line" color="warning" %}}
If you don't want to use above GUI, you can also uninstall Karabiner-Elements from command line.

```shell
bash '/Library/Application Support/org.pqrs/Karabiner-DriverKit-VirtualHIDDevice/scripts/uninstall/deactivate_driver.sh'
sudo '/Library/Application Support/org.pqrs/Karabiner-Elements/uninstall.sh'
```

(Administrator password is required to run the above command.)

{{% /alert %}}

## Additional uninstallation

Some settings and files will remain after uninstallation.
It does not affect the system even if it remains in place, but if you are concerned about them, please delete them manually.

1.  Input Monitoring settings
    -   Remove karabiner_grabber and karabiner_observer from the Input Monitoring settings in macOS Settings.
        {{< local-image src="images/input-monitoring1@2x.png" >}}
        {{< local-image src="images/input-monitoring2@2x.png" >}}
2.  Log files
    -   Delete the following directories:
        -   `/var/log/karabiner`
        -   `~/.local/share/karabiner`
3.  Temporary directories
    -   Delete the following directories:
        -   `/Library/Application Support/org.pqrs/tmp`
4.  Setting files
    -   Delete the following directories:
        -   `~/.config/karabiner`

---

{{% alert title="Advanced topic" color="success" %}}

`Operation not permitted` error will occur if you try removing files by `rm` command.

```shell
sudo rm -rf /Applications/Karabiner-Elements.app
rm: /Applications/Karabiner-Elements.app/Contents: Operation not permitted
rm: /Applications/Karabiner-Elements.app: Operation not permitted
```

Karabiner-Elements forces you to use uninstaller to remove files in order to ensure remove files outside /Applications.

See [Installed files](/docs/help/advanced-topics/installed-files/) to confirm the files.

{{% /alert %}}

{{% alert title="Manual uninstallation" color="danger" %}}

If you want to remove files without uninstaller, unlock app files from command line with [this instruction](/docs/help/advanced-topics/lock-icon/#why-these-files-are-protected).

And then, remove [installed files](/docs/help/advanced-topics/installed-files/) by hand, and reboot your Mac.

{{% /alert %}}
