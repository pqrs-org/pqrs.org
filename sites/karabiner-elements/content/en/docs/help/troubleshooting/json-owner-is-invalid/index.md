---
title: '"karabiner.json is not owned by a valid user" error message in log'
weight: 500
---

If the following error message is appeared in log, your home directory owner ship is not valid.

```text
[warning] [core_service] /Users/.../karabiner.json is not owned by a valid user.
```

The cause is that you are using an external storage and locating your home directory into the volume.

You have to enable ownership on the external volume by the following command in Terminal.app.

```shell
sudo diskutil enableOwnership disk99999s99999
```

(Replace `disk99999s99999` with your disk identifier which you can find by `diskutil list` command.)
