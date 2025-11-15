---
title: 'open_application'
weight: 300
---

Open an application, or if it's already running, bring it into focus.

## Examples

Open EventViewer by <kbd>right command + v</kbd>:

{{< karabiner-elements-complex-modifications-usage >}}

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

Focus recently opened applications by <kbd>right command + 1</kbd>, <kbd>right command + 2</kbd>, <kbd>right command + 3</kbd>:

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "open_application frontmost_application_history_index by right_command + 1...3",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "1",
                "modifiers": {
                    "mandatory": ["right_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "frontmost_application_history_index": 1
                        }
                    }
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "2",
                "modifiers": {
                    "mandatory": ["right_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "frontmost_application_history_index": 2
                        }
                    }
                }
            ]
        },
        {
            "type": "basic",
            "from": {
                "key_code": "3",
                "modifiers": {
                    "mandatory": ["right_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "frontmost_application_history_index": 3
                        }
                    }
                }
            ]
        }
    ]
}
```

Focus the most recently used application (excluding Safari and Preview) using <kbd>left_command + r</kbd>:

{{% alert color="info" %}}

`frontmost_application_history_exclusion_bundle_identifiers` and `frontmost_application_history_exclusion_file_paths` are available since Karabiner-Elements v15.7.3.

{{% /alert %}}

{{< karabiner-elements-complex-modifications-usage >}}

```json
{
    "description": "Focus the most recently used application by left_command + r",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "r",
                "modifiers": {
                    "mandatory": ["left_command"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "software_function": {
                        "open_application": {
                            "frontmost_application_history_index": 1,
                            "frontmost_application_history_exclusion_bundle_identifiers": [
                                "^com\\.apple\\.Safari$",
                                "^com\\.apple\\.Preview$"
                            ]
                        }
                    }
                }
            ]
        }
    ]
}
```

## Specification

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

| Priority | Name                                  | Required | Description                                      | Available since |
| -------- | ------------------------------------- | -------- | ------------------------------------------------ | --------------- |
| 1        | `bundle_identifier`                   | Optional | The bundle identifier of the application         | v15.0.19        |
| 2        | `file_path`                           | Optional | The file path of the application                 | v15.0.19        |
| 3        | `frontmost_application_history_index` | Optional | The index of the frontmost application's history | v15.3.6         |

{{% alert title="Notes" color="primary" %}}

-   Either `bundle_identifier`, `file_path` or `frontmost_application_history_index` must be specified.
-   When multiple options are specified, the highest-priority one is used, and all others are ignored.

{{% /alert %}}

{{% alert title="How to find the bundle identifier or file path" color="primary" %}}

You can find the bundle identifier and file path in [EventViewer > Frontmost Application](/docs/manual/operation/eventviewer/).

{{% /alert %}}

{{% alert title="About frontmost_application_history_index" color="primary" %}}

-   The `frontmost_application_history_index` should be set as an integer >= 1.
-   When `frontmost_application_history_index` is specified, the selected application will be the one that was recently focused.
    Applications opened through methods other than `open_application`, such as via Launchpad, are also included.
-   Only currently running applications are targeted; closed applications will not be selected.
-   Only applications opened after Karabiner-Elements was launched are targeted.
-   When you also specify `frontmost_application_history_exclusion_bundle_identifiers` or `frontmost_application_history_exclusion_file_paths`, you can exclude particular applications.
    The values should be regular expressions that match the bundle identifier or file path.
    These filters are available since Karabiner-Elements v15.7.3.

{{% /alert %}}
