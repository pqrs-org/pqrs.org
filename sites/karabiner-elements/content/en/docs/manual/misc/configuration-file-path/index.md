---
title: 'The location of the configuration file'
weight: 600
---

Karabiner-Elements stores the user configuration as a json file located at **~/.config/karabiner/karabiner.json**

### About symbolic link

You can move the `karabiner.json` configuration file to a different directory. However, ensure you create a symbolic link to the **~/.config/karabiner** directory, not directly to the `karabiner.json` file.

{{% alert title="Warning" color="warning" %}}

Do not make a symlink to karabiner.json directly.

Karabiner-Elements will fail to detect configuration file changes and reload the configuration if `karabiner.json` is a symbolic link.

{{% /alert %}}

#### Making symbolic link example

The following command allows you to move the `karabiner.json` file to **~/Dropbox/private**. The same process is applies for any other directory.

```shell
mv ~/.config/karabiner ~/Dropbox/private
ln -s ~/Dropbox/private/karabiner ~/.config
```

{{% alert title="Note" color="primary" %}}

After creating the symlink, Karabiner may ask for permission to access the new location of the configuration file.
Grant this permission. Furthermore, you will have to grant Full Disk Access to the **karabiner_grabber**
process, then restart the **karabiner_console_user_server**
process to ensure Karabiner is able to use the configuration file.

To grant Full Disk Access to the **karabiner_grabber** process,
nagivate to `System Settings -> Privacy & Security -> Full Disk Access`
and make sure the toggle next to **karabiner_grabber** is set to the ON position.

Then to restart the **karabiner_console_user_server** process use the following command.

```shell
launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server
```

{{% /alert %}}
