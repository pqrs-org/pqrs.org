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

```text
            <table class="table">
              <thead>
                <tr>
                  <th>key</th>
                  <th>manipulated</th>
                  <th>result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>escape</td>
                  <td><b>manipulated</b></td>
                  <td>tab</td>
                </tr>
                <tr>
                  <td>left_shift + escape</td>
                  <td>not manipulated</td>
                  <td>left_shift + escape</td>
                </tr>
                <tr>
                  <td>left_control + escape</td>
                  <td>not manipulated</td>
                  <td>left_control + escape</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <p>Change escape to tab with <code>optional modifiers</code></p>
```

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

```text
            <table class="table">
              <thead>
                <tr>
                  <th>key</th>
                  <th>manipulated</th>
                  <th>result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>escape</td>
                  <td><b>manipulated</b></td>
                  <td>tab</td>
                </tr>
                <tr>
                  <td>left_shift + escape</td>
                  <td><b>manipulated</b></td>
                  <td>left_shift + tab</td>
                </tr>
                <tr>
                  <td>left_control + escape</td>
                  <td><b>manipulated</b></td>
                  <td>left_control + tab</td>
                </tr>
                <tr>
                  <td>left_option + escape</td>
                  <td>not manipulated</td>
                  <td>left_option + escape</td>
                </tr>
                <tr>
                  <td>left_shift + left_option + escape</td>
                  <td>not manipulated</td>
                  <td>
                    left_shift + left_option + escape<br />
                    (because left_option is not in optional modifiers)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <p>Change control-h to delete without <code>optional modifiers</code></p>

```

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

```text
            <table class="table">
              <thead>
                <tr>
                  <th>key</th>
                  <th>manipulated</th>
                  <th>result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>h</td>
                  <td>not manipulated</td>
                  <td>h</td>
                </tr>
                <tr>
                  <td>left_control + h</td>
                  <td><b>manipulated</b></td>
                  <td>delete_or_backspace</td>
                </tr>
                <tr>
                  <td>left_control + left_option + h</td>
                  <td>not manipulated</td>
                  <td>
                    left_control + left_option + h<br />
                    (because left_option is not in optional modifiers)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <p>Change control-h to delete with <code>optional modifiers</code></p>
```

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

```text
            <table class="table">
              <thead>
                <tr>
                  <th>key</th>
                  <th>manipulated</th>
                  <th>result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>h</td>
                  <td>not manipulated</td>
                  <td>h</td>
                </tr>
                <tr>
                  <td>left_control + h</td>
                  <td><b>manipulated</b></td>
                  <td>delete_or_backspace</td>
                </tr>
                <tr>
                  <td>left_control + left_option + h</td>
                  <td><b>manipulated</b></td>
                  <td>left_option + delete_or_backspace</td>
                </tr>
                <tr>
                  <td>left_control + left_shift + h</td>
                  <td>not manipulated</td>
                  <td>
                    left_control + left_shift + h<br />
                    (because left_shift is not in optional modifiers)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="horizontal-separator thin" />
```

## `modifiers`

`modifiers.mandatory` and `modifiers.optional` are array of the folowing strings.

{{% alert title="Tip" color="primary" %}}
If you do not include `any` in `modifiers.optional`, your manipulator does not change event if extra modifiers (modifiers which are not included in `modifiers.mandatory`) are pressed.
{{% /alert %}}

| Name            | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `caps_lock`     | ---                                                                |
| `left_command`  | ---                                                                |
| `left_control`  | ---                                                                |
| `left_option`   | ---                                                                |
| `left_shift`    | ---                                                                |
| `right_command` | ---                                                                |
| `right_control` | ---                                                                |
| `right_option`  | ---                                                                |
| `right_shift`   | ---                                                                |
| `fn`            | ---                                                                |
| `command`       | Either left command or right command is pressed                    |
| `control`       | Either left control or right control is pressed                    |
| `option`        | Either left option or right option is pressed                      |
| `shift`         | Either left shift or right shift is pressed                        |
| `left_alt`      | Alias of left_option (available since Karabiner-Elements 12.3.0)   |
| `left_gui`      | Alias of left_command (available since Karabiner-Elements 12.3.0)  |
| `right_alt`     | Alias of right_option (available since Karabiner-Elements 12.3.0)  |
| `right_gui`     | Alias of right_command (available since Karabiner-Elements 12.3.0) |
| `any`           | Any modifiers                                                      |

## `simultaneous`

`simultaneous` manipulates keys which are pressed simultaneously in 50 milliseconds.

### Change threshold milliseconds

You can adjust threshold on Preferences > Complex Modifications > Parameters.

```text
        <div class="row">
          <div class="col-lg-4">
            {{#lightbox}}
              img/karabiner-elements-simultaneous_threshold_milliseconds@2x.png simultaneous_threshold_milliseconds
            {{/lightbox}}
          </div>
        </div>

        <p>
          It is same as adjusting <code>basic.simultaneous_threshold_milliseconds</code> parameter in json.
        </p>

        <h4 id="simultaneous-manipulation">About manipulation</h4>

        <p>
          There are some cases <code>simultaneous</code> does not modify events.
        </p>

        <ul>
          <li><code>simultaneous</code> does not modify events if any <b>from events</b> are released before all <b>from events</b> are pressed.</li>
          <li><code>simultaneous</code> does not modify events if <b>from events</b> are interrupted by another event.</li>
        </ul>

        <p>
          For example, changing <b>a</b>+<b>s</b>+<b>d</b> to <b>mission_control</b> works as the following table.
        </p>
```

#### Manipulated example #1

-   Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `d` key_down
-   Output:
    1.  `mission_control`

#### Manipulated example #2

-   Input:
    1.  `s` key_down
    2.  `a` key_down
    3.  `d` key_down
-   Output:
    1.  `mission_control`

#### Not manipulated example #1

-   Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `a` key_up
    4.  `d` key_down
-   Output:
    1.  `a` key_down
    2.  `s` key_down
    3.  `a` key_up
    4.  `d` key_down

Not manipualted since `a` is released before all input events are pressed.

#### Not manipulated example #2

-   Input:
    1.  `a` key_down
    2.  `s` key_down
    3.  `f` key_down
    4.  `d` key_down
-   Output:
    1.  `a` key_down
    2.  `s` key_down
    3.  `f` key_down
    4.  `d` key_down

Not manipulated since another key (`f`) is pressed before all input events are pressed.

Note: The manipulator definition of changing `a+s+d` to `mission_control`.

```json
{
    "type": "basic",
    "from": {
        "simultaneous": [
            {
                "key_code": "a"
            },
            {
                "key_code": "s"
            },
            {
                "key_code": "d"
            }
        ],
        "modifiers": {
            "optional": ["any"]
        }
    },
    "to": [
        {
            "key_code": "mission_control"
        }
    ]
}
```

```text
        <h4 id="simultaneous-key-up">About key_up</h4>

        <p>
          The key_up event is posted when you release any <b>from events</b>.
        </p>

        <p>
          For example, changing <b>tab</b>+<b>q</b> to <b>mission_control</b> works as the following table.
        </p>

        <table class="table">
          <thead>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>tab</b> key_down
              </td>
              <td>
                ---
              </td>
            </tr>
            <tr>
              <td>
                <b>q</b> key_down
              </td>
              <td>
                <b>mission_control</b> key_down
              </td>
            </tr>
            <tr>
              <td>
                <b>tab</b> key_up
              </td>
              <td>
                <b>mission_control</b> key_up
              </td>
            </tr>
            <tr>
              <td>
                <b>q</b> key_up
              </td>
              <td>
                ---
              </td>
            </tr>
          </tbody>
        </table>
```
