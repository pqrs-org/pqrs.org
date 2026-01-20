---
title: 'complex_modifications manipulator evaluation priority'
weight: 300
---

The manipulators are evaluated from the top to the bottom and the input event is manipulated only the first matched manipulator.

In other words, if there are multiple manipulators which change the same key, the manipulator placed at the top is applied and other manipulators are ignored.

## Simple Modifications and Complex Modifications

Simple Modifications and Complex Modifications are independent.

Thus, Simple Modifications does not affect above priority.<br />
Karabiner-Elements changes keys by Simple Modifications, and then changes them by Complex Modifications.

[About input event modification chaining](../../manual/misc/event-modification-chaining/).

{{% alert title="Example" color="primary" %}}

If there are the following manipulators, `right shift` key will be `right command + right option`.

- Simple Modifications
    - Change `right shift` to `right command`
- Complex Modifications
    - Change `right command` to `right command + right option`

{{% /alert %}}
