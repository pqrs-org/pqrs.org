---
title: 'The location of the configuration file'
weight: 600
---

Karabiner-Elements stores the user configuration in a JSON file located at **~/.config/karabiner/karabiner.json**.

However, you may want to place the configuration file elsewhere,
for example, to sync it automatically across multiple machines or to manage it under version control.

In such cases, you can move the `karabiner.json` configuration file to a different directory by using a symbolic link.

{{% alert title="Important" color="primary" %}}

Ensure you create a symbolic link to the **~/.config/karabiner** directory, not directly to the `karabiner.json` file.

Karabiner-Elements will fail to detect configuration file changes and reload the configuration if `karabiner.json` is a symbolic link.

{{% /alert %}}

## Symbolic link example

The following commands move the `karabiner.json` file to **~/Library/Application Support/org.pqrs**. The same process applies to any other directory.

```shell
mkdir -p "$HOME/Library/Application Support/org.pqrs/config"
mv ~/.config/karabiner "$HOME/Library/Application Support/org.pqrs/config"
ln -s "$HOME/Library/Application Support/org.pqrs/config/karabiner" ~/.config
```

After changing the actual location of `karabiner.json`, you need to restart `karabiner_console_user_server` by using the following command.
Otherwise, Karabiner-Elements will not be able to automatically detect updates to `karabiner.json`.

```shell
launchctl kickstart -k gui/$(id -u)/org.pqrs.service.agent.karabiner_console_user_server
```

{{% alert title="Tip" color="primary" %}}

[Setting the XDG_CONFIG_HOME environment variable](/docs/help/advanced-topics/set-environment-variables/) is another way to change the location of the configuration file.

{{% /alert %}}

{{% alert title="Additional file access permissions when changing the location of karabiner.json" color="success" %}}

Normally, no additional configuration is needed even if you change the location of `karabiner.json`.

However, if you move the `karabiner.json` file to a location that requires special permissions,
such as the `Desktop`, `Documents`, `Downloads`, or some locations under `Library`, you will need to grant access permissions to the following applications.

- `/Applications/Karabiner-Elements.app`
- `/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_console_user_server`
- `/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Core-Service.app`
- `/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Menu.app`

The most reliable approach is to grant Full Disk Access to these processes.

To grant Full Disk Access to these processes,
navigate to `System Settings > Privacy & Security > Full Disk Access` and add these apps by using the `+` button.

After turning them on, restart macOS once to restart these processes.

{{% /alert %}}
