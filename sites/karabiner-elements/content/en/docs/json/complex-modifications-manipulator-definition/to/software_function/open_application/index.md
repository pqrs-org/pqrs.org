---
title: 'open_application'
weight: 300
---

Open an application, or if it's already running, bring it into focus.

{{% alert title="Available since" color="danger" %}}
`open_application` is available since Karabiner-Elements 15.0.19.
{{% /alert %}}


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

| Name                | Required | Description                              |
| ------------------- | -------- | ---------------------------------------- |
| `bundle_identifier` | Optional | The bundle identifier of the application |
| `file_path`         | Optional | The file path of the application         |

{{% alert title="Notes" color="primary" %}}

-   Either `bundle_identifier` or `file_path` must be specified.
-   If both are specified, `bundle_identifier` takes precedence, and `file_path` is ignored.

{{% /alert %}}

{{% alert title="How to find the bundle identifier or file path" color="primary" %}}

You can find the bundle identifier and file path in [EventViewer > Frontmost Application](/docs/manual/operation/eventviewer/).

{{% /alert %}}

## Examples

Open EventViewer by `right command + v`:

```json
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
```
