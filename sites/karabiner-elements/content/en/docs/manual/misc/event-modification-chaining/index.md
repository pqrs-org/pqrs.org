---
title: 'Input event modification chaining'
weight: 300
---

Karabiner-Elements treats input events by the following order:

1.  Catch events from hardware.
2.  Apply **Simple Modifications**.
3.  Apply **Complex Modifications**.
4.  Apply **Function Keys Modifications**. (change f1...f12 keys to media controls)
5.  Apply **System Settings > Keyboard > Keyboard Shortcuts... > Modifier Keys**.
6.  Post events to applications via a virtual keyboard.
