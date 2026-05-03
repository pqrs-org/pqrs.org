---
title: 'to.send_user_command'
weight: 470
---

`send_user_command` sends a command to an external program prepared by the user.

This mechanism is designed to let an external program process input with even lower latency than [`shell_command`](/docs/json/complex-modifications-manipulator-definition/to/shell-command/).

To use `send_user_command`, you need to prepare an external program separately.
There are mainly two approaches.

1.  One approach is to build a Swift program that integrates the [Karabiner-Elements-user-command-receiver](https://github.com/pqrs-org/Karabiner-Elements-user-command-receiver) Swift package.

    A sample program built with this approach is [Karabiner-Elements-user-command-server](https://github.com/tekezo/Karabiner-Elements-user-command-server). It receives commands such as `set_window_frames` and `show_window_frames` and changes window positions.

2.  The other approach is to implement your own UNIX domain datagram server in any programming language you prefer,
    since `send_user_command` uses UNIX domain socket datagram communication.

## Example

This example is a configuration for [Karabiner-Elements-user-command-server](https://github.com/tekezo/Karabiner-Elements-user-command-server).

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "Set window frames by right_shift+d",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "d",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "send_user_command": {
                        "payload": {
                            "command": "set_window_frames",
                            "frames": [
                                {
                                    "bundle_identifier": "com.apple.Terminal",
                                    "x": 100,
                                    "y": 80,
                                    "width": 1200,
                                    "height": 800
                                },
                                {
                                    "bundle_identifier": "com.apple.Safari",
                                    "x": "center",
                                    "y": 60,
                                    "width": 1400,
                                    "height": 900
                                }
                            ]
                        }
                    }
                }
            ]
        }
    ]
}
```

## Socket file used for communication

Because `send_user_command` communicates over UNIX domain sockets, it uses a socket file.
You can specify the socket path with `endpoint`. If omitted, the following path is used.

`/Library/Application Support/org.pqrs/tmp/user/{UID}/user_command_receiver.sock`

{{% alert title="Note" color="primary" %}}

`UID` is the currently logged-in user's ID, so the actual path will look like `/Library/Application Support/org.pqrs/tmp/user/501/user_command_receiver.sock`.

{{% /alert %}}

## Tips for implementing your own program

First, it is helpful to verify that your server can receive messages.
For example, you can start a server with [socat](http://www.dest-unreach.org/socat/) like this.

```shell
socat -u UNIX-RECVFROM:/tmp/karabiner-elements-user-command-server.sock,fork STDOUT
```

Then, with the following configuration, you can send a command by pressing <kbd>right_shift</kbd>+<kbd>a</kbd> and confirm it is received by `socat`.
The receiver gets the payload as JSON-serialized data.

{{< karabiner-elements-complex-modifications-json-usage >}}

```json
{
    "description": "send_user_command by right_shift+a",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "a",
                "modifiers": {
                    "mandatory": ["right_shift"],
                    "optional": ["caps_lock"]
                }
            },
            "to": [
                {
                    "send_user_command": {
                        "endpoint": "/tmp/karabiner-elements-user-command-server.sock",
                        "payload": "hello"
                    }
                }
            ]
        }
    ]
}
```
