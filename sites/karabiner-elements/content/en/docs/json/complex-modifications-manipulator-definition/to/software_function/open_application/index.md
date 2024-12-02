---
title: 'open_application'
weight: 300
---

Open an application, or if it's already running, bring it into focus.

```json
{
    "to": [
        {
            "software_function": {
                "open_application": { "bundle_identifier": "com.apple.Safari" }
            }
        }
    ]
}
```

| Priority | Name                | Required | Description                                      | Available since |
| -------- | ------------------- | -------- | ------------------------------------------------ | --------------- |
| 1        | `bundle_identifier` | Optional | The bundle identifier of the application         | v15.0.19        |
| 2        | `file_path`         | Optional | The file path of the application                 | v15.0.19        |
| 3        | `history_index`     | Optional | The index of the frontmost application's history | v15.3.4         |

{{% alert title="Notes" color="primary" %}}

-   Either `bundle_identifier`, `file_path` or `history_index` must be specified.
-   When multiple options are specified, the highest-priority one is used, and all others are ignored.

{{% /alert %}}

{{% alert title="How to find the bundle identifier or file path" color="primary" %}}

You can find the bundle identifier and file path in [EventViewer > Frontmost Application](/docs/manual/operation/eventviewer/).

{{% /alert %}}

{{% alert title="About history_index" color="primary" %}}

-   The `history_index` should be set as an integer >= 1.
-   When `history_index` is specified, the selected application will be the one that was recently focused.
    Applications opened through methods other than `open_application`, such as via Launchpad, are also included.
-   Only currently running applications are targeted; closed applications will not be selected.

{{% /alert %}}

## Examples

Open EventViewer by <kbd>right command + v</kbd>:

```json
{
    "description": "Open EventViewer by right command + v",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "v",
                "modifiers": {
                    "mandatory": ["right_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "file_path": "/Applications/Karabiner-EventViewer.app"
                        }
                    }
                }
            ]
        }
    ]
}
```

Cycle through and select the five most recently opened applications by <kbd>right shift + c</kbd>:

```json
{
    "description": "Cycle through the 5 most recently opened apps by right shift + c",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "c",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "history_index": 4
                        }
                    }
                }
            ]
        }
    ]
}
```
