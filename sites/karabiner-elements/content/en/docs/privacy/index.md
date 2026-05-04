---
title: 'Privacy'
weight: 650
---

## Data handling

Security and privacy protection are important parts of the Karabiner-Elements architecture.
Karabiner-Elements does not collect your keystrokes, configuration data, usage statistics, or other personal data.

{{% alert title="Data not collected" color="primary" %}}

Karabiner-Elements does not transmit your personal data outside your Mac. The following data is never sent externally:

- Your keystrokes
- Your configuration data
- Your usage statistics
- Other personal data, except for the information required to check for updates

{{% /alert %}}

{{% alert title="Data received when checking for updates" color="secondary" %}}

When Karabiner-Elements checks for updates, the update server receives a standard web request.

This request includes Karabiner-Elements version information.
As with ordinary web server access logs, the server also records the source IP address and access time.

We use this data only to provide update checks and operate the update service.
We do not share this data with third parties.

---

**How update check data is received**

Version information is sent when automatic update checking is enabled or when you manually press the update button.

The URLs used for update checks are as follows:

- <https://appcast.pqrs.org/karabiner-elements-appcast.xml>
- <https://appcast.pqrs.org/karabiner-elements-appcast-devel.xml>

The `appcast.pqrs.org` server receives update check requests like the following:

```text
121.105.142.169 - - [04/May/2026:08:09:56 +0000]
"GET /karabiner-elements-appcast.xml HTTP/2.0" 200 3995 "-"
"Karabiner-Updater/16.0.0 Sparkle/2.9.1" "appcast.pqrs.org" "-"
```

The received data contains:

| Name                       | Example                                |
| -------------------------- | -------------------------------------- |
| Source IP address          | 121.105.142.169                        |
| Access time                | 04/May/2026:08:09:56 +0000             |
| Karabiner-Elements version | Karabiner-Updater/16.0.0 Sparkle/2.9.1 |

---

You can change the automatic update setting from the Update tab.

{{< local-image src="images/automatic-update@2x.png" >}}

{{% /alert %}}

## Related documents

- {{< page-link "/docs/manual/misc/required-macos-settings/" >}}
- {{< page-link "/docs/help/advanced-topics/security/" >}}

## Technical information

{{% alert title="About input capturing" color="primary" %}}

Karabiner-Elements opens keyboard devices exclusively, captures input events, and modifies them according to your configuration.
To do this, Karabiner-Elements requires permissions for input capturing.

Keystrokes captured with this permission are processed entirely on your Mac.
The process that captures and modifies keystrokes is the `Karabiner-Core-Service` daemon, which runs with root privileges.

Because input event handling is restricted to this privileged process, regular applications running with user privileges cannot intercept keystrokes through Karabiner-Elements.

**Note:**
`Karabiner-EventViewer` runs with lower privileges than the `Karabiner-Core-Service` daemon.
Since it runs with user privileges, it cannot receive keystrokes during password input or similar actions when Secure Keyboard Entry is enabled.

{{% /alert %}}

{{% alert title="About Accessibility" color="primary" %}}

Karabiner-Elements requires Accessibility permission for features that depend on the focused application or focused UI element.

For example, some conditions in complex modifications need to know which application or UI element is currently focused.
This information is obtained through the macOS Accessibility API and is processed locally on your Mac.

Accessibility permission is handled by the `Karabiner-Core-Service` agent running in the logged-in user's session.
This agent monitors changes to the focused application and UI element, and notifies the `Karabiner-Core-Service` daemon.

The role of this agent is intentionally limited.
Responsibilities such as executing user shell commands are handled by `karabiner_console_user_server` to keep privileges clearly separated.

{{% /alert %}}

{{% alert title="Input event manipulation" color="primary" %}}

After capturing keystrokes, the `Karabiner-Core-Service` daemon modifies input events based on your settings.
Input event manipulation is performed with security considerations in mind.

To prevent malicious input from being injected by other applications, the `Karabiner-Core-Service` daemon performs these operations inside the root-privileged process.
The `Karabiner-Core-Service` daemon does not intentionally alter, insert, or manipulate keystrokes except as configured and expected by the user.

**Note:**
There are some implicit changes, such as the handling of certain media control buttons.
For a list, please see {{< page-link "/docs/manual/misc/implicit-behavior/" >}}.

{{% /alert %}}

{{% alert title="User data and files" color="primary" %}}

Karabiner-Elements and its bundled software, such as EventViewer, do not access or modify user files except for the following:

**User files and data referenced by Karabiner-Elements:**

- Karabiner-Elements configuration files.
- The following System Settings configurations:
    - Use F1, F2, etc. keys as standard function keys
    - Trackpad and mouse scrolling direction (Natural scrolling)
    - Modifier key settings for the Karabiner DriverKit VirtualHIDKeyboard

**Note:**
If you configure Karabiner-Elements to execute shell commands, those commands run with the privileges of the logged-in user.
Any file access performed by those commands depends on the commands you configured.

{{% /alert %}}

{{% alert title="About karabiner_machine_identifier" color="primary" %}}

Since Karabiner-Elements v14.99.2, a unique random ID called `karabiner_machine_identifier` has been generated for each Mac during Karabiner-Elements installation.
This ID may be included in `karabiner.json` when machine-specific settings are used.

For example, machine-specific settings are stored as shown below.
The string starting with `krbn-` is the `karabiner_machine_identifier`.

```json
{
    "machine_specific": {
        "krbn-818632bf-2a88-4ac0-ad0b-4524721c217b": {
            "enable_multitouch_extension": true,
            "external_editor_path": "/Applications/Visual Studio Code.app"
        }
    }
}
```

This string is completely random and does not contain any unique information about the user or the Mac.
It is not linked to information such as your Apple ID or your Mac's serial number.
Therefore, this ID is safe to share with others, and there is no need to mask it when you share `karabiner.json`.

Karabiner-Elements never collects this ID.

---

The `karabiner_machine_identifier` is in the format `krbn-{UUID v4}`.

The generated ID is saved in `/Library/Application Support/org.pqrs/tmp/karabiner_machine_identifier.json` in the following form:

```json
{ "karabiner_machine_identifier": "krbn-818632bf-2a88-4ac0-ad0b-4524721c217b" }
```

{{% /alert %}}
