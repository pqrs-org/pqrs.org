---
title: 'Privacy'
weight: 650
---

## Privacy

Security and privacy protection is one of the most important point of Karabiner-Elements architecture design.<br />
Of course, Karabiner-Elements does not collect any of your input data, your configuration data, nor your usage statistics.

### Data being collected

The only data we are collecting is Karabiner-Elements version information.<br />
We use the data only for checking updates, and we do not share these data with others.

{{% alert title="How we receive the data" color="primary" %}}

The version information will be sent in order to check updates when automatic update is enabled, or when you press the update button manually.

The URLs to send the version information are as follows:

-   <https://appcast.pqrs.org/karabiner-elements-appcast.xml>
-   <https://appcast.pqrs.org/karabiner-elements-appcast-devel.xml>

You can change the automatic update setting in Update tab.

{{< local-image src="images/automatic-update@2x.png" >}}

{{% /alert %}}

{{% alert title="Detail" color="success" %}}

`appcast.pqrs.org` receives the version information like follows:

```text
150.249.243.141 - - [13/Feb/2021:18:37:14 +0900]
"GET /karabiner-elements-appcast.xml HTTP/2.0" 200 2389
"-" "Karabiner-Elements/13.3.0 Sparkle/1.24.0" "-"
```

```text
150.249.243.141 - - [13/Feb/2021:19:26:15 +0900]
"GET /karabiner-elements-appcast-devel.xml HTTP/2.0" 200 740
"-" "Karabiner-Elements/13.3.0 Sparkle/1.24.0" "-"
```

The received data contains:

| Name                       | Example                                  |
| -------------------------- | ---------------------------------------- |
| Access source IP address   | 150.249.243.141                          |
| Access time                | 13/Feb/2021:18:37:14 +0900               |
| Karabiner-Elements version | Karabiner-Elements/13.3.0 Sparkle/1.24.0 |

{{% /alert %}}

## Related documents

-   [Security](../help/advanced-topics/security)
