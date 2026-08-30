---
title: 'Command line interface'
weight: 500
---

Karabiner-Elements provides a command line interface which provides the following functions.

- Switch a profile by name.
- Show current profile name.
- Show all profile names.
- Set variables which are used in complex modifications.
- Copy the current profile to system default profile. (Administrator privilege is required.)
- Remove the system default profile. (Administrator privilege is required.)
- Lint complex_modifications.json.
- Display version.

## Usage

### Show help

Run the following command in terminal.

```shell
'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli'
```

Result:

```text
A command line utility of Karabiner-Elements
Usage:
  karabiner_cli [OPTION...] positional parameters

      --select-profile arg      Select a profile by name
      --show-current-profile-name
                                Show current profile name
      --list-profile-names      Show all profile names
      --list-connected-devices  Show all connected devices
      --list-system-variables   Show all system variables
      --list-multitouch-extension-variables
                                Show all multitouch extension variables
      --watch-multitouch-extension-variables [=polling-interval-in-milliseconds(=500)]
                                Watch multitouch extension variables and
                                print all of them in one line whenever any
                                variable changes
      --set-variables arg       Json string: {[key: string]:
                                number|boolean|string}
      --set-variables-from-stdin
                                Read one variables JSON object per line
                                from stdin
      --copy-current-profile-to-system-default-profile
                                Copy the current profile to system default
                                profile
      --remove-system-default-profile
                                Remove the system default profile
      --show-settings-window-guidance
                                Show the settings window guidance state
      --lint-complex-modifications glob-patterns
                                Validate complex modifications JSON and
                                JavaScript files for distribution
      --format-json glob-patterns
                                Format json files
      --eval-js glob-patterns   Run javascript files using Duktape
      --eval-js-to-json file    Evaluate a JavaScript file and print the
                                returned object as JSON
      --version                 Displays version
      --version-number          Displays version_number
      --help                    Print help
      --silent                  Suppress messages
      --verbose                 Print variables successfully set by
                                --set-variables-from-stdin

Examples:
  karabiner_cli --select-profile 'Default profile'
  karabiner_cli --show-current-profile-name
  karabiner_cli --list-profile-names
  karabiner_cli --set-variables '{"cli_flag1":1, "cli_flag2":2}'
  printf '{"cli_flag1":1}\n{"cli_flag2":2}\n' | karabiner_cli --set-variables-from-stdin --verbose
```

---

### Examples

#### Switch profile

Run the following command in terminal.

```shell
'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Default profile'
```

#### Show current profile name

Run the following command in terminal.

```shell
'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --show-current-profile-name
```

#### Show all profile names

```shell
'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --list-profile-names
```
