---
title: 'input_source_if, input_source_unless'
weight: 400
---

Change an event if/unless the current input source is the specified value.

```json
{
    "type": "input_source_if",
    "input_sources": [
        {
            "language": "language regex",
            "input_source_id": "input source id regex",
            "input_mode_id": "input mode id regex"
        },
        {
            "language": "language regex",
            "input_source_id": "input source id regex",
            "input_mode_id": "input mode id regex"
        },
        ...
    ]
}
```

| Name            | Required     | Description                                    |
| --------------- | ------------ | ---------------------------------------------- |
| `type`          | **required** | `"input_source_if"` or `"input_source_unless"` |
| `input_sources` | **required** | Target input source definitions                |
| `description`   | optional     | A human-readable comment                       |

## `input_sources`

`input_sources` is an array of objects.

| Name              | Required | Description                                                                           |
| ----------------- | -------- | ------------------------------------------------------------------------------------- |
| `language`        | optional | The language regex such as `"^en$"`, `"^ja$"`                                         |
| `input_source_id` | optional | The input source id regex such as `"^com\\.apple\\.keylayout\\.US$"`                  |
| `input_mode_id`   | optional | The input mode id regex such as `"^com\\.apple\\.inputmethod\\.Japanese\\.Hiragana$"` |

### Multiple conditions

If you specify multiple values, condictions are joined by "and".

The following condition is matched if language is "ja" **and** input_mode_id is "com.apple.inputmethod.Japanese.Hiragana".

```json
{
    "type": "input_source_if",
    "input_sources": [
        {
            "language": "^ja$",
            "input_mode_id": "^com\\.apple\\.inputmethod\\.Japanese\\.Hiragana$"
        }
    ]
}
```

### Multiple entries

If you specify multiple entries at `input_sources`, conditions are joined by "or".

The following condition is matched if language is "en" **or** "ja".

```json
{
    "type": "input_source_if",
    "input_sources": [
        {
            "language": "^en$"
        },
        {
            "language": "^ja$"
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
