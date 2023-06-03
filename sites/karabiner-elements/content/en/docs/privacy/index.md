---
title: 'Privacy'
weight: 650
---

## Privacy

Security and privacy protection is one of the most important point of Karabiner-Elements architecture design.<br />
Of course, Karabiner-Elements does not collect any of your input data, your configuration data, nor your usage statistics.

{{% alert title="Data not collected" color="primary" %}}

Karabiner-Elements does not transmit your data externally. The following data is never transmitted outside your Mac:

-   Your keystrokes
-   Your configuration data
-   Your usage statistics
-   And any data except Karabiner-Elements version information.

{{% /alert %}}

{{% alert title="About Input Monitoring" color="primary" %}}

Karabiner-Elements exclusively receives input events from your keyboard, and then modifies them.
So, Karabiner-Elements requires your Input Monitoring permissions approval.

Keystrokes obtained with these permissions are processed entirely on your Mac.
And because the process is protected by administrative privileges, keystrokes cannot be intercepted at by other applications on your Mac.

{{< local-image src="images/input-monitoring@2x.png" >}}

{{% /alert %}}

{{% alert title="Data being collected" color="secondary" %}}

The only data we are collecting is Karabiner-Elements version information.<br />
We use the data only for checking updates, and we do not share these data with others.

{{% /alert %}}

{{% alert title="How we receive the data" color="secondary" %}}

The version information will be sent in order to check updates when automatic update is enabled, or when you press the update button manually.

The URLs to send the version information are as follows:

-   <https://appcast.pqrs.org/karabiner-elements-appcast.xml>
-   <https://appcast.pqrs.org/karabiner-elements-appcast-devel.xml>

You can change the automatic update setting in Update tab.

{{< local-image src="images/automatic-update@2x.png" >}}

{{% /alert %}}

{{% alert title="Detail" color="secondary" %}}

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
