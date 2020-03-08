---
title: 'to.select_input_source'
weight: 200
---

`select_input_source` change the current input source.

{{% alert title="Caution" color="warning" %}}

Switching to input sources which have input_mode_id (Chinese, Japanese, Korean, Vietnamese) may be failed due to an macOS issue.

For CJKV input sources, sending the input source switch shortcut (e.g., control-space) is better than using `select_input_source`.

{{% /alert %}}

```json
{
    "to": [
        {
            "select_input_source": {
                "language": "language regex",
                "input_source_id": "input source id regex",
                "input_mode_id": "input mode id regex"
            }
        }
    ]
}
```

| Name              | Required | Description                                                                           |
| ----------------- | -------- | ------------------------------------------------------------------------------------- |
| `language`        | Optional | The language regex such as `"^en$"`, `"^fr$"`                                         |
| `input_source_id` | Optional | The input source id regex such as `"^com\\.apple\\.keylayout\\.US$"`                  |
| `input_mode_id`   | Optional | The input mode id regex such as `"^com\\.apple\\.inputmethod\\.Japanese\\.Hiragana$"` |

## Example

Switch to French input source.

```json
{
    "to": [
        {
            "select_input_source": {
                "language": "^fr$"
            }
        }
    ]
}
```

## Investigate the input source identifiers

You can find the current input source identifiers by EventViewer > Variables tab.

```json
{
    "input_source": {
        "input_mode_id": "com.apple.inputmethod.Japanese",
        "input_source_id": "com.google.inputmethod.Japanese.base",
        "language": "ja"
    }
}
```

{{< local-image src="images/eventviewer-input-source-identifiers@2x.png" >}}
