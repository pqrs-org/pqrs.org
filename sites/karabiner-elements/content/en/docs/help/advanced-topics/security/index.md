---
title: 'Security'
weight: 200
---

Security is one of the most important aspects of the Karabiner-Elements architecture.
Karabiner-Elements separates responsibilities across multiple processes and runs each process with appropriate privileges to reduce the risk of input event leakage.

## Processes

Karabiner-Elements restricts input event handling to the **Karabiner-Core-Service** daemon and **Karabiner-VirtualHIDDevice-Daemon** processes.
These processes run with root privileges, so other processes, including malicious applications, cannot steal input events through Karabiner-Elements.

### Process list

Running with root privileges:

- **Karabiner-Core-Service** daemon
    - It grabs exclusive access to the keyboard hardware, captures input events, modifies them, and forwards them to Karabiner-VirtualHIDDevice-Daemon.
- **Karabiner-VirtualHIDDevice-Daemon**
    - It controls Karabiner-DriverKit-VirtualHIDDevice and bridges data between `Karabiner-Core-Service` and the virtual devices.
    - This process only receives data from processes running with root privileges.
      Therefore, regular applications running with user privileges cannot arbitrarily send events to virtual devices.

Running with DriverKit privileges:

- **Karabiner-DriverKit-VirtualHIDDevice**
    - It provides the virtual keyboard and pointing device through DriverKit.
    - Karabiner-DriverKit-VirtualHIDDevice does not accept control from any process other than Karabiner-VirtualHIDDevice-Daemon.
      Other applications cannot arbitrarily add or remove virtual devices or send events.

Running with logged-in user privileges:

- **karabiner_console_user_server**
    - It instructs the Karabiner-Core-Service daemon to start grabbing devices.
    - It also executes shell commands and sends user commands triggered by the Karabiner-Core-Service daemon.
- **karabiner_session_monitor**
    - It monitors user login status and communicates it to the Karabiner-Core-Service daemon.
- **Karabiner-Core-Service** agent
    - Requests for Accessibility and Input Monitoring permissions must be made from the user's login session,
      so these permission requests are handled by the Karabiner-Core-Service agent.
    - Accessing the focused UI element through the Accessibility API must also be done from the user's login session.
      Therefore, the Karabiner-Core-Service agent monitors changes to the focused application and UI element,
      and notifies the Karabiner-Core-Service daemon.
    - **Note:** Since the Karabiner-Core-Service agent is granted powerful permissions such as Accessibility, its role is intentionally limited.
      Responsibilities such as executing user shell commands are handled by `karabiner_console_user_server` to keep privileges clearly separated.

## Fully open source project

The source code for Karabiner-Elements, including all the libraries it uses, is fully open source and publicly available.
The distributed binaries are built from the source code in the following repository.
Anyone can create binaries identical to the distributed releases by setting up Apple's code-signing environment.

<https://github.com/pqrs-org/Karabiner-Elements/>
