---
title: 'karabiner.json data structure'
weight: 400
---

{{% alert title="Note" color="warning" %}}
Karabiner-Elements does not allow you including comments (`// ...` or `/* ... */`) in any json files.
{{% /alert %}}

## karabiner.json

```json
{
    "global": {
        "check_for_updates_on_startup": true,
        "show_in_menu_bar": true,
        "show_profile_name_in_menu_bar": false
    },
    "profiles": [
        {
            "name": "Profile name",
            "selected": true,
            "simple_modifications": [
                ...
            ],
            "fn_function_keys": [
                ...
            ],
            "complex_modifications": {
                "parameters": {
                    ...
                },
                "rules": [
                    ...
                ]
            },
            "virtual_hid_keyboard": {
                "keyboard_type": "ansi",
                "caps_lock_delay_milliseconds": 0
            },
            "devices": [
                ...
            ],
            "parameters": {
                ...
            }
        },
        {
            "name": "Profile name",
            "selected": false,
            ...
        },
        ...
    ]
}
```

## complex_modifications in karabiner.json > profiles

```json
{
    "complex_modifications": {
        "parameters": {
            ...
        },
        "rules": [
            {
                "description": "This description is shown in Preferences.",
                "manipulators": [
                    {
                        "type": "basic",

                        "from": from event definition,

                        "to": [
                            to event definition,
                            to event definition,
                            ...
                        ],

                        "to_if_alone": [
                            to event definition,
                            to event definition,
                            ...
                        ],

                        "to_if_held_down": [
                            to event definition,
                            to event definition,
                            ...
                        ],

                        "to_after_key_up": [
                            to event definition,
                            to event definition,
                            ...
                        ],

                        "to_delayed_action": {
                            "to_if_invoked": [
                                to event definition,
                                to event definition,
                                ...
                            ],
                            "to_if_canceled": [
                                to event definition,
                                to event definition,
                                ...
                            ]
                        },

                        "conditions": [
                            condition definition,
                            condition definition,
                            ...
                        ],

                        "parameters": {
                            ...
                        },

                        "description": "Optional description for human"
                    },
                    {
                        "type": "basic",
                        ...
                    },
                    ...
                ]
            },
            {
                "description": "...",
                "manipulators": [
                    ...
                ]
            },
            ...
        ]
    }
}
```

## custom `*.json` file in ~/config/karabiner/assets/complex_modifications

{{% alert title="Note" color="primary" %}}
Adding a custom .json file allows for enabling and disabling rules/complex modifications through the UI.
{{% /alert %}}

```json
{
    "title": "Title for the list of rules/complex modifications.",
    "rules": [
        {
            "description": "This description is shown in Preferences.",
            "manipulators": [
                {
                    "type": "basic",

                    "from": from event definition,

                    "to": [
                        to event definition,
                        to event definition,
                        ...
                    ],

                    "to_if_alone": [
                        to event definition,
                        to event definition,
                        ...
                    ],

                    "to_if_held_down": [
                        to event definition,
                        to event definition,
                        ...
                    ],

                    "to_after_key_up": [
                        to event definition,
                        to event definition,
                        ...
                    ],

                    "to_delayed_action": {
                        "to_if_invoked": [
                            to event definition,
                            to event definition,
                            ...
                        ],
                        "to_if_canceled": [
                            to event definition,
                            to event definition,
                            ...
                        ]
                    },

                    "conditions": [
                        condition definition,
                        condition definition,
                        ...
                    ],

                    "parameters": {
                        ...
                    },

                    "description": "Optional description for human"
                },
                {
                    "type": "basic",
                    ...
                },
                ...
            ]
        },
        {
            "description": "...",
            "manipulators": [
                ...
            ]
        },
        ...
    ]
}
```
