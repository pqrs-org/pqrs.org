---
title: 'frontmost_application_if, frontmost_application_unless'
weight: 100
---

Change an event if/unless the frontmost application is the specified application.

```json
{
    "type": "frontmost_application_if",
    "bundle_identifiers": [
        bundle identifier regex,
        bundle identifier regex,
        ...
    ],
    "file_paths": [
        file path regex,
        file path regex,
        ...
    ]
}
```

| Name                 | Required     | Description                                                                                    |
| -------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| `type`               | **required** | `"frontmost_application_if"` or `"frontmost_application_unless"`                               |
| `bundle_identifiers` | optional     | Bundle identifier regexs such as `["^com\\.apple\\.Terminal$", "^com\\.googlecode\\.iterm2$"]` |
| `file_paths`         | optional     | File path regexs such as `["/Finder$"]`                                                        |
| `description`        | optional     | A human-readable comment                                                                       |

## Multiple bundle identifiers or file paths

Multiple entries in `bundle_identifiers` and `file_paths` are joined by "or".

The following condition is matched if bundle identifier is "com.apple.Terminal" **or** "com.googlecode.iterm2".

```json
{
    "type": "frontmost_application_if",
    "bundle_identifiers": [
        "^com\\.apple\\.Terminal$",
        "^com\\.googlecode\\.iterm2$"
    ]
}
```

## Investigate the bundle identifier and file path

You can find the bundle identifier and file path by EventViewer > Frontmost Application tab.

Open EventViewer, and then switch the frontmost application to an application which you want to know the bundle identifer or file path.

{{< local-image src="images/eventviewer-frontmost-application@2x.png" >}}
