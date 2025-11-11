---
title: 'The location of the configuration file'
weight: 600
---

Karabiner-Elements stores the user configuration as a json file located at **~/.config/karabiner/karabiner.json**

However, there may be cases where you want to place the configuration file elsewhere, such as to automatically sync across multiple machines or to manage it under version control.

In such cases, You can move the `karabiner.json` configuration file to a different directory by using a symbolic link.

{{% alert title="Warning" color="warning" %}}

Ensure you create a symbolic link to the **~/.config/karabiner** directory, not directly to the `karabiner.json` file.

Karabiner-Elements will fail to detect configuration file changes and reload the configuration if `karabiner.json` is a symbolic link.

{{% /alert %}}

## Making symbolic link example

The following command allows you to move the `karabiner.json` file to **~/Library/Application Support/org.pqrs**. The same process is applies for any other directory.

```shell
mkdir -p "$HOME/Library/Application Support/org.pqrs/config"
mv ~/.config/karabiner "$HOME/Library/Application Support/org.pqrs/config"
ln -s "$HOME/Library/Application Support/org.pqrs/config/karabiner" ~/.config
```

After changing the actual location of `karabiner.json`, you need to restart `karabiner_console_user_server` using the following command.
Otherwise, it will not be able to automatically detect updates to `karabiner.json`.

```shell
launchctl kickstart -k gui/$(id -u)/org.pqrs.service.agent.karabiner_console_user_server
```

{{% alert title="Tip" color="primary" %}}

[Setting the XDG_CONFIG_HOME environment variable](/docs/help/advanced-topics/set-environment-variables/) is another way to change the location of the configuration file.

{{% /alert %}}

{{% alert title="Additional file access permissions" color="success" %}}

Normally, no additional configuration is needed even if you change the location of karabiner.json.

However, if you move the karabiner.json file to a location that requires special permissions, such as the `Desktop` or `Downloads` folder, you will need to grant access permissions to the following processes.

-   `Karabiner-Core-Service`
-   `karabiner_console_user_server`

The most reliable way is to grant Full Disk Access to these processes.

To grant Full Disk Access to the these process,
nagivate to `System Settings > Privacy & Security > Full Disk Access`
and make sure the toggle next to `Karabiner-Core-Service` and `karabiner_console_user_server` are set to the ON position.

If these entries are not listed, you can press the `+` button, navigate to the following locations, and add them from there.

-   `Macintosh HD > Library > Application Support > org.pqrs > Karabiner-Elements`
-   `Macintosh HD > Library > Application Support > org.pqrs > Karabiner-Elements > bin`

After turning them on, please restart macOS once to restart these processes.

{{% /alert %}}
