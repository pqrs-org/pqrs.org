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

1.  Log files
    - Delete the following directories:
        - `/var/log/karabiner`
        - `~/.local/share/karabiner`
2.  Temporary directories
    - Delete the following directories:
        - `/Library/Application Support/org.pqrs/tmp`
3.  Setting files
    - Delete the following directories:
        - `~/.config/karabiner`
