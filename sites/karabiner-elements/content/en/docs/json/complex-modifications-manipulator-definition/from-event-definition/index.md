---
title: 'From event definition'
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

### The list of modifiers in from definition

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

```text
        <h3 id="simultaneous">Detail of <code>simultaneous</code></h3>

        <p>
          <code>simultaneous</code> manipulates keys which are pressed simultaneously in 50 milliseconds.
        </p>

        <h4 id="simultaneous-threshold-milliseconds">About threshold milliseconds</h4>

        <p>
          You can adjust threshold on <b>Preferences &gt; Complex Modifications &gt; Parameters</b>.
        </p>

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

        <table class="table">
          <thead>
            <tr>
              <th>Input</th>
              <th>Output</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ol>
                  <li><b>a</b> key_down</li>
                  <li><b>s</b> key_down</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <ol>
                  <li><b>mission_control</b></li>
                </ol>
              </td>
              <td>
                <span class="glyphicon glyphicon-ok"></span> Manipulated.
              </td>
            </tr>
            <tr>
              <td>
                <ol>
                  <li><b>s</b> key_down</li>
                  <li><b>a</b> key_down</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <ol>
                  <li><b>mission_control</b></li>
                </ol>
              </td>
              <td>
                <span class="glyphicon glyphicon-ok"></span> Manipulated.<br />
                The key order is insensitive.
              </td>
            </tr>
            <tr>
              <td>
                <ol>
                  <li><b>a</b> key_down</li>
                  <li><b>s</b> key_down</li>
                  <li><b>a</b> key_up</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <ol>
                  <li><b>a</b> key_down</li>
                  <li><b>s</b> key_down</li>
                  <li><b>a</b> key_up</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <span class="glyphicon glyphicon-remove"></span> Not manipulated.<br />
                <b>a</b> is released before all input events are pressed.
              </td>
            </tr>
            <tr>
              <td>
                <ol>
                  <li><b>a</b> key_down</li>
                  <li><b>s</b> key_down</li>
                  <li><b>f</b> key_down</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <ol>
                  <li><b>a</b> key_down</li>
                  <li><b>s</b> key_down</li>
                  <li><b>f</b> key_down</li>
                  <li><b>d</b> key_down</li>
                </ol>
              </td>
              <td>
                <span class="glyphicon glyphicon-remove"></span> Not manipulated.<br />
                Another key (<b>f</b>) is pressed before all input events are pressed.
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Note: The manipulator definition of changing <b>a</b>+<b>s</b>+<b>d</b> to <b>mission_control</b>.
        </p>
```

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

## `simultaneous_options`

| Key                               | Value                                       | Description                                                             |
| --------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| `detect_key_down_uninterruptedly` | `true` or `false`                           | Specify whether key_down detection is interrupted with unrelated events |
| `key_down_order`                  | `insensitive`, `strict` or `strict_inverse` | Restriction of key_down order                                           |
| `key_up_order`                    | `insensitive`, `strict` or `strict_inverse` | Restriction of key_up order                                             |
| `key_up_when`                     | `any` or `all`                              | When key_up events are posted                                           |
| `to_after_key_up`                 | An array of <b>to event definitions</b>     | Events will be posted when all `from` events are released               |

### `simultaneous_options.detect_key_down_uninterruptedly`

If `detect_key_down_uninterruptedly` is true, Karabiner-Elements changes simultaneous events even if unrelated key down event exists between target events.

For example, when `escape+3 -> mission_control`, `escape,1,3` will be `mission_control,1` if `detect_key_down_uninterruptedly` is true.

The default value is `false`.

### `simultaneous_options.key_down_order`

`simultaneous` checks the order of key_down events if `key_down_order` is specified and is not `insensitive`.

For example, this definition manipulates `tab,q` to `mission_control` and does not manipulate `q,tab` events.

```json
{
    "type": "basic",
    "from": {
        "simultaneous": [
            {
                "key_code": "tab"
            },
            {
                "key_code": "q"
            }
        ],
        "simultaneous_options": {
            "key_down_order": "strict"
        },
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

### `simultaneous_options.key_up_order`

`simultaneous` checks the order of key_up events if `key_up_order` is specified and is not `insensitive`.

{{% alert title="Tip" color="primary" %}}

`key_up_order` is ignored if `simultaneous_threshold_milliseconds` is reached.

You should set a large value to `simultaneous_threshold_milliseconds` when you use `key_up_order`.

{{% /alert %}}

For example, this definition manipulates `tab,q` to `mission_control` if the `tab` key is released before the `q` key within 500 milliseconds.

| Input                | Output                                               |
| -------------------- | ---------------------------------------------------- |
| `tab` & `q` key_down | ---                                                  |
| `tab` key_up         | `mission_control` key_down, `mission_control` key_up |
| `q` key_up           | ---                                                  |

{{% alert title="Note" color="primary" %}}

Events will be posted just before the last from event's key_up.

{{% /alert %}}

```json
{
    "type": "basic",
    "parameters": {
        "basic.simultaneous_threshold_milliseconds": 500
    },
    "from": {
        "simultaneous": [
            {
                "key_code": "tab"
            },
            {
                "key_code": "q"
            }
        ],
        "simultaneous_options": {
            "key_up_order": "strict"
        },
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

### `simultaneous_options.key_up_when`

Specify when key_up events are posted.

| Value | Description                                   |
| ----- | --------------------------------------------- |
| `any` | Post key_up events when any key is released   |
| `all` | Post key_up events when all keys are released |

### `simultaneous_options.to_after_key_up`

`simultaneous_options.to_after_key_up` will be posted when all `from` events are released.

This feature is typically used to clear mode flag variables when all `from` events are released.

Example:

-   Mouse Keys Mode v4
    -   [json](https://github.com/pqrs-org/KE-complex_modifications/blob/master/public/json/mouse_keys_mode_v4.json)
    -   [json generator](https://github.com/pqrs-org/KE-complex_modifications/blob/master/src/json/mouse_keys_mode_v4.json.rb)
    -   [Import](https://ke-complex-modifications.pqrs.org/#mouse_keys_mode_v4)
