---
title: 'Breaking changes introduced by the version upgrade'
weight: 5
---

In principle, Karabiner-Elements is developed to maintain compatibility with past versions.
However, breaking changes may be made for reasons such as keeping up with macOS updates.
This page provides information regarding those changes.

## Karabiner-Elements 15.1.0

The following changes have been made due to the update where the virtual keyboard now uses the Vendor ID and Product ID of the Apple Aluminum USB Keyboard (A1243):

-   For the Caps Lock key, accidental keystroke prevention has been enabled.
    You will need to hold the key for about 100 milliseconds to toggle Caps Lock on or off.
    -   If you want to toggle Caps Lock immediately upon pressing the key, please enable this setting:
        <https://ke-complex-modifications.pqrs.org/#disable_accidental_keystroke_prevention_of_caps_lock>
    -   If you are writing your own Complex Modifications, please use [hold_down_milliseconds](/docs/json/complex-modifications-manipulator-definition/to/hold-down-milliseconds/).
-   The virtual keyboard settings under `System Settings > Keyboard > Keyboard Shortcuts... > Modifier Keys` will now be shared with those of the Apple Aluminum USB Keyboard (A1243).
    If you've used this keyboard before, it's worth reviewing your settings.
    {{< local-image src="images/v15.1.0/modifier-keys@2x.png" >}}
-   The "Use all F1, F2, etc. keys as standard function keys" setting now needs to be changed from System Settings.
