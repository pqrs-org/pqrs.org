---
title: 'Compatibility with Logitech Logi Options+: Fn keys'
weight: 1000
---

This was discovered when using an MX Keys keyboard with the “Logi Options+” software.  While Karabiner Elements is running, the Logitech specific function keys (such as `Fn-esc` to toggle between function keys and media keys and `f1`, `f2`, `f3` to switch between inputs) are not recognized.

The solution is to edit `karabiner.json` such that the `"fn_function_keys"` array is empty:

```json
    "fn_function_keys": []
```

Credit: https://github.com/pqrs-org/Karabiner-Elements/issues/1450#issuecomment-1013932206
