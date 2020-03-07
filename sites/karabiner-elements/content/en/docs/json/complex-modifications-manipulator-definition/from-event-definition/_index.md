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

{{% alert title="Note" color="primary" %}}
`key_code`, `consumer_key_code`, `pointing_button` and `any` are exclusive.<br />
You have to specify one of them.
{{% /alert %}}

| Name                   | Required | Description                                                                     |
| ---------------------- | -------- | ------------------------------------------------------------------------------- |
| `key_code`             | Optional | Key code which you want to change                                               |
| `consumer_key_code`    | Optional | Consumer key code (media key code) which you want to change                     |
| `pointing_button`      | Optional | Pointing button name which you want to change                                   |
| `any`                  | Optional | `"any": "key_code"`, `"any": "consumer_key_code"` or `"any": "pointing_button"` |
| `modifiers`            | Optional | Specify mandatory and optional modifiers (e.g., "change control-h to delete")   |
| `simultaneous`         | Optional | Specify multiple events which are pressed simultaneously                        |
| `simultaneous_options` | Optional | Options for `simultaneous`                                                      |

<a href="#simultaneous-options">(detail)</a>

<a href="#from-event-definition-modifiers">(detail)</a>

<div class="alert alert-warning" role="alert">
    Caution:<br />
    Be careful when manipulating <code>button1</code> to avoid losing the left click button.
</div>
</td>

              <td><code>any</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                You can use <code>any</code> as follows.<br />
                These matches all key codes, consumer key codes or pointing buttons.
                <ul>
                  <li><code>"any": "key_code"</code></li>
                  <li><code>"any": "consumer_key_code"</code></li>
                  <li><code>"any": "pointing_button"</code></li>
                </ul>

                <div class="alert alert-warning" role="alert">
                  Caution:<br />
                  Be careful when using <code>"any": "pointing_button"</code> to avoid losing the left click button.
                </div>
              </td>

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

```text
        <hr class="horizontal-separator thin" />

        <h3 id="from-event-definition-modifiers">modifiers in from event definition</h3>

        <code>modifiers</code> works as follows.

        <table class="table">
          <tbody>
            <tr>
              <th>When <code>modifiers</code> is omitted</th>
              <td>
                Events are manipulated only if modifier keys are not pressed.
              </td>
            </tr>
            <tr>
              <th>When <code>modifiers &gt; mandatory</code> is specified</th>
              <td>
                Events are manipulated if mandatory modifiers are pressed. <br />
                Mandatory modifiers are omitted from <code>to events</code>.
              </td>
            </tr>
            <tr>
              <th>When <code>modifiers &gt; optional</code> is specified</th>
              <td>
                Events are also manipulated even if optional modifiers are pressed.<br />
                Optional modifiers are kept in <code>to events</code>.
              </td>
            </tr>
          </tbody>
        </table>

        <hr class="horizontal-separator thin" />

        <h3 id="from-event-definition-examples">Examples</h3>

        <div class="panel panel-default">
          <div class="panel-body">
            <p>Change escape to tab without <code>modifiers</code></p>
```

```json
{
    "type": "basic",
    "from": {
        "key_code": "escape"
    },
    "to": [
        {
            "key_code": "tab"
        }
    ]
}
```

| Input                     | Output                    | Manipulated     |
| ------------------------- | ------------------------- | --------------- |
| `escape`                  | `tab`                     | **Manipulated** |
| `left_shift` + `escape`   | `left_shift` + `escape`   | Not manipulated |
| `left_control` + `escape` | `left_control` + `escape` | Not manipulated |

### Change escape to tab with `optional modifiers`

```json
{
    "type": "basic",
    "from": {
        "key_code": "escape",
        "modifiers": {
            "optional": ["left_shift", "left_control"]
        }
    },
    "to": [
        {
            "key_code": "tab"
        }
    ]
}
```

| Input                                   | Output                                  | Manipulated     |
| --------------------------------------- | --------------------------------------- | --------------- |
| `escape`                                | `tab`                                   | **Manipulated** |
| `left_shift` + `escape`                 | `left_shift` + `tab`                    | **Manipulated** |
| `left_control` + `escape`               | `left_control` + `tab`                  | **Manipulated** |
| `left_option` + `escape`                | `left_option` + `escape`                | Not manipulated |
| `left_shift` + `left_option` + `escape` | `left_shift` + `left_option` + `escape` | Not manipulated |

### Change control-h to delete without `optional modifiers`

```json
{
    "type": "basic",
    "from": {
        "key_code": "h",
        "modifiers": {
            "mandatory": ["control"]
        }
    },
    "to": [
        {
            "key_code": "delete_or_backspace"
        }
    ]
}
```

| Input                                | Output                               | Manipulated     |
| ------------------------------------ | ------------------------------------ | --------------- |
| `h`                                  | `h`                                  | Not manipulated |
| `left_control` + `h`                 | `delete_or_backspace`                | **Manipulated** |
| `left_control` + `left_option` + `h` | `left_control` + `left_option` + `h` | Not manipulated |

{{% alert title="Note" color="primary" %}}
The last input contains `left_option` which is not included in both `modifiers.mandatory`.
{{% /alert %}}

### Change control-h to delete with `optional modifiers`

```json
{
    "type": "basic",
    "from": {
        "key_code": "h",
        "modifiers": {
            "mandatory": ["control"],
            "optional": ["caps_lock", "option"]
        }
    },
    "to": [
        {
            "key_code": "delete_or_backspace"
        }
    ]
}
```

| Input                                | Output                                | Manipulated     |
| ------------------------------------ | ------------------------------------- | --------------- |
| `h`                                  | `h`                                   | Not manipulated |
| `left_control` + `h`                 | `delete_or_backspace`                 | **Manipulated** |
| `left_control` + `left_option` + `h` | `left_option` + `delete_or_backspace` | **Manipulated** |
| `left_control` + `left_shift` + `h`  | `left_control` + `left_shift` + `h`   | Not manipulated |

{{% alert title="Note" color="primary" %}}
The last input contains `left_shift` which is not included in both `modifiers.mandatory` and `modifiers.optional`.
{{% /alert %}}

-   [modifiers](modifiers/)
-   [simultaneous](simultaneous/)
-   [simultaneous_options](simultaneous-options/)
