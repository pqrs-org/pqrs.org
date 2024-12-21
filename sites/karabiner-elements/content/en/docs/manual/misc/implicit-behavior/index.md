---
title: 'Implicit behavior'
weight: 200
---

Karabiner-Elements modifies following behavior automatically without any configurations:

## Share state of modifier keys with all connected keyboards

When you are using multiple keyboards, modifier keys are shared with all keyboards.

For example, pressing "shift key on keyboard1" and "space key on keyboard2" sends shift-space.

## Apply special handling to specific keys

The application launch keys is ignored when passed directly to macOS, so it will be configured to launch applications within Karabiner-Elements.

| Target key                                             | Special handling    |
| ------------------------------------------------------ | ------------------- |
| `consumer_key_code::al_consumer_control_configuration` | Open Music.app      |
| `consumer_key_code::al_word_processor`                 | Open Pages.app      |
| `consumer_key_code::al_text_editor`                    | Open TextEdit.app   |
| `consumer_key_code::al_spreadsheet`                    | Open Numbers.app    |
| `consumer_key_code::al_presentation_app`               | Open Keynote.app    |
| `consumer_key_code::al_email_reader`                   | Open Mail.app       |
| `consumer_key_code::al_calculator`                     | Open Calculator.app |
| `consumer_key_code::al_local_machine_browser`          | Open Finder.app     |
| `consumer_key_code::al_internet_browser`               | Open Safari.app     |
| `consumer_key_code::al_dictionary`                     | Open Dictionary.app |

The key event triggered by pressing Touch ID is ignored by macOS when passed through the Karabiner DriverKit VirtualHIDKeyboard. As a result, it is remapped to a Lock Key.

| Target key                                             | Special handling                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| `consumer_key_code::menu`<br/>(Touch ID pressed event) | `consumer_key_code::al_terminal_lock_or_screensaver`<br/>(Lock key) |

{{% alert color="info" %}}

Touch ID's fingerprint authentication is treated by macOS as a separate device from the keyboard.
Therefore, Karabiner-Elements does not interact with fingerprint authentication at all.
This ensures that fingerprint authentication operates independently of Karabiner-Elements.
For instance, even if the built-in keyboard is disabled using Karabiner-Elements, fingerprint authentication will continue to work.

Naturally, Touch ID's fingerprint authentication continues to work even if the keyboard is modified through Karabiner-Elements.

{{% /alert %}}

---

{{% alert color="info" %}}

## Other obsoleted features

### Add fn-key combinations

Karabiner implicitly changes fn-key combinations in Karabiner-Elements 15.0.0 and earlier.

| Key combination | Result         |
| --------------- | -------------- |
| fn-up arrow     | page up        |
| fn-down arrow   | page down      |
| fn-left arrow   | home           |
| fn-right arrow  | end            |
| fn-return       | enter          |
| fn-delete       | forward delete |

{{% /alert %}}
