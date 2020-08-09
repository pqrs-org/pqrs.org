---
title: 'Uninstall'
weight: 200
---

Karabiner-Elements provides built-in uninstaller.<br />
Use the uninstaller to remove Karabiner-Elements from your system.

You can launch the uninstaller from "Uninstall Karabiner-Elements" button on Misc tab.
{{< local-image src="images/karabiner-elements-uninstall@2x.png" >}}

{{% alert title="Uninstall from command line" color="warning" %}}
If you don't want to use above GUI, you can also uninstall Karabiner-Elements from command line.

```shell
sudo '/Library/Application Support/org.pqrs/Karabiner-Elements/uninstall_core.sh'
```

(Administrator password is required to run the above command.)

{{% /alert %}}

{{% alert title="Advanced topic" color="success" %}}

`Operation not permitted` error will occur if you try removing files by `rm` command.

```shell
sudo rm -rf /Applications/Karabiner-Elements.app
rm: /Applications/Karabiner-Elements.app/Contents: Operation not permitted
rm: /Applications/Karabiner-Elements.app: Operation not permitted
```

Karabiner-Elements forces using uninstaller to remove files in order to ensure remove files outside /Applications.

See [Installed files](/docs/help/advanced-topics/installed-files/) to confirm the files.

{{% /alert %}}
