---
title: 'Show log messages'
weight: 600
---

You can confirm log messages on Log tab.

<div style="color: #8a6d3bff; background-color: #fcf8e3ff; padding: 1em; margin: 0.5em;">
Warnings appear with a yellow background.
</div>

<div style="color: #a94442ff; background-color: #f2dedeff; padding: 1em; margin: 0.5em;">
Errors appear with a red background.
</div>

{{< local-image src="images/log@2x.png" >}}

{{% alert title="Advanced topic" color="danger" %}}
The log files are placed at:

System logs

- /var/log/karabiner/core_service.log
- /var/log/karabiner/virtual_hid_device_service.log

User logs

- ~/.local/share/karabiner/log/console_user_server.log
- /var/log/karabiner/session_monitor.{uid}.log

{{% /alert %}}
