---
title: 'to.repeat'
weight: 700
---

`to.repeat` is `true` or `false`. The default value is `true`.

The key repeating will be suppressed if `to.repeat` is `false`.

{{% alert title="Note" color="primary" %}}

You have to set `repeat` in the last `to` event as follows if you have multiple `to` events and want to set `to.repeat` `false`.

```json
{
    "to": [
        {
            "key_code": "h"
        },
        {
            "key_code": "e"
        },
        {
            "key_code": "l"
        },
        {
            "key_code": "l"
        },
        {
            "key_code": "o",
            "repeat": false
        }
    ]
}
```

{{% /alert %}}

{{% alert title="Tip" color="primary" %}}

`to.repeat` affects `key_up` event sending timing as follows.

-   If `to.repeat` is `true`:
    -   `key_up` event is sent when you release the key.
-   If `to.repeat` is `false`:
    -   `key_down` and `key_up` events are sent when you press the key.

{{% /alert %}}
