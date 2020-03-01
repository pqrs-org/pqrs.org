---
title: 'How to disable caps lock delay'
weight: 200
---

Enable **Disable caps_lock delay** setting from Complex Modification.

1.  Import [Change caps_lock key](https://ke-complex-modifications.pqrs.org/#caps_lock) setting.
2.  Enable **Disable caps_lock delay**.
    {{< local-image src="images/karabiner-elements-disable-caps-lock-delay@2x.png" >}}

{{% alert title="Note" color="primary" %}}
Actually, this setting does not disable the caps lock delay of macOS.

This setting puts a wait between caps lock key down and key up event
in order to ensure macOS recognize the caps lock event.
{{% /alert %}}
