---
title: 'The location of the configuration file'
weight: 600
---

Karabiner-Elements stores configuration to a json file which is located **~/.config/karabiner/karabiner.json**

### About symbolic link

If you want to move karabiner.json to another place and make symbolic link, make a symbolic link to **~/.config/karabiner** directory instead of karabiner.json.

{{% alert title="Warning" color="warning" %}}

Do not make a symlink to karabiner.json directly.

Karabiner-Elements will fail to detect the configuration file update and fail to reload the configuration if karabiner.json is a symbolic link.

{{% /alert %}}

#### Making symbolic link example

The following command allows you to put karabiner.json on ~/Dropbox/private.

```shell
mv ~/.config/karabiner ~/Dropbox/private
ln -s ~/Dropbox/private/karabiner ~/.config
```

{{% alert title="Note" color="primary" %}}

You have to restart karabiner_console_user_server process by the
following command after you made a symlink in ordre to tell
Karabiner-Elements that the parent directory is changed.

```shell
launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server
```

{{% /alert %}}
