---
title: 'to event definition'
weight: 200
---

```json
{
    "key_code": "The name of key_code",
    "consumer_key_code": "The name of consumer_key_code",
    "pointing_button": "The name of pointing_button",

    "shell_command": "shell command",

    "select_input_source": {
        "language": "language regex",
        "input_source_id": "input source id regex",
        "input_mode_id": "input mode id regex"
    },

    "set_variable": {
        "name": "variable name",
        "value": "variable value"
    },

    "mouse_key": mouse_key definition,

    "modifiers": [
        modifier,
        modifier,
        ...
    ],

    "lazy": false,
    "repeat": true,
    "halt": false,
    "hold_down_milliseconds": 0
}
```

{{% alert title="Note" color="primary" %}}

The following keys are exclusive.<br/>
You cannot specify multiple items into one `to` entry.

-   `key_code`
-   `consumer_key_code`
-   `pointing_button`
-   `shell_command`
-   `select_input_source`
-   `set_variable`
-   `mouse_key`

{{% /alert %}}

| Name                                          | Required | Description                                               |
| --------------------------------------------- | -------- | --------------------------------------------------------- |
| `key_code`                                    | Optional | Key code which you want to post                           |
| `consumer_key_code`                           | Optional | Consumer key code (media key code) which you want to post |
| `pointing_button`                             | Optional | Pointing button name which you want to post               |
| [`shell_command`](shell-command/)             | Optional | Shell command which you want to execute                   |
| [`select_input_source`](select-input-source/) | Optional | Input source which you want to switch                     |
| `set_variable`                                | Optional | A varaible name and value which you want to change        |
| `mouse_key`                                   | Optional | A mouse key definition                                    |
| `modifiers`                                   | Optional | Modifiers which are post with the event                   |

```text
            <tr>
              <td><code>lazy</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                <p>
                  <code>true</code> or <code>false</code>. The default value is <code>false</code>.
                </p>
                <p>
                  <code>lazy</code> parameter works with modifier. (e.g., <code>"key_code": "left_shift"</code>)<br />
                  When <code>"lazy": true</code>, the modifier works as the lazy modifier.<br />
                  The lazy modifier does not send own key events until another key is pressed together.
                </p>
              </td>
            </tr>
            <tr>
              <td><code>repeat</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                <p>
                  <code>true</code> or <code>false</code>. The default value is <code>true</code>.
                </p>
                <p>
                  When <code>"repeat": false</code>, both <b>key_down</b> and <b>key_up</b> events are sent when you press the key.<br />
                  (When <code>"repeat": true</code>, <b>key_up</b> event is sent when you release the key.)
                </p>
                <p>
                  This behavior suppresses the key repeating when <code>"repeat": false</code>.
                </p>
                <div class="alert alert-info" role="alert">
                  Note:<br />
                  When you want to use <code>"repeat": false</code>, you have to set <code>repeat</code> in the last to event if you have multiple to events in a manipulator.
                </div>
              </td>
            </tr>
            <tr>
              <td><code>halt</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                <p>
                  <code>true</code> or <code>false</code>. The default value is <code>false</code>.
                </p>
                <p>
                  The typical usage of <code>halt</code> is to cancel <code>to_after_key_up</code> if <code>to_if_alone</code> or <code>to_if_held_down</code> is triggered.
                </p>
                <p>
                  If <code>"halt": true</code> exists in <code>to_if_alone</code> or <code>to_if_held_down</code>, the <code>to_after_key_up</code> is suppressed when <code>to_if_alone</code> or <code>to_if_held_down</code> is triggered.
                </p>
                <p>
                  An example: <a target="_blank" href="https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/example_halt.json">https://github.com/pqrs-org/KE-complex_modifications/blob/master/docs/json/example_halt.json</a>
                </p>
              </td>
            </tr>
            <tr>
              <td><code>hold_down_milliseconds</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                <p>
                  An integer value. The default value is <code>0</code>.
                </p>
                <p>
                  Specify a key press period for when both key down and key up events are posted at the same time (e.g. <code>to_if_alone</code>)
                </p>
                <p>
                  Generally <code>hold_down_milliseconds</code> is used with <code>"key_code": "caps_lock"</code>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>

            <tr>
              <td><code>set_variable</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                Set internal variable value by <code>set_variable</code>.<br />
                It's designed to use with <code>variable_if</code> and <code>variable_unless</code> conditions.<br />
                You can confirm the current variables state in <b>EventViewer &gt; Variables tab</b>.
              </td>
            </tr>
            <tr>
              <td><code>mouse_key</code></td>
              <td><code class="optional">optional</code></td>
              <td>
                Move mouse pointer and scroll by <code>mouse_key</code>.<br />
                You can specify operations by combination of follows.<br />
                <ul>
                  <li><code>{ "x": speed }</code></li>
                  <li><code>{ "y": speed }</code></li>
                  <li><code>{ "vertical_wheel": speed }</code></li>
                  <li><code>{ "horizontal_wheel": speed }</code></li>
                  <li><code>{ "speed_multiplier": 1.0 }</code></li>
                </ul>

                Examples:<br />
                <ul>
                  <li>move left: <code>{ "mouse_key": { "x": -1536 } }</code></li>
                  <li>move right: <code>{ "mouse_key": { "x": 1536 } }</code></li>
                  <li>move up: <code>{ "mouse_key": { "y": -1536 } }</code></li>
                  <li>move down: <code>{ "mouse_key": { "y": 1536 } }</code></li>
                  <li>scroll left: <code>{ "mouse_key": { "horizontal_wheel": 32 } }</code></li>
                  <li>scroll right: <code>{ "mouse_key": { "horizontal_wheel": -32 } }</code></li>
                  <li>scroll up: <code>{ "mouse_key": { "vertical_wheel": -32 } }</code></li>
                  <li>scroll down: <code>{ "mouse_key": { "vertical_wheel": 32 } }</code></li>
                </ul>

                <ul>
                  <li>fast move left: <code>{ "mouse_key": { "x": -3072 } }</code></li>
                  <li>fast move right: <code>{ "mouse_key": { "x": 3072 } }</code></li>
                  <li>fast move up: <code>{ "mouse_key": { "y": -3072 } }</code></li>
                  <li>fast move down: <code>{ "mouse_key": { "y": 3072 } }</code></li>
                  <li>fast scroll left: <code>{ "mouse_key": { "horizontal_wheel": 64 } }</code></li>
                  <li>fast scroll right: <code>{ "mouse_key": { "horizontal_wheel": -64 } }</code></li>
                  <li>fast scroll up: <code>{ "mouse_key": { "vertical_wheel": -64 } }</code></li>
                  <li>fast scroll down: <code>{ "mouse_key": { "vertical_wheel": 64 } }</code></li>
                </ul>

                <ul>
                  <li>speed multiplier x2: <code>{ "mouse_key": { "speed_multiplier": 2.0 } }</code></li>
                  <li>speed multiplier /2: <code>{ "mouse_key": { "speed_multiplier": 0.5 } }</code></li>
                </ul>

                <div class="alert alert-info" role="alert">
                  Note:<br />
                  Speed and direction depend on <b>System Preferences &gt; Mouse</b> configuration.
                </div>
              </td>
            </tr>


                <a href="document.html#eventviewer">You can find key_code by EventViewer.</a>
                <a href="https://github.com/pqrs-org/Karabiner-Elements/blob/master/src/apps/PreferencesWindow/Resources/simple_modifications.json">(list)</a>

        <hr class="horizontal-separator thin" />

        <h3 id="to-event-definition-modifiers-list">The list of modifiers in to definition</h3>

        <ul>
          <li><code>caps_lock</code></li>
          <li><code>left_command</code></li>
          <li><code>left_control</code></li>
          <li><code>left_option</code></li>
          <li><code>left_shift</code></li>
          <li><code>right_command</code></li>
          <li><code>right_control</code></li>
          <li><code>right_option</code></li>
          <li><code>right_shift</code></li>
          <li><code>fn</code></li>
        </ul>

        {{! ================================================================================ }}

        <hr class="horizontal-separator thin" />

        <h3 id="to-if-alone">Detail of <code>to_if_alone</code></h3>

        <p>
          <code>to_if_alone</code> posts events when the <b>from key</b> is pressed alone.<br />
          The events are posted at the <b>from key</b> is released.
        </p>

        <h4 id="to-if-alone-cancellation">About cancellation</h4>

        <p>
          <code>to_if_alone</code> is canceled if other events (keys, buttons or scroll wheel) is happen while the <b>from key</b> is pressed down.
        </p>
        <p>
          The cancellation also happens when you press <b>from key</b> long. (The default timeout is 1000 milliseconds.)<br />
          You can adjust the timeout milliseconds by <code>parameters &gt; basic.to_if_alone_timeout_milliseconds</code>.<br />
          The following examples set the timeout 500 milliseconds.
        </p>
```

```json
{
    "from": ...,
    "to": ...,
    "to_if_alone": [
        {
            "key_code": "escape"
        }
    ],
    "parameters": {
        "basic.to_if_alone_timeout_milliseconds": 500
    },
    "type": "basic"
}
```

```text
        <h4 id="to-if-alone-keyboard-repeat">About keyboard repeat</h4>

        <p>
          <code>to_if_alone</code> posts both <b>key_down</b> and <b>key_up</b> events at the same time.<br />
          Thus, you cannot use key repeat for <code>to_if_alone</code> events.
        </p>

        {{! ================================================================================ }}

        <hr class="horizontal-separator thin" />

        <h3 id="to-if-held-down">Detail of <code>to_if_held_down</code></h3>

        <p>
          <code>to_if_held_down</code> posts events when the <b>from key</b> is held down.<br />
        </p>

        <p>
          If <code>to</code> events are specified, <code>to</code> events are released before <code>to_if_held_down</code> are posted.
        </p>

        {{! ================================================================================ }}

        <hr class="horizontal-separator" />
```
