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

| Name                   | Required | Description                                                                     |
| ---------------------- | -------- | ------------------------------------------------------------------------------- |
| `key_code`             | Optional | Key code which you want to change                                               |
| `consumer_key_code`    | Optional | Consumer key code (media key code) which you want to change                     |
| `pointing_button`      | Optional | Pointing button name which you want to change                                   |
| `any`                  | Optional | `"any": "key_code"`, `"any": "consumer_key_code"` or `"any": "pointing_button"` |
| `modifiers`            | Optional | Specify mandatory and optional modifiers (e.g., "change control-h to delete")   |
| `simultaneous`         | Optional | Specify multiple events which are pressed simultaneously                        |
| `simultaneous_options` | Optional | Options for `simultaneous`                                                      |

{{% alert title="Note" color="primary" %}}
`key_code`, `consumer_key_code`, `pointing_button` and `any` are exclusive.<br />
You have to specify one of them.
{{% /alert %}}

{{% alert title="Caution" color="danger" %}}
Be careful using `"pointing_button": "button1"` and `"any": "pointing_button"`.<br />
You may lose the left click button and system will be unusable.
{{% /alert %}}

<a href="document.html#eventviewer">You can find key_code by EventViewer.</a>
<a href="https://github.com/pqrs-org/Karabiner-Elements/blob/master/src/apps/PreferencesWindow/Resources/simple_modifications.json">(list)</a>

```text
        <div id="raw-number-key-code">
          <div class="alert alert-info" role="alert">
            <p>
              Tips:<br/>
              You can also specify <code>key_code</code>, <code>consumer_key_code</code>, <code>pointing_button</code> with raw number as follows.<br/>
              (Do not add double quotes to the number!)
            </p>

```

```json
{
    "from": {
        "key_code": 41
    },
    ...
}
```

-   [modifiers](modifiers/)
-   [simultaneous](simultaneous/)
-   [simultaneous_options](simultaneous-options/)
