---
title: 'Release notes'
weight: 900
simple_list: true
exclude_search: true
---

<style>
.td-content img {
    margin: 20px 0;
    border: 1px solid $border-color;
    border-radius: 10px;
}
.td-content > ul > li {
    list-style-type: none;
    font-weight: bold;
}
.td-content > ul > li > ul {
    font-weight: normal;
}
</style>

## Karabiner-Elements 12.9.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.9.0/Karabiner-Elements-12.9.0.dmg)
-   📅 Release date
    -   Jan 18, 2020
-   ✨ New Features
    -   `Open config folder` button has been added into Preferences.<br>
        The feature provides [an easy way exporting configuration](https://pqrs.org/osx/karabiner/document.html#export).
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
        -   Documentation:
            -   [Usage](https://pqrs.org/osx/karabiner/document.html#multitouch-extension)
            -   [How to integrate MultitouchExtension to your complex modifications](https://pqrs.org/osx/karabiner/json.html#multitouch-extension)
    -   Dark Mode has been supported.
    -   Added `--set-variables` option into `karabiner_cli`.
-   🐛 Bug Fixes
    -   Fixed an issue that Karabiner-Elements might stop working after sleep on macOS Catalina.

## Karabiner-Elements 12.6.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.6.0/Karabiner-Elements-12.6.0.dmg)
-   📅 Release date
    -   Aug 16, 2019
-   ✨ New Features
    -   Support macOS Catalina.<br/>
        (You need [an extra configuration](https://pqrs.org/osx/karabiner/document.html#usage-catalina) on macOS Catalina.)
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
        Please press the described key or button again to dismiss the alert.<br/>
        <img src="https://pqrs.org/osx/karabiner/img/news/v12.4.0_0.png" alt="alert" style="width: 420px" />
-   🐛 Bug Fixes
    -   Fixed a key stuck issue which occurs when the key is held down before Karabiner-Elements opens the device.
-   ⚡️ Improvements
    -   Event code format on EventViewer changed to decimal number from hex.

## Karabiner-Elements 12.3.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v12.3.0/Karabiner-Elements-12.3.0.dmg)
-   📅 Release date
    -   Apr 24, 2019
-   💥 Breaking changes
    -   complex modifications json will be checked strictly since this release.<br/>
        Please check [error messages](https://pqrs.org/osx/karabiner/json.html#location) if your complex modifications do not work after upgrade.
-   ✨ New Features
    -   Added [Change mouse motion to scroll](https://ke-complex-modifications.pqrs.org/#mouse_motion_to_scroll) feature.<br/>
        -   Note: You have to enable your mice on [Devices tab](https://pqrs.org/osx/karabiner/document.html#configuration-devices) when you want to use this feature.
    -   Added `--lint-complex-modifications` option into `karabiner_cli`.
        It allows you checks a complex-modifications json file.
-   ⚡️ Improvements
    -   Set Karabiner-Elements.app and Karabiner-EventViewer.app immutable
        in order to ensure unremovable them except built-in uninstaller.
        Please use the [uninstaller](https://pqrs.org/osx/karabiner/document.html#uninstall) when you want to remove Karabiner-Elements.
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
-   💥 Breaking changes
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
-   💥 Breaking changes
    -   macOS 10.11 support has been dropped.<br />
        Karabiner-Elements works on macOS 10.12 (Sierra) or later.
    -   `Keyboard type` in the virtual keyboard preferences has been removed. (Adverse effect of virtual keyboard improvement.)<br />
        Please change the keyboard type from `System Preferences > Keyboard > Change Keyboard Type...`.
        <img src="https://pqrs.org/osx/karabiner/img/news/v12.0.0_0.png" alt="Keyboard Preferences" style="width: 668px" />
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
        -   [json example](https://pqrs.org/osx/karabiner/json.html#typical-complex_modifications-examples-simultaneous-equal-delete-to-forward-delete)
        -   [Document](https://pqrs.org/osx/karabiner/json.html#simultaneous)
-   ⚡️ Improvements
    -   Improved Mouse key scroll wheel direction referring `System Preferences > Mouse > Scroll direction`.
    -   Improved modifier flags handling around pointing button manipulations.
    -   Mouse keys have been added into Simple Modifications.
        <img src="https://pqrs.org/osx/karabiner/img/news/v11.6.0_0.png" alt="mouse keys in Simple Modifications" style="width: 1000px" />
    -   The eject key has been added into the from key of Simple Modifications.
    -   The Vendor ID and Product ID of virtual devices has been changed. (0x0,0x0 -> 0x16c0,0x27db and 0x16c0,0x27da)

## Karabiner-Elements 11.5.0

-   [📦 Download](https://github.com/pqrs-org/Karabiner-Elements/releases/download/v11.5.0/Karabiner-Elements-11.5.0.dmg)
-   📅 Release date
    -   Dec 30, 2017
-   ✨ New Features
    -   `to_if_held_down` has been added.
        -   Examples:
            -   [Open Alfred 3 if escape is held down](https://pqrs.org/osx/karabiner/json.html#typical-complex_modifications-examples-open-alfred-when-escape-is-held-down)
            -   [Quit application by holding command-q](https://ke-complex-modifications.pqrs.org/#command_q)
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
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/mouse_keys_simple.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/mouse_keys_simple.json.erb)
            -   Mouse keys (full)
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/mouse_keys_full.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/mouse_keys_full.json.erb)
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
        -   Examples:
            -   Quit application by pressing command-q twice
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/command_q.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/command_q.json.erb)
            -   Emacs key bindings (C-x key strokes)
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/emacs_key_bindings.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/emacs_key_bindings.json.rb)
    -   `input_source_if` and `input_source_unless` has been added to `conditions`.
        -   [Document](https://pqrs.org/osx/karabiner/json.html#condition-definition-input-source)
        -   Example:
            -   [example_input_source.json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/example_input_source.json)
    -   `select_input_source` has been added.
        -   [Document](https://pqrs.org/osx/karabiner/json.html#to-event-definition)
        -   Example:
            -   [example_select_input_source.json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/example_select_input_source.json)
    -   `keyboard_type_if` and `keyboard_type_unless` has been added to `conditions`.
        -   Example
            -   Change control-[ to escape
                [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/example_keyboard_type.json)
                [(src)](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/example_keyboard_type.json.erb)
    -   The caps lock LED manipulation has been disabled with non Apple keyboards until it is enabled manually.
        <img src="https://pqrs.org/osx/karabiner/img/news/v11.1.16_0.png" alt="has caps lock led" style="width: 1000px" />
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

-   [📦 Download](/files/Karabiner-10.22.0.dmg)
-   📅 Release date
    -   Oct 31, 2016
-   🐛 Bug Fixes
    -   Fixed an issue that some Qt apps might be crash when AXNotifier is enabled. (VirtualBox, LyX, Wireshark)
-   ⚡️ Improvements
    -   Default setting of AXNotifier has been changed. (Enabled in Microsoft Office)
    -   Prepared settings have been updated.

## Karabiner 10.21.0

-   [📦 Download](/files/Karabiner-10.21.0.dmg)
-   📅 Release date
    -   Jul 5, 2016
-   🐛 Bug Fixes
    -   Fixed an issue that the initial key repeat rate of Karabiner will be set the slower value if you have not changed the key repeat rate in System Preferences.
    -   Fixed an issue that Karabiner does not save preferences properly in an edge case.
-   ⚡️ Improvements
    -   Prepared settings have been updated.

## Karabiner 10.20.0

-   [📦 Download](/files/Karabiner-10.20.0.dmg)
-   📅 Release date
    -   Jun 16, 2016
-   ✨ New Features
    -   `Option::FLIPSCROLLWHEEL_HORIZONTAL` and `Option::FLIPSCROLLWHEEL_VERTICAL` have been supported in `__PointingRelativeToScroll__`.
-   🐛 Bug Fixes
    -   Fixed an issue that Remote Desktop detection will be failed in some cases.
    -   Fixed an issue that input source switching settings does not work in some environments.

## Karabiner 10.19.0

-   [📦 Download](/files/Karabiner-10.19.0.dmg)
-   📅 Release date
    -   Jun 9, 2016
-   💥 Breaking changes
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
