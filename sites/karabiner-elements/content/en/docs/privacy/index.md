---
title: 'Privacy'
weight: 650
---

## Privacy

Security and privacy protection is one of the most important points of Karabiner-Elements architecture design.<br />
Of course, Karabiner-Elements does not collect any of your input data, your configuration data, nor your usage statistics.

{{% alert title="Data not collected" color="primary" %}}

Karabiner-Elements does not transmit your data externally. The following data is never transmitted outside your Mac:

-   Your keystrokes
-   Your configuration data
-   Your usage statistics
-   And all other data except Karabiner-Elements version information.

{{% /alert %}}

{{% alert title="About Input Monitoring" color="primary" %}}

Karabiner-Elements grabs exclusive access to the keyboard hardware, captures the input events, and then modifies them.
To do this, Karabiner-Elements requires your Input Monitoring permissions approval.

Keystrokes captured with this privilege are processed entirely on your Mac.
And because the process is protected by administrative privileges, keystrokes cannot be intercepted at by other applications on your Mac.

Specifically, the process with administrative privileges is `Karabiner-Core-Service`; it is the core process in Karabiner-Elements that captures and modifies keystrokes.

{{< local-image src="images/settings-input-monitoring@2x.png" >}}

**Note:**
`Karabiner-EventViewer` operates with lower privileges than `Karabiner-Core-Service`.
Since it runs with user privileges, it cannot receive keystrokes during password inputs or similar actions when Secure Keyboard Entry is enabled.

{{% /alert %}}

{{% alert title="Input event manipulation" color="primary" %}}

After capturing keystrokes, the `Karabiner-Core-Service` process modifies input events based on user settings.
Modifying input events is also performed with security considerations in mind.

To prevent the addition of malicious input from other applications, `Karabiner-Core-Service` performs closed operations within the process, which has administrative privileges.
And the `Karabiner-Core-Service` process does not knowingly alter, insert or manipulate any keystrokes other than as configured and expected by the user.

**Note:**
There are some implicit changes, such as the handling of certain media control buttons.
For a list, please see [Implicit behavior](/docs/manual/misc/implicit-behavior/).

{{% /alert %}}

{{% alert title="User data and files" color="primary" %}}
Karabiner-Elements and any bundled softwares, e.g., EventViewer, do not access or modify user data and files, except in the following data:

**User files and data referenced by Karabiner-Elements:**

-   Configuration files specific to the application.
-   The keyboard type configuration (ANSI, ISO, JIS) in the system settings.
-   The "Use F1, F2, etc. keys as standard function keys" configuration in the system settings.

{{% /alert %}}

{{% alert title="About karabiner_machine_identifier" color="primary" %}}

Since Karabiner-Elements v14.99.2, a unique random ID called karabiner_machine_identifier is generated for each machine during Karabiner-Elements installation.
This ID may be included in the configuration file karabiner.json when machine-specific settings are made.
For instance, when the Multitouch Extension is enabled, the following content is added to karabiner.json, and the string starting with `krbn-` is the karabiner_machine_identifier.

{{< local-image src="images/karabiner-machine-identifier@2x.png" >}}

This string is completely random and does not contain any unique information about the user or the machine.
In other words, this ID is not linked to information like your Apple ID or Mac's serial number.
Therefore, it is a safe ID to share with others, and there is no need to mask it when you share karabiner.json with others.

Of course, Karabiner-Elements never collect this ID.

### Technical Information

The karabiner_machine_identifier is in the format `krbn-{UUID v4}`.

The generated ID is saved in `/Library/Application Support/org.pqrs/tmp/karabiner_machine_identifier.json` as the following forms.

```json
{ "karabiner_machine_identifier": "krbn-818632bf-2a88-4ac0-ad0b-4524721c217b" }
```

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
133.242.162.147 - - [11/Nov/2025:13:11:10 +0000]
"GET /karabiner-elements-appcast.xml HTTP/2.0" 200 4113
"-" "Karabiner-Updater/15.7.0 Sparkle/2.8.0" "appcast.pqrs.org" "-"
```

The received data contains:

| Name                       | Example                                |
| -------------------------- | -------------------------------------- |
| Access source IP address   | 133.242.162.147                        |
| Access time                | 11/Nov/2025:13:11:10 +0000             |
| Karabiner-Elements version | Karabiner-Updater/15.7.0 Sparkle/2.8.0 |

{{% /alert %}}

## Related documents

-   [Security](../help/advanced-topics/security)
