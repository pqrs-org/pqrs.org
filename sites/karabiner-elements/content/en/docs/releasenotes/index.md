---
title: 'Release notes'
weight: 900
simple_list: true
exclude_search: true
body_class: release-notes
---

## Karabiner-Elements 14.12.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.12.0/Karabiner-Elements-14.12.0.dmg)
-   📅 Release date
    -   Apr 16, 2023
-   ✨ New Features
    -   Added the ability to switch application icons. This can be changed from the UI tab in Settings.
        -   [Manual](https://karabiner-elements.pqrs.org/docs/manual/misc/change-app-icon/)
    -   Added new application icons. (Thanks to @Zabriskije)
    -   Added the following variables in MultitouchExtension. (Thanks to @codeanpeace)
        -   multitouch_extension_finger_count_upper_quarter_area
        -   multitouch_extension_finger_count_lower_quarter_area
        -   multitouch_extension_finger_count_left_quarter_area
        -   multitouch_extension_finger_count_right_quarter_area
-   ⚡️ Improvements
    -   Prevent moving the mouse from waking up from sleep by ungrab devices during system sleep. (Thanks to @aspacca)
    -   Fixed inconsistent and confusing brightness label in Simple Modifications. (Thanks to @revolter)
    -   Improved MultitouchExtension to synchronize finger count (half and quarter) variables with finger movement.
    -   Moved "Disable the built-in keyboard while this device is connected" settings into Devices tab from Devices > Advanced tab in Settings.
-   🐛 Bug Fixes
    -   Fixed an issue that dynamic keyboard type change (ANSI, ISO and JIS) by changing the country code of the virtual keyboard did not work properly.

## Karabiner-Elements 14.11.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.11.0/Karabiner-Elements-14.11.0.dmg)
-   📅 Release date
    -   Jan 7, 2023
-   💥 Breaking changes
    -   Changed bundle identifier of Karabiner-Elements Settings to `org.pqrs.Karabiner-Elements.Settings` from `org.pqrs.Karabiner-Elements.Preferences`.
-   ✨ New Features
    -   Added `Ask for confirmation when quitting` option into Settings > Misc tab. (Thanks to @basti1302)
-   ⚡️ Improvements
    -   Improved health checks for inter-process communication to better recover from errors.
-   🐛 Bug Fixes
    -   Fixed an issue that uninstaller does not remove Karabiner-Elements.app and Karabiner-EventViewer.app in macOS Ventura.
    -   Fixed an issue that could cause multiple update windows will be shown.

## Karabiner-Elements 14.10.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.10.0/Karabiner-Elements-14.10.0.dmg)
-   📅 Release date
    -   Sep 25, 2022
-   ⚡️ Improvements
    -   Update `set_mouse_cursor_position` to use the current screen if `screen` option is not specified. (Thanks to @gnawf)
    -   Sparkle Framework has been updated.
-   🐛 Bug Fixes
    -   Fixed an issue that the `device_if` and `device_unless` does not work if vendor_id or product_id is zero. (or more precisely, if vendor_id or product_id cannot be retrieved and is set to 0)

## Karabiner-Elements 14.9.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.9.0/Karabiner-Elements-14.9.0.dmg)
-   📅 Release date
    -   Sep 11, 2022
-   ✨ New Features
    -   Supported Remote control buttons. (menu arrows buttons, color buttons)
    -   The `is_built_in_keyboard` has been added into `device_if` and `device_unless`.
    -   The `device_exists_if` and `device_exists_unless` has been added into `conditions`.
-   🐛 Bug Fixes
    -   Fixed an issue that the ignored device's modifier keys are not ignored properly.

## Karabiner-Elements 14.8.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.8.0/Karabiner-Elements-14.8.0.dmg)
-   📅 Release date
    -   Aug 11, 2022
-   ✨ New Features
    -   Add `Enable unsafe configuration` feature into Preferences > Pro tab.
-   🐛 Bug Fixes
    -   Fixed an issue that the built-in keyboard is not be treated as the built-in keyboard if the keyboard is connected via SPI (Serial Peripheral Interface), such as M2 MacBook Air.

## Karabiner-Elements 14.6.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.6.0/Karabiner-Elements-14.6.0.dmg)
-   📅 Release date
    -   Jul 31, 2022
-   ✨ New Features
    -   `Treat as a built-in keyboard` setting has been added into Devices configuration. It works with "Disable the built-in keyboard" feature.
-   🐛 Bug Fixes
    -   Fixed an issue that "Disable the built-in keyboard" feature does not work if the built-in keyboard is not included in the event modification target devices.

## Karabiner-Elements 14.5.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.5.0/Karabiner-Elements-14.5.0.dmg)
-   📅 Release date
    -   Jul 17, 2022
-   💥 Breaking changes
    -   The following modifier flags and manipulators are now canceled even for events from devices not grabbed by Karabiner-Elements, e.g. mouse clicks.
        -   `sticky modifiers`
        -   `to_if_alone`
        -   `to_if_held_down`
        -   `to_delayed_action`
-   ⚡️ Improvements
    -   Improved behavior the sticky modifiers when used together with the built-in trackpad. (Thanks to @quarkw)
    -   Preferences Window is rewritten in SwiftUI.
    -   `set_variable` now supports bool and string value.
    -   Sparkle Framework has been updated.

## Karabiner-Elements 14.4.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.4.0/Karabiner-Elements-14.4.0.dmg)
-   📅 Release date
    -   Mar 1, 2022
-   🐛 Bug Fixes
    -   Fixed an issue that NotificationWindow causes high CPU usage in some environments.

## Karabiner-Elements 14.3.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.3.0/Karabiner-Elements-14.3.0.dmg)
-   📅 Release date
    -   Nov 20, 2021
-   ⚡️ Improvements
    -   Added System Extensions tab to EventViewer.
    -   Added a workaround for macOS's ioreg command issue that consumes high CPU usage on macOS Monterey.

## Karabiner-Elements 14.2.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v14.2.0/Karabiner-Elements-14.2.0.dmg)
-   📅 Release date
    -   Nov 3, 2021
-   💥 Breaking changes
    -   macOS 10.15 support has been dropped.
-   ✨ New Features
    -   Supported Touch ID on Magic Keyboard.
    -   Supported application launcher keys (Mail, Browser, Calculator, etc.) which are belong to HID Consumer Usage Page and Application Launch Buttons Usage.
    -   Add new features for writing your own settings:
        -   Added [`software_function.iokit_power_management_sleep_system`](https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/iokit_power_management_sleep_system/).
-   🐛 Bug Fixes
    -   Fixed an issue that an alert window appears in an incorrect position on macOS 12 Monterey.
-   ⚡️ Improvements
    -   Update application icons. (Thanks to Kouji TAMURA)
    -   EventViewer is rewritten in SwiftUI.

## Karabiner-Elements 13.7.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.7.0/Karabiner-Elements-13.7.0.dmg)
-   📅 Release date
    -   Sep 6, 2021
-   🐛 Bug Fixes
    -   Fix an issue that `shell_command` does not set environment variables (HOME, USER, etc.).

## Karabiner-Elements 13.6.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.6.0/Karabiner-Elements-13.6.0.dmg)
-   📅 Release date
    -   Sep 3, 2021
-   ✨ New Features
    -   Add new features for writing your own settings:
        -   Added [`software_function.cg_event_double_click`](https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/cg_event_double_click/).
        -   Added [`software_function.set_mouse_cursor_position`](https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/set_mouse_cursor_position/).
        -   Added [`set_notification_message`](https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/set-notification-message/).
-   🐛 Bug Fixes
    -   Fixed an issue that karabiner.json parse error message is not shown in Preferences > Log if the error message contains corrupted characters.
-   ⚡️ Improvements
    -   Changed to log the output of shell_command into console_user_server.log.
    -   The notification window transparency will be increased when the mouse cursor is hovered.

## Karabiner-Elements 13.5.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.5.0/Karabiner-Elements-13.5.0.dmg)
-   📅 Release date
    -   Jun 20, 2021
-   ⚡️ Improvements
    -   Improved temporary directory handling to reduce the frequency of mds process accessing it.
    -   Improved `mouse_key.speed_multiplier` handling when it is used with `to.modifiers`, the modifier is retained while speed_multiplier is active.
    -   The caps lock LED manipulation has been enabled by default.
        -   Note: This change applies to newly connected keyboards.
    -   Several Objective-C code around GUI has been rewritten in Swift + SwiftUI.

## Karabiner-Elements 13.4.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.4.0/Karabiner-Elements-13.4.0.dmg)
-   📅 Release date
    -   Apr 4, 2021
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-Elements stops working with `virtual_hid_keyboard is not ready. Please wait for a while.` error message when you kill `karabiner_console_user_server` process manually.
-   ⚡️ Improvements
    -   Changed to terminate virtual HID devices immediately after quit Karabiner-Elements.

### 🔔 Notes for Mac computers with Apple Silicon (Apple M1) users

macOS Big Sur 11.2 or earlier has an issue within memory management and HID device handling that causes kernel panics on Mac computers with Apple Silicon.
The virtual device that is used internally by Karabiner-Elements triggers this issue, and a kernel panic might be caused at macOS shutdown.

We confirmed that this issue has been fixed in [macOS Big Sur 11.3 Beta](https://beta.apple.com/sp/betaprogram/).
Please use macOS Big Sur 11.3 Beta or later versions if you are facing the kernel panic issue.

## Karabiner-Elements 13.3.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.3.0/Karabiner-Elements-13.3.0.dmg)
-   📅 Release date
    -   Jan 29, 2021
-   🐛 Bug Fixes
    -   Fixed an issue that installer requires Rosetta 2 on Apple Silicon Macs.
-   💥 Breaking Changes
    -   Changed the default function of f4 key to `spotlight`, f5 key to `dictation`, f6 key to `f6`.
        -   Note: This change will be applied when you create a new profile.
    -   Changed to Karabiner-Elements does not modify f1-f12 keys on touch bar.
    -   The caps lock delay of Karabiner Virtual HID Keyboard has been removed.
        The state of caps lock will be changed immediately after you press the caps lock key.
-   ✨ New Features
    -   Supported [`sticky modifier keys`](https://karabiner-elements.pqrs.org/docs/help/how-to/sticky-modifier-key/)
    -   Added `apple_vendor_keyboard_key_code` and `apple_vendor_top_case_key_code` to event definitions.
        -   [apple_vendor_keyboard_key_code](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/share/types/momentary_switch_event_details/apple_vendor_keyboard_key_code.hpp)
        -   [apple_vendor_top_case_key_code](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/share/types/momentary_switch_event_details/apple_vendor_top_case_key_code.hpp)
-   ⚡️ Improvements
    -   Updated in-app screenshots to Big Sur.
    -   Added the close button to notification window.

## Karabiner-Elements 13.1.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.1.0/Karabiner-Elements-13.1.0.dmg)
-   📅 Release date
    -   Oct 30, 2020
-   🔔 Important Notes
    -   **Restarting macOS is required** after upgrading from v13.0.0.<br />
        The following alert will be shown after upgrade. Please follow the instructions.<br />
        <img src="https://karabiner-elements.pqrs.org/docs/releasenotes/images/v13.1.0/driver-version-not-matched-alert.png" alt="driver version not matched alert" width="400" />
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-DriverKit-VirtualHIDDevice might crash when caps lock key is pressed in some environments.

## Karabiner-Elements 13.0.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v13.0.0/Karabiner-Elements-13.0.0.dmg)
-   📅 Release date
    -   Oct 4, 2020
-   💥 Breaking Changes
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

## Karabiner-Elements 12.10.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.10.0/Karabiner-Elements-12.10.0.dmg)
-   📅 Release date
    -   Jun 27, 2020
-   ✨ New Features
    -   `event_changed_if` and `event_changed_unless` has been added to `conditions`.
-   ⚡️ Improvements
    -   Improved sending f1-f12 keys in complex modification (e.g., "change command+e to f2") by ignoring media key mappings for these keys.
    -   Improved caps lock LED handling.
    -   Improved uninstaller adding the kernel extension staging area clean up.
    -   Improved complex modifications json checker.
    -   "Check for updates" has been improved.
        -   Updated Sparkle signing to EdDSA (ed25519) from DSA.
        -   URL of appcast.xml has been updated.

## Karabiner-Elements 12.9.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.9.0/Karabiner-Elements-12.9.0.dmg)
-   📅 Release date
    -   Jan 18, 2020
-   ✨ New Features
    -   `Open config folder` button has been added into Preferences.<br>
        The feature provides [an easy way exporting configuration](https://karabiner-elements.pqrs.org/docs/manual/operation/export/).
-   ⚡️ Improvements
    -   Added a workaround for non-dismissible `Device is ignored temporarily` alert
        which is caused by some devices that sends abnormal input events.
-   🐛 Bug Fixes
    -   Fixed `Add {key_code} to Karabiner-Elements` button on EventViewer for unnamed keys (raw number key codes).
    -   Fixed an issue that modifier flag events are not dispatched when changing pointing button while other character keys are pressed.
        (e.g., when changing pointing_button::button3 -> command+pointing_button::button1, command modifier is not sent when button1 is pressed while `t` key is also pressed.)

## Karabiner-Elements 12.8.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.8.0/Karabiner-Elements-12.8.0.dmg)
-   📅 Release date
    -   Nov 17, 2019
-   ✨ New Features
    -   Add `--show-current-profile-name` option into `karabiner_cli`.
    -   Add `--list-profile-names` option into `karabiner_cli`.
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-Elements stops working after switching user on macOS Catalina.
    -   Fixed an issue that Caps Lock LED is always manipulated even `Manipulate LED` setting is off.
    -   Fixed an issue that MultitouchExtension does not handle ignored area properly when a finger is touched ignored area repeatedly.

## Karabiner-Elements 12.7.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.7.0/Karabiner-Elements-12.7.0.dmg)
-   📅 Release date
    -   Sep 12, 2019
-   ✨ New Features
    -   MultitouchExtension app has been added.
    -   Dark Mode has been supported.
    -   Added `--set-variables` option into `karabiner_cli`.
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-Elements might stop working after sleep on macOS Catalina.

## Karabiner-Elements 12.6.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.6.0/Karabiner-Elements-12.6.0.dmg)
-   📅 Release date
    -   Aug 16, 2019
-   ✨ New Features
    -   Support macOS Catalina.
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-Elements fails to grab a device in rare cases.
-   ⚡️ Improvements
    -   Introduced karabiner_kextd.
        (kext loading function was separated from karabiner_grabber.)
    -   Improved EventViewer to show modifier flags of key events.
    -   Suppressed unnecessary log messages.

## Karabiner-Elements 12.5.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.5.0/Karabiner-Elements-12.5.0.dmg)
-   📅 Release date
    -   Jun 10, 2019
-   ✨ New Features
    -   Add `Delay before open device` configuration into `Karabiner-Elements Preferences > Devices > Advanced` tab.
    -   Added `Show key code in hexadecimal format` option into EventViewer.
-   🐛 Bug Fixes
    -   Fixed a key stuck issue which occurs when the key is released,
        and at the exact same moment Karabiner-Elements opens the device.
    -   Fixed an issue which Karabiner-Elements mistakes a remote user for a current console user
        if another user is logged in from Screen Sharing while console is used.
-   ⚡️ Improvements
    -   Improved `XXX is ignored temporarily until YYY is pressed again` behavior.
    -   Move `Disable the built-in keyboard while one of the following selected devices is connected` configuration
        into `Karabiner-Elements Preferences > Devices > Advanced` tab.

## Karabiner-Elements 12.4.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.4.0/Karabiner-Elements-12.4.0.dmg)
-   📅 Release date
    -   May 14, 2019
-   ✨ New Features
    -   Add `Mouse Key XY speed` configuration into `Karabiner-Elements Preferences > Virtual Keyboard` tab.
    -   `Device is ignored temporarily` alert has been introduced.<br/>
        This alert will be shown if you hold keys or buttons down before Karabiner-Elements opens the device.<br/>
        Please press the described key or button again to dismiss the alert.
-   🐛 Bug Fixes
    -   Fixed a key stuck issue which occurs when the key is held down before Karabiner-Elements opens the device.
-   ⚡️ Improvements
    -   Event code format on EventViewer changed to decimal number from hex.

## Karabiner-Elements 12.3.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.3.0/Karabiner-Elements-12.3.0.dmg)
-   📅 Release date
    -   Apr 24, 2019
-   💥 Breaking Changes
    -   complex modifications json will be checked strictly since this release.<br/>
        Please check error messages if your complex modifications do not work after upgrade.
-   ✨ New Features
    -   Added [Change mouse motion to scroll](https://ke-complex-modifications.pqrs.org/#mouse_motion_to_scroll) feature.<br/>
        -   Note: You have to enable your mice on [Devices tab](https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-devices/) when you want to use this feature.
    -   Added `--lint-complex-modifications` option into `karabiner_cli`.
        It allows you checks a complex-modifications json file.
-   ⚡️ Improvements
    -   Set Karabiner-Elements.app and Karabiner-EventViewer.app immutable
        in order to ensure unremovable them except built-in uninstaller.
        Please use the [uninstaller](https://karabiner-elements.pqrs.org/docs/manual/operation/uninstall/) when you want to remove Karabiner-Elements.
    -   Added a wait before grabbing device in order to avoid an macOS issue that device will be unusable after Karabiner-Elements is quit.
    -   Changes for users who write their own json.
        -   `to` and `to_*` support single object, e.g., `"to": { "key_code": "spacebar" }`.
        -   New modifier aliases are added: `left_alt`, `left_gui`, `right_alt`, `right_gui`.
        -   `key_code`, `consumer_key_code` and `pointing_button` supports a number value, e.g., `"from": {"key_code": 175}`.

## Karabiner-Elements 12.2.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.2.0/Karabiner-Elements-12.2.0.dmg)
-   📅 Release date
    -   Feb 1, 2019
-   ✨ New Features
    -   Karabiner-Elements makes a backup file of karabiner.json before updating it if the backup file does not exists.
        (~/.config/karabiner/automatic_backups/karabiner_YYYYMMDD.json)
-   🐛 Bug Fixes
    -   Fixed an issue that Caps Lock LED does not work on macOS Mojave.
-   ⚡️ Improvements
    -   `shell_command` string max length has been expanded. (256 byte -> 32 KB)
    -   A device grabbing process has been improved. (Observing device state by a separated `karabiner_observer` process.)
    -   The event processing has been improved and the latency has been reduced by using [pqrs::dispatcher](https://github.com/pqrs-org/cpp-dispatcher).

## Karabiner-Elements 12.1.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.1.0/Karabiner-Elements-12.1.0.dmg)
-   📅 Release date
    -   May 30, 2018
-   💥 Breaking Changes
    -   Changed the order of `to_if_alone` and `to_after_key_up` event handling.<br />
        `to_if_alone` will be handled before `to_after_key_up`.
-   ✨ New Features
    -   Added new items into `simultaneous_options`:
        -   `simultaneous_options.detect_key_down_uninterruptedly`
        -   `simultaneous_options.key_up_when`
    -   Added new parameters into `to event definition`:
        -   `hold_down_milliseconds`
        -   `halt`
-   🐛 Bug Fixes
    -   Fixed an issue that random key repeat happen at extremely high system CPU usage.
-   ⚡️ Improvements
    -   Increased rollover limit of virtual keyboard. (6 -&gt; 32)<br />
        This change mainly improves usability when you are using multiple keyboards at the same time.
    -   Improved modifier flags handling in `to_after_key_up` and `to_if_alone`.

## Karabiner-Elements 12.0.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.0.0/Karabiner-Elements-12.0.0.dmg)
-   📅 Release date
    -   Apr 12, 2018
-   💥 Breaking Changes
    -   macOS 10.11 support has been dropped.<br />
        Karabiner-Elements works on macOS 10.12 (Sierra) or later.
    -   `Keyboard type` in the virtual keyboard preferences has been removed. (Adverse effect of virtual keyboard improvement.)<br />
        Please change the keyboard type from `System Preferences > Keyboard > Change Keyboard Type...`.
    -   `Caps Lock Delay` in the virtual keyboard preferences has been removed. (Adverse effect of virtual keyboard improvement.)
    -   Changed `simultaneous` behaviour to post key_up events when any key is released.
    -   Changed `to_after_key_up` and `to_if_alone` behaviour as mandatory modifiers are removed from these events.
-   ✨ New Features
    -   Added `simultaneous_options.key_down_order`, `simultaneous_options.key_up_order` and `simultaneous_options.to_after_key_up`.
-   🐛 Bug Fixes
    -   Fixed an issue that `to_if_alone`, `to_if_held_down` and `to_delayed_action` does not work properly with `simultaneous`.
-   ⚡️ Improvements
    -   The virtual keyboard compatibility has been improved.
    -   EventViewer has been improved showing the correct key name for PC keyboard keys and international keys.
    -   Improved keyboard repeat handling with `simultaneous`.

## Karabiner-Elements 11.6.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.6.0/Karabiner-Elements-11.6.0.dmg)
-   📅 Release date
    -   Feb 20, 2018
-   ✨ New Features
    -   Simultaneous key presses has been supported in complex modifications.
-   ⚡️ Improvements
    -   Improved Mouse key scroll wheel direction referring `System Preferences > Mouse > Scroll direction`.
    -   Improved modifier flags handling around pointing button manipulations.
    -   Mouse keys have been added into Simple Modifications.
    -   The eject key has been added into the from key of Simple Modifications.
    -   The Vendor ID and Product ID of virtual devices has been changed. (0x0,0x0 -> 0x16c0,0x27db and 0x16c0,0x27da)

## Karabiner-Elements 11.5.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.5.0/Karabiner-Elements-11.5.0.dmg)
-   📅 Release date
    -   Dec 30, 2017
-   ✨ New Features
    -   `to_if_held_down` has been added.
-   🐛 Bug Fixes
    -   Avoided a VMware Remote Console issue that mouse pointer does not work properly on VMRC when Karabiner-Elements grabs the pointing device.
    -   Fixed an issue that `to_if_alone` does not work properly when `to` is empty.
-   ⚡️ Improvements
    -   Improved modifier flags handling in `to events`.
    -   Improved a way to save karabiner.json.

## Karabiner-Elements 11.4.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.4.0/Karabiner-Elements-11.4.0.dmg)
-   📅 Release date
    -   Dec 7, 2017
-   ✨ New Features
    -   `mouse_key` has been added.
        -   Examples:
            -   Mouse keys (simple):
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/main/public/json/mouse_keys_simple.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/main/src/json/mouse_keys_simple.json.erb)
            -   Mouse keys (full)
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/main/public/json/mouse_keys_full.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/main/src/json/mouse_keys_full.json.erb)
    -   `location_id` has been added to `device_if` and `device_unless`.
-   🐛 Bug Fixes
    -   Fixed an issue that the checkbox in `Preferences > Devices` is disabled for keyboards which do not have their own vendor id.

## Karabiner-Elements 11.3.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.3.0/Karabiner-Elements-11.3.0.dmg)
-   📅 Release date
    -   Nov 12, 2017
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-11.2.0 does not work properly on some environments due to a possibility of macOS kernel extension cache problem.

## Karabiner-Elements 11.2.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.2.0/Karabiner-Elements-11.2.0.dmg)
-   📅 Release date
    -   Nov 9, 2017
-   ✨ New Features
    -   Mouse button modifications has been added.<br />
        Note:
        -   You have to enable your Mouse manually in Preferences &gt; Devices tab.
        -   Karabiner-Elements cannot modify Apple's pointing devices.
    -   `to_delayed_action` has been added.
    -   `input_source_if` and `input_source_unless` has been added to `conditions`.
    -   `select_input_source` has been added.
    -   `keyboard_type_if` and `keyboard_type_unless` has been added to `conditions`.
    -   The caps lock LED manipulation has been disabled with non Apple keyboards until it is enabled manually.
-   ⚡️ Improvements
    -   The virtual keyboard handling has been improved.

## Karabiner-Elements 11.1.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.1.0/Karabiner-Elements-11.1.0.dmg)
-   📅 Release date
    -   Oct 4, 2017
-   🐛 Bug Fixes
    -   Fixed an issue that modifier flags becomes improperly state by mouse events.

## Karabiner-Elements 11.0.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.0.0/Karabiner-Elements-11.0.0.dmg)
-   📅 Release date
    -   Sep 18, 2017
-   ✨ New Features
    -   The first stable release of Karabiner-Elements.

## Karabiner 10.22.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.22.0.dmg)
-   📅 Release date
    -   Oct 31, 2016
-   🐛 Bug Fixes
    -   Fixed an issue that some Qt apps might be crash when AXNotifier is enabled. (VirtualBox, LyX, Wireshark)
-   ⚡️ Improvements
    -   Default setting of AXNotifier has been changed. (Enabled in Microsoft Office)
    -   Prepared settings have been updated.

## Karabiner 10.21.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.21.0.dmg)
-   📅 Release date
    -   Jul 5, 2016
-   🐛 Bug Fixes
    -   Fixed an issue that the initial key repeat rate of Karabiner will be set the slower value if you have not changed the key repeat rate in System Preferences.
    -   Fixed an issue that Karabiner does not save preferences properly in an edge case.
-   ⚡️ Improvements
    -   Prepared settings have been updated.

## Karabiner 10.20.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.20.0.dmg)
-   📅 Release date
    -   Jun 16, 2016
-   ✨ New Features
    -   `Option::FLIPSCROLLWHEEL_HORIZONTAL` and `Option::FLIPSCROLLWHEEL_VERTICAL` have been supported in `__PointingRelativeToScroll__`.
-   🐛 Bug Fixes
    -   Fixed an issue that Remote Desktop detection will be failed in some cases.
    -   Fixed an issue that input source switching settings does not work in some environments.

## Karabiner 10.19.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.19.0.dmg)
-   📅 Release date
    -   Jun 9, 2016
-   💥 Breaking Changes
    -   The multi-touch extension default configuration has been changed.<br/>
        If you are using ThumbSense, please enable ThumbSense setting manually in multi-touch extension preferences.
-   ✨ New Features
    -   `Use modifier symbols (⌘⌃⌥⇧⇪) in place of the modifier names` has been added into Karabiner Preferences > Status Message tab.
    -   `<bundleidentifieroverridedef>` has been introduced.
    -   `Option::KEYTOKEY_DELAYED_ACTION_MILLISECONDS` has been added.
    -   The following filters have been added.
        -   `<deviceexists_not>`
        -   `<deviceexists_only>`
    -   The following environment variables has been added into replacementdef.
        -   `{{ ENV_Select_the_previous_input_source_shortcut }}`
        -   `{{ ENV_Select_next_source_in_input_menu_shortcut }}`
-   🐛 Bug Fixes
    -   Fixed an issue that the argument treatment in `warp-mouse-cursor-position` utility is wrong.<br/>
        These adjustment values for `screen` and `front_window` were exchanged.
        For example, the vertical adjustment value for `screen` and `front_window` is used in horizontal adjustment.
    -   Fixed an issue that some Java apps might be crash when AXNotifier is enabled. (SAP GUI for Java)
    -   Fixed an issue that ModifierFlag pattern matching of `Option::KEYTOKEY_AFTER_KEYUP` in `__KeyOverlaidModifier__` and `__HoldingKeyToKey__` does not work property in some cases.
-   ⚡️ Improvements
    -   The device disconnect handling has been improved.
    -   Prepared settings have been updated.

## Karabiner 10.18.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.18.0.dmg)
-   📅 Release date
    -   Mar 7, 2016
-   🐛 Bug Fixes
    -   Fixed an issue that is introduced in Karabiner 10.17.0:
        -   Karabiner will be crashed when you change settings after you opened and closed the Preferences window in macOS 10.10.

## Karabiner 10.17.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.17.0.dmg)
-   📅 Release date
    -   Mar 5, 2016
-   ✨ New Features
    -   "Show icon in Dock" setting has been added.
    -   "Resume at login" setting has been added.<br/>
        You can disable auto resume function.
    -   `Option::FLIPSCROLLWHEEL_ROTATE` has been added.
    -   `PointingRelative::ANY` has been added into `__PointingRelativeToKey__`.
-   ⚡️ Improvements
    -   "Disable an internal keyboard while external keyboards are connected" setting has been improved.
        -   Mionix Naos 7000 has been supported.
        -   Logitech Bluetooth Mouse M555b has been supported.
        -   Microsoft Sculpt Touch Mouse has been supported.
    -   The word-wrap property of setting description in Preferences became break-word.
    -   The font size in Preferences has been selectable from "default font" and "large font".
    -   The consumer keys (media keys) repeat values has been synchronized with the key repeat values.
    -   The behavior of starting Karabiner on system startup has been improved.
    -   Prepared settings have been updated.
-   🐛 Bug Fixes
    -   Fixed an issue that some Qt apps might be crash when AXNotifier is enabled. (WISO apps)
    -   Fixed an issue that Microsoft Excel scroll position is sometimes reset while using scroll wheel.
    -   Fixed an issue that `__KeyDownUpToKey__` sends only the last interrupted events when multiple interrupted events are specified.

## Karabiner 10.15.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.15.0.dmg)
-   📅 Release date
    -   Dec 21, 2015
-   ⚡️ Improvements
    -   The safety limit of key repeat rate has been removed.<br/>
        You can overwrite key repeat rate by extreme fast values.
        -   The limit was 200 ms and 5 ms in the previous versions of Karabiner.<br/>
            Please increase the key repeat values to 200 ms and 5 ms if you feel new key repeat is too fast.
    -   GUI for enabling debug mode has been added into Karabiner Preferences.
    -   Prepared settings have been updated.
    -   "Disable an internal keyboard while external keyboards are connected" setting has been improved.
        -   Razer DeathAdder Chroma has been supported.
    -   ModifierFlag treatment has been improved in Option::KEYTOKEY_DELAYED_ACTION.
    -   Some error messages have been improved.
-   🐛 Bug Fixes
    Fixed an issue that some Java apps might be crash when AXNotifier is enabled. (Fiji)

## Karabiner 10.14.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.14.0.dmg)
-   📅 Release date
    -   Nov 5, 2015
-   ⚡️ Improvements
    -   "Karabiner Preferences > Key Repeat tab" UI has been improved.
-   🐛 Bug Fixes
    -   Fixed an issue that the key repeat configuration migration sometimes does not set properly values when Karabiner has been upgrade from v10.11.0 or prior.

## Karabiner 10.13.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.13.0.dmg)
-   📅 Release date
    -   Nov 2, 2015
-   ⚡️ Improvements
    -   "Overwrite the key repeat values of system" option has been added.<br/>
        Karabiner uses the system values unless this option is enabled.
    -   The key up event handling has been improved in some keyboards.
    -   "Don't remap Apple's keyboards" setting supported Magic Keyboard.
    -   Karabiner Preferences became resizable.
    -   Prepared settings have been updated.
-   🐛 Bug Fixes
    -   Fixed an issue that `__SimultaneousKeyPresses__` sometimes fails sending key up event when `__BlockUntilKeyUp__` is used together.

## Karabiner 10.11.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.11.0.dmg)
-   📅 Release date
    -   Oct 10, 2015
-   🐛 Bug Fixes
    -   Fixed an issue that `__SimultaneousKeyPresses__` sends key events continuously even if all keys are released when using multiple keyboards at the same time and both keyboards are pressed.
    -   Fixed an issue that some Java apps might be crash when AXNotifier is enabled. (Spine, SpineTrial)

## Karabiner 10.10.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.10.0.dmg)
-   📅 Release date
    -   Oct 8, 2015
-   ⚡️ Improvements
    -   "Use prepared settings" option has been added into Karabiner Preferences > Misc & Uninstall tab.<br/>
        Turning off the setting allows you to drop prepared settings and improve the speed of reloading XML.
    -   EventViewer has been improved.<br/>
        Media control events and some key combinations are supported.
    -   Event modification has been improved when you are using multiple keyboards at the same time.
    -   AXNotifier supported OmniFocus2 Quick Entry.
    -   Prepared settings have been updated.
    -   Updates for people who add new settings by oneself:
        -   once attribute has been introduced into `<include>` tag.
-   🐛 Bug Fixes
    -   Fixed an issue that the CPU usage of Preview.app might be 100% at opening a huge PDF file when AXNotifier is enabled.

## Karabiner 10.9.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.9.0.dmg)
-   📅 Release date
    -   Sep 7, 2015
-   💥 Breaking Changes
    -   The fn keypad has been removed from implicit behavior.<br/>
        Please use either of the following settings instead if you need.
        -   "Fn+Number to KeyPad"
        -   "Use old style fn keypad"
-   ⚡️ Improvements
    -   The external keyboard handling has been improved.
    -   Prepared settings have been updated.
    -   The following filters have been added.
        -   `<lastsentevent_not>`
        -   `<lastsentevent_only>`
-   🐛 Bug Fixes
    -   Fixed an issue that `__DropKeyAfterRemap__` does not work properly if the target key is changed by `<autogen>` that is defined before `__DropKeyAfterRemap__`.

## Karabiner 10.8.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.8.0.dmg)
-   📅 Release date
    -   Aug 24, 2015
-   ⚡️ Improvements
    -   AXNotifier supported new Alfred (Alfred 2.7.2).
    -   Prepared settings have been updated.
    -   `__PassThrough__` behavior has been improved.
    -   The following filters have been added.
        -   `<lastreleasedphysicalkey_only>`
        -   `<lastreleasedphysicalkey_not>`
        -   `<elapsedtimesincelastreleased_greaterthan>`
        -   `<elapsedtimesincelastreleased_lessthan>`
-   🐛 Bug Fixes
    -   Fixed an issue that multi-touch extension might stop working after wake up.

## Karabiner 10.7.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.7.0.dmg)
-   📅 Release date
    -   Aug 10, 2015
-   💥 Breaking Changes
    -   The default mouse keys scroll direction has been changed to natural.
    -   `<inputsourcedetail_only>` and `<inputsourcedetail_not>` filters have been merged into `<inputsource_only>` and `<inputsource_not>`.<br/>
        Please use `<inputsource_only>` and `<inputsource_not>` in your private.xml.
    -   Launcher Mode v2 uses own modifier flag in order to improve usability.<br />
        If you extended Launcher Mode v2 by `LAUNCHER_MODE_V2_EXTRA`, please remove `ModifierFlag::NONE` from `LAUNCHER_MODE_V2_EXTRA`.
    -   Example:
        -   old: `<autogen>__KeyDownUpToKey__ KeyCode::A, ModifierFlag::NONE, KeyCode::VK_OPEN_URL_APP_Activity_Monitor</autogen>`
        -   new: `<autogen>__KeyDownUpToKey__ KeyCode::A, KeyCode::VK_OPEN_URL_APP_Activity_Monitor</autogen>`
-   ⚡️ Improvements
    -   New option has been added into command line interface: `toggle`, `be_careful_to_use__clear_all_values_by_name`
    -   New option has been added into post-hid-event command line utility: `--flag`
    -   "Status Message > Show caps lock state" option has been added.
    -   Multiple displays support has been improved. The status message will be shown in the all screen.
    -   Fast User Switching support has been improved.
    -   Prepared settings have been updated.
    -   `__DropAllKeys__` has been added.
    -   `Option::KEYTOKEY_DELAYED_ACTION` has been added.
    -   `Option::KEYTOKEY_INCREASE_MODIFIER_FLAGS` has been added.
    -   `Option::SIMULTANEOUSKEYPRESSES_POST_FROM_EVENTS_AS_RAW` has been added.
    -   The following filters have been added.
        -   `<pressingphysicalkeys_greaterthan>`
        -   `<pressingphysicalkeys_lessthan>`
    -   `__HoldingKeyToKey__` has been improved at you pressed modifiers while holding target key down.
    -   ModifierFlag pattern matching has been introduced into `Option::KEYTOKEY_AFTER_KEYUP`.
    -   `<background />` support has been added into `<vkopenurldef>` tag.
    -   high_priority attribute has been introduced into `<identifier>` tag.
    -   `<appdef>` behavior has been improved. It preserves prepared settings when you use `<appdef>` in private.xml for bundle identifiers that are in prepared appdef.xml.
    -   `KeyCode::VK_MOUSEKEY_FIXED_DISTANCE_SCROLL_*` have been added.
-   🐛 Bug Fixes
    -   Fixed an issue that some Java apps might be crash when AXNotifier is enabled. (Eclipse, Screencast-O-Matic, RazorSQL, EditRocket)
    -   The kext loading issue on macOS 10.11 beta 6 has been fixed.

## Karabiner 10.6.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.6.0.dmg)
-   📅 Release date
    -   Jan 13, 2015
-   ⚡️ Improvements
    -   "Sort by name" and "Sort by created" button have been added in Preferences > MenuBar.
    -   Prepared settings have been updated.
-   🐛 Bug Fixes
    -   A following prepared setting has been fixed:
        -   General > Disable an internal keyboard while external keyboards are connected.

## Karabiner 10.5.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.5.0.dmg)
-   📅 Release date
    -   Dec 12, 2014
-   🐛 Bug Fixes
    -   Fixed an issue that some Java apps might be crash when AXNotifier is enabled. (IntelliJ IDEA, PhpStorm, RubyMine, Android Studio)
    -   Fixed an issue that `<device_only>` and `<device_not>` filters are ignored when multiple keyboards are connected and same keys are pressed at the same time.
-   ⚡️ Improvements
    -   "Ignore bouncing (chattering) events" setting has been added.
    -   Spotlight has been supported in `<only>` and `<not>` filters.
    -   Quit button has been added into Preferences.
    -   Simultaneous presses detection with rapid key typing has been improved.
    -   ModifierFlag manipulation when key up has been improved.
    -   Prepared settings have been updated.
    -   `Option::FORCENUMLOCKON_FORCE_OFF` has been added.
    -   `__KeyDownUpToKey__` has been added.
    -   `<include>` ignores missing files. (Karabiner does not show an alert dialog when `<include>` refers missing files.)

## Karabiner 10.4.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.4.0.dmg)
-   📅 Release date
    -   Oct 14, 2014
-   🐛 Bug Fixes
    -   A broken prepared setting has been fixed.

## Karabiner 10.3.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.3.0.dmg)
-   📅 Release date
    -   Oct 7, 2014
-   ⚡️ Improvements
    -   Stability at reloading XML has been improved.
    -   macOS 10.10 support has been improved.
    -   Prepared settings have been updated.
    -   "Check for updates" (Sparkle) has been updated.
    -   "Restart AXNotifier" button has been added into Preferences.
    -   The following filters have been added.
        -   `<modifierlocked_only>`
        -   `<modifierlocked_not>`
        -   `<modifierstuck_only>`
        -   `<modifierstuck_not>`
-   🐛 Bug Fixes
    Fixed an issue that EventViewer does not show control-tab and control-shift-tab event when Full Keyboard Access is enabled.

## Karabiner 10.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.2.0.dmg)
-   📅 Release date
    -   Aug 20, 2014
-   🐛 Bug Fixes
    -   Fixed an issue that shortcuts (eg. Ctrl-C, Ctrl-V) might not work properly in Microsoft Remote Desktop.
    -   Fixed an issue that some Java apps will be crash.
-   ⚡️ Improvements
    -   Added an option to disable AXNotifier. ("AXNotifier" tab in Preferences.)
    -   Updated prepared settings.
    -   Some minor improvements.
    -   Profile management functions have been added into command line interface.
    -   `__HoldingKeyToKey__` and `__KeyOverlaidModifier__` support `Option::KEYTOKEY_BEFORE_KEYDOWN` and `Option::KEYTOKEY_AFTER_KEYUP`.
    -   You can also use `__{ }__` as well as `@begin`, `@end`.

## Karabiner 10.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.1.0.dmg)
-   📅 Release date
    -   Jul 21, 2014
-   🐛 Bug Fixes
    -   Fixed an issue that the continuous key sequence will be improper order in environments which VMWare Fusion is installed.
    -   Fixed an issue that a message "Karabiner cannot connect with kernel extension" might be shown in some environment.
-   ⚡️ Improvements
    -   Show an error alert when Karabiner is not placed in /Applications.
    -   Added `KeyCode::VK_IOHIKEYBOARD_TOGGLE_NUMLOCK`.
    -   Updated prepared settings.
    -   Some minor improvements.

## Karabiner 10.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/Karabiner-10.0.0.dmg)
-   📅 Release date
    -   Jul 9, 2014
-   💥 Breaking Changes
    -   KeyRemap4MacBook has been renamed to "Karabiner".
    -   `KeyCode::VK_JIS_TEMPORARY_*` are removed.<br/>
        Please use `<inputsource_filter>`, `Option::KEYTOKEY_BEFORE_KEYDOWN`, `Option::KEYTOKEY_AFTER_KEYUP`, `KeyCode::JIS_EISUU` and `KeyCode::JIS_KANA` instead.
-   🐛 Bug Fixes
    -   Fixed an issue that a message "Kernel extension is not loaded" might be shown in some environment.
    -   Fixed an issue that status message will not be shown properly when you are using multiple displays.
-   ⚡️ Improvements
    -   AXNotifier has been added.<br/>
        AXNotifier allows you to observe the window name (window title) and the focused ui element role (eg. whether textarea or not).<br/>
        For example, a setting that allows you to use hjkl keys as arrow keys in Finder when you are not editing text such as filename has been added.
    -   A command line utility "warp-mouse-cursor-position" has been added.<br/>
        Settings which use this utility have been added, too.<br/>
        For example, this setting allows you to move mouse cursor by tapping fn key:
        -   Custom Shortcuts
            -   Move mouse cursor to the center of the frontmost app's window:
                -   By pressing fn key alone.
    -   Updated prepared settings.
    -   Some minor improvements.
    -   You can add your own modifiers by `<modifierdef>`.
    -   Added `<windowname_only>` and `<windowname_not>` filters.
    -   Added `<uielementrole_only>` and `<uielementrole_not>` filters.
    -   Added `__PointingRelativeToKey__`.
    -   Added `__PassThrough__`. You can disable all settings in specific situations.<br/>
        For example, this item allow you to disable all settings while you are using virtual machine.<br/>
        (This setting is already included in prepared settings.)
    -   You can use KeyCode and ConsumerKeyCode in `__PointingRelativeToScroll__`.
    -   Added ThresholdMillisecond into `__HoldingKeyToKey__`.<br/>
        You can control a holding threshold:
    -   Added `__BlockUntilKeyUp__`.
    -   Added `Option::KEYOVERLAIDMODIFIER_REPEAT_TOKEYS`.
    -   Added `Option::DROPSCROLLWHEEL_DROP_MOMENTUM_SCROLL`.
    -   Added `KeyCode::VK_NEGATIVE_LOCK_*`. (eg. `KeyCode::VK_NEGATIVE_LOCK_COMMAND_L`, `KeyCode::VK_NEGATIVE_LOCK_SHIFT_L`.)
    -   Added `KeyCode::VK_STICKY_ACTIVE_MODIFIERS_*`:
        -   `KeyCode::VK_STICKY_ACTIVE_MODIFIERS_TOGGLE`
        -   `KeyCode::VK_STICKY_ACTIVE_MODIFIERS_FORCE_ON`
        -   `KeyCode::VK_STICKY_ACTIVE_MODIFIERS_FORCE_OFF`

## KeyRemap4MacBook 9.3.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-9.3.0.dmg)
-   📅 Release date
    -   Feb 15, 2014
-   🐛 Bug Fixes
    -   Fixed an issue that "Kernel extension is not loaded" alert might be shown on some machines when automatic login is enabled.
-   ✨ New Features
    -   These manipulators have been integrated into `__KeyToKey__`.
        You can change KeyCode, ConsumerKeyCode and PointingButton by `__KeyToKey__`.
        -   `__KeyToConsumer__`
        -   `__ConsumerToKey__`
        -   `__ConsumerToConsumer__`
        -   `__KeyToPointingButton__`
        -   `__PointingButtonToKey__`
        -   `__PointingButtonToPointingButton__`
    -   You can use KeyCode, ConsumerKeyCode and PointingButton in these manipulators:
        -   `__KeyOverlaidModifier__`
        -   `__HoldingKeyToKey__`
        -   `__SimultaneousKeyPresses__`
        -   `__DoublePressModifier__`
        -   `__ScrollWheelToKey__`
        -   `__PointingRelativeToScroll__`
    -   `DelayUntilRepeat` and `KeyRepeat` have been added.
        You can change the delay and speed of keyboard repeat per autogen.
-   ⚡️ Improvements
    -   Updated prepared settings.
    -   Improved `KeyCode::VK_CONFIG_*` behavior in the edge case.

## KeyRemap4MacBook 9.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-9.2.0.dmg)
-   📅 Release date
    -   Nov 29, 2013
-   🐛 Bug Fixes
    -   Fixed an issue that system might crash when you disconnected a keyboard.
-   ⚡️ Improvements
    -   KeyRemap4MacBook no longer requires system restart at installing or upgrading.
        If you need to restart system for some reason, KeyRemap4MacBook will show an alert which urges you to restart.
    -   Updated some prepared settings.

## KeyRemap4MacBook 9.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-9.0.0.dmg)
-   📅 Release date
    -   Nov 15, 2013
-   💥 Breaking Changes
    -   Optimized for macOS 10.9.
        KeyRemap4MacBook 9.0.0 requires macOS 10.9+.
    -   Drop power button support due to limitations of macOS 10.9.
        You can no longer change the power button on MacBook.
-   ✨ New Features
    -   Added delay configurations into multi-touch extension.
-   ⚡️ Improvements
    -   Updated installer.
    -   Updated prepared settings
    -   Signed with Developer ID.
    -   Some minor improvements.
-   🐛 Bug Fixes
    -   Fixed an issue that ENV_HOME does not work properly in included xml.
    -   Fixed an issue that new plugged devices will not be recognized on macOS 10.9.
    -   Fixed an issue that KeyRemap4MacBook disables the shut down dialog.
    -   Fixed an issue that Fn key on Leopold FC660M cancels mouse dragging.
    -   Fixed "MarkSet" in Emacs Mode.

## KeyRemap4MacBook 8.4.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-8.4.0.dmg)
-   📅 Release date
    -   Sep 23, 2013
-   ✨ New Features
    -   `@begin` and `@end` have been introduced in private.xml.
        You can use more than one key to remapped keys with `__KeyOverlaidModifier__`, `__DoublePressModifier__`.
    -   Shell commands execution has been supported with `KeyCode::VK_OPEN_URL_*`.
-   ⚡️ Improvements
    -   Icons have been refined. (Thanks to Kouji TAMURA.)

## KeyRemap4MacBook 8.3.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-8.3.0.dmg)
-   📅 Release date
    -   May 19, 2013
-   🐛 Bug Fixes
    -   Fixed an issue that "Look up" feature of macOS (tap trackpad with three fingers) does not work properly.
-   ⚡️ Improvements
    -   Some minor improvements.

## KeyRemap4MacBook 8.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-8.2.0.dmg)
-   📅 Release date
    -   May 17, 2013
-   🐛 Bug Fixes
    -   Fixed an issue that object selection is disabled on Adobe Fireworks.
    -   Fixed an issue that "General > Don't remap XXX" does not take effect immediately.
    -   Fixed an issue that control-eject shortcut does not work properly on macOS 10.7 and 10.6.

## KeyRemap4MacBook 8.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-8.1.0.dmg)
-   📅 Release date
    -   May 12, 2013
-   ✨ New Features
    -   Power button remapping has been supported. (Thanks to Peter Kamb who is the author of PowerKey.)
    -   Added "Quit KeyRemap4MacBook" into menu bar.
    -   Added some styles into status message indicator.
    -   Added `KeyCode::VK_OPEN_URL_*`.
    -   Added `KeyCode::VK_PARTIAL_KEYDOWN` and `KeyCode::VK_PARTIAL_KEYUP`.
    -   Added `Option::POINTINGRELATIVETOSCROLL_TOKEYS`.
    -   Added `__FlipPointingRelative__`.
    -   Added `__FlipScrollWheel__`.
    -   Added filters:
        -   `<lastpressedphysicalkey_not>`
        -   `<lastpressedphysicalkey_only>`
        -   `<elapsedtimesincelastpressed_greaterthan>`
        -   `<elapsedtimesincelastpressed_lessthan>`
-   ⚡️ Improvements
    -   Improved compatibility with SmoothMouse.
    -   Supported more than three keys at `__SimultaneousKeyPresses__`.
    -   Some minor improvements.

## KeyRemap4MacBook 8.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-8.0.0.dmg)
-   📅 Release date
    -   Jan 30, 2013
-   💥 Breaking Changes
    -   Changed KeyRemap4MacBook_cli location.
-   ✨ New Features
    -   Integrated a status message indicator. (Removed Growl support.)
    -   Added a preference of ignored area into "multi-touch extension".
    -   Dynamic `KeyCode::VK_CHANGE_INPUTSOURCE` definition feature has been added.
    -   `<inputsource_only>` definition feature has been added.
        Added `Option::SIMULTANEOUSKEYPRESSES_STRICT_KEY_ORDER`.
        Added `DeviceLocation` into `<device_only>`, `<device_not>` filters.
-   ⚡️ Improvements
    -   Preferences has been integrated into app.
    -   Changed `--KeyToKey--` to `__KeyToKey__` at `<autogen>`.
    -   Some minor improvements.

## KeyRemap4MacBook 7.8.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.8.0.dmg)
-   📅 Release date
    -   Jun 26, 2012
-   🐛 Bug Fixes
    -   Fixed an issue that "General > Don't restore modifiers in the mouse event" does not work properly.
    -   Fixed an issue that private.xml does not work properly if `<identifier>` contains white space.
    -   Some minor improvements.

## KeyRemap4MacBook 7.7.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.7.0.dmg)
-   📅 Release date
    -   May 9, 2012
-   🐛 Bug Fixes
    -   Fixed an issue introduced in version 7.6.0 that detecting of Input Sources does not work properly in Japanese and some other languages.

## KeyRemap4MacBook 7.6.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.6.0.dmg)
-   📅 Release date
    -   May 8, 2012
-   ✨ New Features
    -   Added `<replacementdef>`. You can replace preset settings behavior by this.
    -   Added `<include>`. You can load external xml files in private.xml.
    -   Added `--ScrollWheelToKey--`.
    -   Added `--ScrollWheelToScrollWheel--`.
    -   Added `KeyCode::VK_WAIT_*`.
-   ⚡️ Improvements
    -   Improved XML processing engine. (XML reloading is 2x faster.)
    -   Some minor improvements.
    -   Increased prepared settings.

## KeyRemap4MacBook 7.5.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.5.0.pkg.zip)
-   📅 Release date
    -   Nov 2, 2011
-   ✨ New Features
    -   Support Growl-1.3 on notifications.
    -   Dynamic ApplicationType,DeviceVendor,DeviceProduct definition feature has been added.
    -   Added `--StripModifierFromScrollWheel--`.
    -   Added `Option::KEYTOKEY_BEFORE_KEYDOWN`, `Option::KEYTOKEY_AFTER_KEYUP`.
    -   Added `KeyCode::VK_CONSUMERKEY_*`.
-   ⚡️ Improvements
    -   Some minor improvements.
    -   Increased prepared settings.
-   🐛 Bug Fixes
    -   Resolved a minor installer issue.

## KeyRemap4MacBook 7.4.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.4.0.pkg.zip)
-   📅 Release date
    -   Aug 23, 2011
-   💥 Breaking Changes
    -   Removed "General > Enable CapsLock LED Hack" from preferences.
        If you're using this setting for PCKeyboardHack, use "No Action" configuration instead.
    -   Cleaned up "Simultaneous Vi Mode".
        (Some options have been moved into "Home Row Arrow and Modifier Mode".)
-   ✨ New Features
    -   Added "[Key Overlaid Modifier] Initial Modifier Wait" preference into "Key Repeat" tab.
        KeyOverlaidModifier changes key to modifier after this wait.
        This preference is useful if your typing speed is too fast.
    -   Added `KeyCode::VK_STICKY_*_FORCE_ON`, `KeyCode::VK_STICKY_*_FORCE_OFF`.
    -   Added `--DropScrollWheel--`.
-   ⚡️ Improvements
    -   Some improvements on Mac macOS 10.7 (Lion).
    -   Some minor improvements.
    -   Increased prepared settings.

## KeyRemap4MacBook 7.3.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.3.0.pkg.zip)
-   📅 Release date
    -   May 17, 2011
-   ✨ New Features
    -   Added `KeyCode::VK_MOUSEKEY_BUTTON_*`.
    -   Added `Option::NOREPEAT`.
    -   Added `DeviceProduct::ANY`.
-   ⚡️ Improvements
    -   Improved stability when using Sticky Keys in Universal Access.
    -   Improved stability when using multi-touch extension together.
    -   Improved "Lazy-Modifier (`KeyCode::VK_LAZY_*`)" behavior.
    -   Some minor improvements.
    -   Increased prepared settings.

## KeyRemap4MacBook 7.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.2.0.pkg.zip)
-   📅 Release date
    -   Mar 8, 2011
-   🐛 Bug Fixes
    -   Fixed an issue that Growl notification did not work in specific environment.
    -   Fixed an issue that the default setting of checkForUpdate was "Nothing".
-   ⚡️ Improvements
    -   Improved multi-touch extension around sleep/wakeup.
    -   Increased prepared settings.

## KeyRemap4MacBook 7.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.1.0.pkg.zip)
-   📅 Release date
    -   Feb 22, 2011
-   ✨ New Features
    -   Added setting to be able to use "Logitech Number Pad" which we were not able not use in Mac macOS.
        Activate "Change KeyPad Key > Logitech Number Pad Hack".
    -   Replaced StatusWindow with Growl.
        StatusWindow was displaying the lock state of modifiers and extra message.
        Now, these messages are shown by Growl.
    -   Attached an application named "multi-touch extension".
        This application activates specific setting while fingers touch the multi-touch device.
        ThumbSense is one of the function which this application supplies.
    -   Added `<modifier_only>`, `<modifier_not>` filters.
    -   Added `--ForceNumLockOn--` to `<autogen>`.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 7.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-7.0.0.pkg.zip)
-   📅 Release date
    -   Dec 14, 2010
-   ✨ New Features
    -   Dynamic key configuration rule adding has been added.
        Now, you can add your original settings very very easily.
        You don't need to build a package from source code anymore.
    -   Added momentum scroll feature to "CursorMove to ScrollWheel" on Pointing Devices.
        If you don't like momentum scroll, turn on "Disable Momentum Scroll" by System Preferences.
    -   Added "Mouse Keys Mode". You can move mouse pointer by hjkl keys.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 6.9.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.9.0.pkg.zip)
-   📅 Release date
    -   Sep 14, 2010
-   ⚡️ Improvements
    -   Improved "Simultaneous Vi Mode" behavior. You can use Vi style navigation (hjkl) on all applications.
    -   Increased prepared settings.
-   🐛 Bug Fixes
    -   Fixed a problem that a broken package may be generated depending on environment when we build a package from a source code.
    -   Fixed a problem which slight setting did not work properly.
    -   Fixed a minor problem around C-x prefix of "Emacs Mode".

## KeyRemap4MacBook 6.8.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.8.0.pkg.zip)
-   📅 Release date
    -   Jul 27, 2010
-   💥 Breaking Changes
    -   Changed the default value of key repeat wait.
        Please set "[Key Repeat] wait" to "30ms" from "Key Repeat" tab if you prefer the previous default value.
-   ✨ New Features
    -   Added "Pass Through Mode". You can cancel all settings temporarily.
    -   Added "Sticky Modifiers".
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 6.7.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.7.0.pkg.zip)
-   📅 Release date
    -   May 15, 2010
-   🐛 Bug Fixes
    -   Fixed the problem that a key and a mouse were not changed when we used KeyRemap4MacBook-6.6.0 with USB Overdrive.

## KeyRemap4MacBook 6.6.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.6.0.pkg.zip)
-   📅 Release date
    -   May 11, 2010
-   ✨ New Features
    -   Added a function to define effective setting only with a specific keyboard. For example, "Change Control_L to Command_L" only in Happy Hacking Keyboard.
    -   Added a function of "Simultaneous Key Presses" re-mapping.
    -   Added virtual modifiers (`ModifierFlag::EXTRA1` - `ModifierFlag::EXTRA5`).
    -   Added a function to set the repeat speed of the functional keys (volume adjustment, etc).
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 6.5.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.5.0.pkg.zip)
-   📅 Release date
    -   Mar 16, 2010
-   ✨ New Features
    -   Added the key repeat feature to re-mapped functional keys (volume adjustment, etc),
    -   Added an Event Viewer application that could confirm a key event, a mouse event.
    -   Added "Complete Vi Mode" that you can move the cursor only in "hjkl" without pushing the command key or any modifier keys.
    -   Added `KeyCode::VK_CHANGE_INPUTMODE_FRENCH`, and keys for the other languages. It is a virtual key to change the Input Source directly.
-   ⚡️ Improvements
    -   Merged the configuration GUI of menu bar to the system preference pane.
    -   Increased prepared settings.

## KeyRemap4MacBook 6.4.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.4.0.pkg.zip)
-   📅 Release date
    -   Jan 21, 2010
-   ⚡️ Improvements
    -   Improved stability when using with the driver of the 3rd vender such as "Logitech Control Center".
    -   Improved Paralles Desktop support at the recognition of the application.
-   🐛 Bug Fixes
    -   Fixed a mouse drag movement when convert a key into a mouse click.

## KeyRemap4MacBook 6.3.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.3.0.pkg.tar.gz)
-   📅 Release date
    -   Jan 5, 2010
-   ✨ New Features
    -   Supported Fast User Switching.
    -   Added software update feature.
-   ⚡️ Improvements
    -   Improved the movement of the re-mapping.
    -   Improved the judgement method of the internal/external keyboard.
    -   Increased prepared settings.

## KeyRemap4MacBook 6.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.2.0.pkg.tar.gz)
-   📅 Release date
    -   Nov 12, 2009
-   🐛 Bug Fixes
    -   Fixed the issue that the server process crashes in English environment.

## KeyRemap4MacBook 6.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.1.0.pkg.tar.gz)
-   📅 Release date
    -   Nov 11, 2009
-   💥 Breaking Changes
    -   Changed to enable the remapping of the third vendor's devices by default.
-   🐛 Bug Fixes
    -   Fixed the memory leak of the server process.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 6.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-6.0.0.pkg.tar.gz)
-   📅 Release date
    -   Oct 8, 2009
-   ✨ New Features
    -   Stable release for Snow Leopard.
-   🐛 Bug Fixes
    -   Fixed the third vendor's keyboard/mouse handling.
    -   Fixed the issue that the fn key doesn't work when "Don't Remap the Internal/External Keyboard" is activated.
    -   Fixed the uninstaller.
    -   Fixed the CapsLock handling.
    -   Fixed to run PreferencePane in 64bit.
-   ⚡️ Improvements
    -   Improved behavior of key-repeating (continuing even if mouse button is clicked.)
    -   Improved the compatibility with Spaces.
    -   Improved the stability in the 64bit environment.

## KeyRemap4MacBook 5.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-5.1.0.pkg.tar.gz)
-   📅 Release date
    -   May 26, 2008
-   ✨ New Features
    -   Added uninstaller.
-   🐛 Bug Fixes
    -   Fixed the kernel panic after returning from hibernation.
    -   Fixed the kernel panic when all keyboard are detached on iMac.
    -   Fixed the issue which "SettingList" didn't work on some environment.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 5.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-5.0.0.pkg.tar.gz)
-   📅 Release date
    -   May 7, 2008
-   ✨ New Features
    -   Added the multi-user support.
    -   Added the multiple settings per user.
    -   Added remappings which are effective at only specific applications. (ex. Return -> CMD+O only in Finder).
        "Emacs Mode" will be disabled in Terminal.app and Emacs.app automatically.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 4.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-4.0.0.pkg.tar.gz)
-   📅 Release date
    -   Apr 2, 2008
-   💥 Breaking Changes
    -   Changed a place to install. (/Library/org.pqrs/KeyRemap4MacBook)
-   🐛 Bug Fixes
    -   Fixed an issue which disable any remappings when you logged out.
-   ✨ New Features
    -   Added the feature to enable remapping for only inside keyboard or an outside keyboard.
    -   Supported PointingDevice remappings (Key to Mouseclick, Fn+CursorMove to ScrollWheel).
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 3.2.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-3.2.0.pkg.tar.gz)
-   📅 Release date
    -   Feb 29, 2008
-   ✨ New Features
    -   Support PowerBook G4 & iBook.
-   🐛 Bug Fixes
    -   Fixed the key repeat issue on VMware + emacsmode.
    -   Fixed a minor PreferencePane issue.
-   ⚡️ Improvements
    -   Added an existence check of DoubleCommand to installer. If DoubleCommand has already installed, the installation will be aborted.
    -   Increased prepared settings.

## KeyRemap4MacBook 3.1.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-3.1.0.pkg.tar.gz)
-   📅 Release date
    -   Feb 18, 2008
-   🐛 Bug Fixes
    -   Correct the key repeat behavior.
    -   Fixed a minor PreferencePane issue.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 3.0.0

-   [📦 Download](https://github.com/tekezo/Karabiner/releases/download/files/KeyRemap4MacBook-3.0.0.pkg.tar.gz)
-   📅 Release date
    -   Feb 4, 2008
-   💥 Breaking Changes
    -   Renamed many sysctl entries. Please set up by PreferencePane if you upgrade from older version.
-   ✨ New Features
    -   Added PreferencePane. Now, you can configure by System Preferences.
    -   Added Key Repeat feature.
-   ⚡️ Improvements
    -   Improved handling of CapsLock.
    -   Increased prepared settings.

## KeyRemap4MacBook 2.3.0

-   📅 Release date
    -   Dec 15, 2007
-   🐛 Bug Fixes
    -   Fixed the issue around arrow keys and delete key when remap.fn2\* is enable.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 2.2.0

-   📅 Release date
    -   Nov 29, 2007
-   🐛 Bug Fixes
    -   Fixed the issue around "key to modifier" (enter2*, return2option, jis_eisuu2*, jis_kana2\*).
-   ✨ New Features
    -   Support PowerBook enter key.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 2.1.0

-   📅 Release date
    -   Nov 15, 2007
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 2.0.0

-   📅 Release date
    -   Nov 1, 2007
-   ✨ New Features
    -   Added support for Leopard.
    -   Added support for PowerBook restrictively.
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 1.5.0

-   📅 Release date
    -   Oct 10, 2007
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 1.4.0

-   📅 Release date
    -   Sep 9, 2007
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 1.3.0

-   📅 Release date
    -   Aug 15, 2007
-   ⚡️ Improvements
    -   Updated StartupScript.
    -   Increased prepared settings.

## KeyRemap4MacBook 1.2.0

-   📅 Release date
    -   Jun 10, 2007
-   ⚡️ Improvements
    -   Increased prepared settings.

## KeyRemap4MacBook 1.0.2

-   📅 Release date
    -   Feb 5, 2007
-   ✨ New Features
    -   Universal Binary.

## KeyRemap4MacBook 1.0.1

-   📅 Release date
    -   Oct 9, 2006
-   ✨ New Features
    -   Initial release.
