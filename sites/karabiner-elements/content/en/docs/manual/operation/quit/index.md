---
title: 'Quit'
weight: 100
---

Karabiner-Elements keeps running in the background even if you close the settings window.<br />
To quit Karabiner-Elements, choose "Quit Karabiner-Elements" from menu bar.

{{< local-image src="images/karabiner-elements-menu-quit@2x.png" >}}

{{% alert title="Note" color="primary" %}}

If you've hidden the menu bar icon, you can also quit Karabiner-Elements from Settings.

{{< local-image src="images/karabiner-elements-quit@2x.png" >}}

{{% /alert %}}

{{% alert title="Advanced topic" color="danger" %}}

If you want to terminate Karabiner-Elements from the command line, execute the following commands:

```shell
'/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements Non-Privileged Agents.app/Contents/MacOS/Karabiner-Elements Non-Privileged Agents' unregister-core-agents
'/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements Non-Privileged Agents.app/Contents/MacOS/Karabiner-Elements Non-Privileged Agents' unregister-menu-agent
'/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements Non-Privileged Agents.app/Contents/MacOS/Karabiner-Elements Non-Privileged Agents' unregister-multitouch-extension-agent
'/Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements Non-Privileged Agents.app/Contents/MacOS/Karabiner-Elements Non-Privileged Agents' unregister-notification-window-agent
```

{{% /alert %}}
