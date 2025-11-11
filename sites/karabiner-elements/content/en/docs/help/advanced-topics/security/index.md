---
title: 'Security'
weight: 200
---

Security is one of the most important point of Karabiner-Elements architecture design.

Separating process and running them with properly privileges to prevent event leaks.

## Process

Karabiner-Elements restricts the input event handling to **Karabiner-Core-Service** processes.

These process are running with root privilege and other process including malicious attacker cannot steal your input events.

### List of process

Running with root privilege

-   **Karabiner-Core-Service**
    -   It grabs exclusive access to the keyboard hardware, captures the events, modifies them, and forwards them to Karabiner-VirtualHIDDevice-Daemon.
    -   (It was previously named **karabiner_grabber**.)
-   **Karabiner-VirtualHIDDevice-Daemon**
    -   It controls Karabiner-DriverKit-VirtualHIDDevice and bridges the data between `Karabiner-Core-Service` and the virtual devices.
    -   This process only receives data from processes running with root privileges.
        Therefore, regular applications running with user privileges cannot arbitrarily send events to virtual devices.

Running with DriverKit privilege

-   **Karabiner-DriverKit-VirtualHIDDevice**
    -   The virtual keyboard and pointing device using DriverKit.
    -   Karabiner-DriverKit-VirtualHIDDevice does not accept control from any processes other than Karabiner-VirtualHIDDevice-Daemon.
        Other apps cannot arbitrarily add/remove virtual devices or send events.

Running with logged in user privilege

-   **karabiner_console_user_server**
    -   It instructs Karabiner-Core-Service to start grabbing devices.
    -   It also executes shell commands triggered by Karabiner-Core-Service.
-   **karabiner_session_monitor**
    -   It monitors user login status and communicates it to Karabiner-Core-Service.
-   **Karabiner-Core-Service** (Running with logged in user)
    -   Although it's not necessary for key remapping functionality, due to macOS specifications, Karabiner-Core-Service needs to be launched once with user privileges.
        Specifically, to request macOS Input Monitoring permission, the process must be running with user-level privileges, not administrator-level privileges.
    -   When Karabiner-Core-Service is launched with user privileges, it only requests Input Monitoring permission and does not perform any other actions.

## Fully open source project

The source code for Karabiner-Elements, including all the libraries it uses, is fully open source and publicly available.
The distributed binaries are built from the source code in the following repository.
Anyone can create binaries identical to the distributed releases by setting up Apple's code-signing environment.

<https://github.com/pqrs-org/Karabiner-Elements/>
