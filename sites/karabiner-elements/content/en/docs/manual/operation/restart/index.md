---
title: 'Restart'
weight: 110
---

You can restart Karabiner-Elements from the menu bar or Settings.

{{< local-image src="images/restart-menu@2x.png" >}}

{{< local-image src="images/restart@2x.png" >}}

{{% alert title="Advanced topic" color="danger" %}}

If you want to restart Karabiner-Elements from the command line, execute the following command:

```shell
launchctl kickstart -k gui/$(id -u)/org.pqrs.service.agent.karabiner_console_user_server
```

{{% /alert %}}
