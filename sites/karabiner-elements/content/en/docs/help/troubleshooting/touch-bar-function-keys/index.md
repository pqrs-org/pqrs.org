---
title: 'Touch Bar does not change to f1-f12 when I press the fn key'
weight: 300
---

It's an issue of macOS, and unfortunately, Karabiner-Elements cannot avoid this issue.<br />
Instead, please change fn+number keys to function keys in Karabiner-Elements configuration.

1.  Import [Map fn + number keys to function keys](https://ke-complex-modifications.pqrs.org/#fn_plus_numbers_to_function_keys)
2.  Enable `Map fn + number keys to their corresponding function keys`.
3.  You can use f1-f12 keys by fn+number keys.
    {{< local-image src="images/karabiner-elements-fn_plus_numbers_to_function_keys@2x.png" >}}

{{% alert title="Note" color="primary" %}}
If you are using "Use all F1, F2, etc. keys as standard function keys.",
enable `Map fn + number keys to their corresponding media control keys` instead.
{{% /alert %}}

{{% alert title="Detail of the problem" color="dark" %}}
The fn key events are ignored by Touch Bar since the following facts.

-   Touch Bar accepts the fn key event only from the build-in keyboard.
-   The fn key events are sent from Karabiner's virtual keyboard when Karabiner-Elements is running.

Unfortunately, posting input events via own virtual keyboard is the only way to accomplish the stable input event modification.<br />
In other words, we cannot post the fn key event through the built-in keyboard if we want to change key events stably.
{{% /alert %}}
