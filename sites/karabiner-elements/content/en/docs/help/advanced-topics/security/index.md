---
title: 'Security'
weight: 200
---

Security is one of the most important point of Karabiner-Elements architecture design.

Separating process and running them with properly privileges to prevent event leaks.

## Process

Karabiner-Elements restricts the input event handling to **karabiner_observer** and **karabiner_grabber** processes.

These process are running with root privilege and other process including malicious attacker cannot steal your input events.

### List of process

Running with root privilege

-   **karabiner_observer**
    -   Role:
        -   Observe the keyboard hardware events and tell grabber the devices state.
-   **karabiner_grabber**
    -   Role:
        -   Grab the keyboard hardware and catch events, modify events then post them.
-   **Karabiner VirtualHIDDevice** kernel extension
    -   Role:
        -   Virtual keyboard and pointing device.
        -   The virtual devices deny any requires (sending input events) from non root privileged processes.<br />
            Typically, karabiner_grabber is the only process which can send input events to the virtual devices.

Running with logged in user privilege

-   **karabiner_console_user_server**
    -   Role:
        -   Tell karabiner_grabber starting device grabbing.
        -   Execute shell commands which is triggered by karabiner_grabber.
-   **karabiner_session_monitor**
    -   Role:
        -   Monitor user login status and tell it to karabiner_grabber.
-   **karabiner_observer** (Running with logged in user)
    -   Role:
        -   Tell macOS karabiner_observer will be use Input Monitoring.<br />
            And do nothing if the process is running with non root user.
-   **karabiner_grabber** (Running with logged in user)
    -   Role:
        -   Tell macOS karabiner_grabber will be use Input Monitoring.<br />
            And do nothing if the process is running with non root user.
