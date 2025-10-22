---
title: 'from event definition'
weight: 100
---

```json
{
    "from": {
        "key_code": "The name of key_code",
        "consumer_key_code": "The name of consumer_key_code",
        "pointing_button": "The name of pointing_button",
        "any": "key_code or consumer_key_code or pointing_button",

        "modifiers": {
            "mandatory": [
                modifier,
                modifier,
                ...
            ],
            "optional": [
                modifier,
                modifier,
                ...
            ]
        },

        "integer_value": integer,

        "simultaneous": [
            {
                "key_code, consumer_key_code, pointing_button or any"
            },
            {
                "key_code, consumer_key_code, pointing_button or any"
            },
            ...
        ],
        "simultaneous_options": {
            "detect_key_down_uninterruptedly": false,
            "key_down_order": "A restriction of input events order",
            "key_up_order": "A restriction of input events order",
            "key_up_when": "When key_up events are posted",
            "to_after_key_up": [
                to event definition,
                to event definition,
                ...
            ]
        }
    }
}
```

| Name                                           | Required | Description                                                                     |
| ---------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `key_code`                                     | Optional | Key code which you want to change                                               |
| `consumer_key_code`                            | Optional | Consumer key code (media key code) which you want to change                     |
| `pointing_button`                              | Optional | Pointing button name which you want to change                                   |
| [`any`](any/)                                  | Optional | `"any": "key_code"`, `"any": "consumer_key_code"` or `"any": "pointing_button"` |
| [`modifiers`](modifiers/)                      | Optional | Specify mandatory and optional modifiers (e.g., "change control-h to delete")   |
| [`integer_value`](integer-value/)              | Optional | Modify only events with a specific integer value.                               |
| [`simultaneous`](simultaneous/)                | Optional | Specify multiple events which are pressed simultaneously                        |
| [`simultaneous_options`](simultaneous-options) | Optional | Options for `simultaneous`                                                      |

{{% alert title="Note" color="primary" %}}
`key_code`, `consumer_key_code`, `pointing_button` and `any` are exclusive.<br />
You have to specify one of them.
{{% /alert %}}

{{% alert title="Caution" color="danger" %}}
Be careful using `"pointing_button": "button1"` and `"any": "pointing_button"`.<br />
You may lose the left click button and system will be unusable.
{{% /alert %}}

## Investigate key names

-   You can find `key_code`, `consumer_key_code` and `pointing_button` names by [EventViewer](../../../manual/operation/eventviewer/).
-   You can also confirm [names in list](https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/apps/SettingsWindow/Resources/simple_modifications.json).
    (See `"data"` in the list.)

{{% alert title="Tip" color="primary" %}}

You can also specify `key_code`, `consumer_key_code`, `pointing_button` with raw number as follows.<br />

```json
{
    "from": {
        "key_code": 41
    }
}
```

**Do not add double quotes when you use the raw number.**

{{% /alert %}}

## Table of Contents
