---
title: 'to.shell_command'
weight: 100
---

`shell_command` executes the shell command.

## Examples

### Open application

```json
{
    "to": [
        {
            "shell_command": "open -a 'Safari.app'"
        }
    ]
}
```

### Execute shell from file

```json
{
    "to": [
        {
            "shell_command": "/bin/sh ~/opt/shell_commands/hello.sh"
        }
    ]
}
```

{{% alert title="Advanced topic" color="danger" %}}

The very limited environment variables are passed to the command, `$HOME`, `$UID`, `$USER`, etc.

Export environment variables in shell_command if your commands depend them.

For example, the following command does not work well with unicode characters because `tr` command depends the current locale.

```json
{
    "to": [
        {
            "shell_command": "pbpaste | tr '[:upper:]' '[:lower:]' | pbcopy"
        }
    ]
}
```

You have to set `LC_ALL` in shell_command in this case.

```json
{
    "to": [
        {
            "shell_command": "export LC_ALL=en_US.UTF-8; pbpaste | tr '[:upper:]' '[:lower:]' | pbcopy"
        }
    ]
}
```

{{% /alert %}}
