---
title: 'Karabiner-Elements for macOS Big Sur'
weight: 1000
---

## Supported systems

-   macOS Catalina (10.15)
    -   Supported Intel-based Macs.
-   macOS Big Sur (11.0)
    -   Supported both Intel-based Macs and Apple Silicon Macs.

{{% alert title="Important Notice for macOS Big Sur Beta users" color="danger" %}}

macOS Big Sur Beta 6 has a very serious DriverKit issue.<br/>
Karabiner-Elements will stop working after restarting your Mac due to the issue on macOS Big Sur Beta 6.<br/>

You have to reinstall the driver by the following way every reboot on macOS Big Sur Beta 6.

[How to reinstall the driver.](#how-to-reinstall-the-driver)

There is no such issue on macOS Catalina.

{{% /alert %}}

## Download

<a href="https://github.com/pqrs-org/Karabiner-Elements/releases/download/beta/Karabiner-Elements-12.94.0.dmg" class="btn btn-primary btn-lg">Download v12.94.0</a>

-   📅 Release date
    -   Sep 17, 2020
-   🐛 Bug Fixes
    -   Fixed an issue that uninstaller does not remove DriverKit driver on macOS Catalina.

<a href="https://github.com/pqrs-org/Karabiner-Elements/releases/download/beta/Karabiner-Elements-12.93.1.dmg" class="btn btn-primary btn-sm disabled">Download v12.93.1</a>

-   📅 Release date
    -   Sep 13, 2020
-   ⚡️ Improvements
    -   Minor improvements:
        -   Show `/var/log/karabiner/virtual_hid_device_service.log` on Preferences > Log tab.
        -   Fix alert window title of Preferences.

<a href="https://github.com/pqrs-org/Karabiner-Elements/releases/download/beta/Karabiner-Elements-12.93.0.dmg" class="btn btn-primary btn-sm disabled">Download v12.93.0</a>

-   📅 Release date
    -   Sep 10, 2020
-   🐛 Bug Fixes
    -   Fixed a crash issue when pointing device is not grabbed.

<a href="https://github.com/pqrs-org/Karabiner-Elements/releases/download/beta/Karabiner-Elements-12.92.0.dmg" class="btn btn-primary btn-sm disabled">Download v12.92.0</a>

-   📅 Release date
    -   Sep 10, 2020
-   💥 Breaking changes
    -   macOS 10.12 - 10.14 support has been dropped.
-   ✨ New Features
    -   Supported macOS Big Sur (11.0)
    -   Supported both Intel-based Macs and Apple Silicon Macs.
    -   Changed the virtual keyboard and mouse implementation to DriverKit from deprecated kernel extension.
-   ⚡️ Improvements
    -   Improved preferences window messages.
    -   Partial support for comments in karabiner.json configuration file.
        -   Supported reading json file with comments.
        -   Limitation: The json comments will be removed if you change the json from Preferences GUI or command line interface.

## How to reinstall the driver

1.  Open Karabiner-Elements Preferences.
2.  The following alert will be shown.<br/>
    Press "Deactivate driver" button, and then press "Activate driver" button.
    {{< local-image src="images/reinstall-driver@2x.png" >}}
