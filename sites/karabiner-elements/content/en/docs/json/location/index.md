---
title: 'File locations'
weight: 100
---

Karabiner-Elements configuration file paths:

- `~/.config/karabiner/karabiner.json`
    - Main configuration file.<br />
      Karabiner-Elements watches this file and reload it automatically when it is updated.
- `~/.config/karabiner/assets/complex_modifications`
    - Imported complex_modifications files.<br />
      You can use them in Karabiner-Elements Settings > Complex Modifications > Add predefined rule.

{{% alert title="Tip: file update detection and automatic reload" color="primary" %}}

Karabiner-Elements watches `~/.config/karabiner/karabiner.json` and reloads it if updated.

The mechanism is that Karabiner-Elements watches the parent directory `~/.config/karabiner` by using the File System Events API.<br />
Thus, Karabiner-Elements fails detecting file updates after you change the parent directory (e.g., recreate the parent directory).

{{% /alert %}}

## Log file

Error messages will be output into `~/.local/share/karabiner/log/console_user_server.log` if there are errors such as parse error.

You can also view the error messages in Karabiner-Elements Settings > Log.

{{< local-image src="images/log@2x.png" >}}
