---
title: 'Features'
weight: 200
---

Karabiner-Elements is a powerful and stable keyboard customizer for macOS.

## Core features

-   **Simple Modifications**: Change normal keys to other keys.
-   **Complex Modifications**: Change keys by complex rules.
    -   Change a key to combination of modifiers. (e.g. change capslock to control+command)
    -   Change modifiers+key to key. (e.g. change control+m to return)
    -   Send key events if a key is pressed alone.
    -   Send key events if keys are pressed simultaneously.
    -   Mouse keys.
    -   etc.
-   **Function Keys**: Change f1-f12 keys to media controls.
-   **Devices**: Apply modifications to specified keyboards only.
-   **Profiles**: Support multiple profiles.
-   **Modifier Flag Sync**: Synchronize modifier flags across all connected keyboards.
-   **Secure Keyboard Entry Support**: Work well on Secure Keyboard Entry environment such as a password prompt, terminal with Secure Keyboard Entry, etc.
-   **Extra Key Support**: Enable extra keys on PC keyboard that are not recognized by default in macOS.
    -   Home key
    -   International keys
    -   Language keys (e.g., `無変換`,`変換`, `カタカナ` keys on JIS PC keyboard)
    -   Application Launch Keys

## Current limitations

-   Karabiner-Elements cannot modify the eject key on some keyboard (e.g., Apple Wired Keyboard) due to the limitation of macOS API.
-   Karabiner-Elements cannot modify the fn key on non-Apple keyboards such as Logitech keyboards.
-   Karabiner-Elements ignores the `System Preferences > Keyboard > Modifier Keys...` configuration.<br/>
    Change modifiers by using Simple Modifications.
    [(Detail of input event modification chaining)](../../manual/misc/event-modification-chaining/)
