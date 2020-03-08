---
title: 'to.mouse_key'
weight: 400
---

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
