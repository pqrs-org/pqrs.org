---
title: 'Add your own complex modifications'
weight: 210
---

## Step 1

Open Complex Modifications tab and press **Add your own rule** button.<br />

{{< local-image src="images/own-rule-1@2x.png" >}}

## Step 2

An editor will open with sample rules.
Change the content and press the Save button to register.

{{% alert title="Tip" color="primary" %}}

You can save by using the <kbd>command + s</kbd> shortcut as well.

{{% /alert %}}

When making changes, [Karabiner-EventViewer](/docs/manual/operation/eventviewer/) and [Karabiner Configuration Reference Manual](/docs/json/) can be used to confirm the key names and how to write rules.

{{< local-image src="images/own-rule-2@2x.png" >}}

Note: you can target specific keyboard with complex modifications e.g.

```
{
    "description": "fix 2: left_command+3 -> 2, left_shift+3 -> @ (Internal keyboard only)",
    "manipulators": [
        {
            "conditions": [
                {
                    "identifiers": [{ "is_built_in_keyboard": true }],
                    "type": "device_if"
                }
            ],
            "from": {
                "key_code": "3",
                "modifiers": {
                    "mandatory": ["left_command"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "key_code": "2",
                    "modifiers": []
                }
            ],
            "type": "basic"
        },
        {
            "conditions": [
                {
                    "identifiers": [{ "is_built_in_keyboard": true }],
                    "type": "device_if"
                }
            ],
            "from": {
                "key_code": "3",
                "modifiers": {
                    "mandatory": ["left_shift"],
                    "optional": ["any"]
                }
            },
            "to": [
                {
                    "key_code": "2",
                    "modifiers": ["left_shift"]
                }
            ],
            "type": "basic"
        }
    ]
}
```
