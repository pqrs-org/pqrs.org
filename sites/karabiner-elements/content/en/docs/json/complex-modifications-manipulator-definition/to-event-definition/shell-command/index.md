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
