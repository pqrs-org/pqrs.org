---
title: 'Input symbols are different from the key code name on non-ANSI keyboards'
weight: 900
---

This is the intended behavior.

The key code name using in Karabiner-Elements is HID usage name, which is similar to a scancode.
This is close to the physical key location on the ANSI layout keyboard.

For this reason, there are mismatches of symbols actually input and key code names on non-ANSI keyboards.

Determining which characters are to be input by keyboard event is the later step in the processing flow of macOS.
Karabiner-Elements changes input events on a layer closer to the hardware, which is why it works like this.

Please use key code names that matches your layout.

## ANSI layout

{{< local-image src="images/MXCL3.png" >}}

## An example of ISO layout (French)

{{< local-image src="images/MXCL3F.png" >}}

## JIS layout

{{< local-image src="images/MXCL3J.png" >}}

## Key code table

| Layout | Symbols | Key code name  |
| ------ | ------- | -------------- |
| JIS    | `@`     | open_bracket   |
| JIS    | `[`     | close_bracket  |
| JIS    | `]`     | backslash      |
| JIS    | `\`     | international3 |
| JIS    | `_`     | international1 |

## Related articles

-   [Manual > Configuration > Set keyboard type](/docs/manual/configuration/configure-keyboard-type/)
