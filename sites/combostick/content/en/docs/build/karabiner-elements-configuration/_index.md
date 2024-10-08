---
title: '4. Configure software'
weight: 40
---

Once you have all the materials, before disassembling the Logitech F310, make sure it works properly on macOS.

## Configure Sticks

1.  Switch to DirectInput mode using the switch on the back of the Logitech F310.
    {{< local-image src="images/dinput.jpg" >}}

2.  Connect Logitech F310 to your Mac.
3.  Open Karabiner-Elements, enable `Logitech Dual Action` from the Devices tab, and enable Flip settings, and then press the `Open game pad settings` button.
    {{< local-image src="images/devices@2x.png" >}}
4.  Switch to the Others tab, and enable `Swap gamepad XY and wheels sticks`.
    {{< local-image src="images/game-pad-settings@2x.png" >}}

With these settings, you can use the Logitech F310 for mouse cursor movement and scrolling.
Since ComboStick is used with the Logitech F310 held upside down, verify that the stick operates correctly in the orientation below.

{{< local-image src="images/F310-sticks.jpg" >}}

## Configure Buttons

Since ComboStick uses LB and RB as mouse buttons, you'll need to remap these buttons.

1.  Import the ComboStick rule from <https://ke-complex-modifications.pqrs.org/#combostick>.
    {{< local-image src="images/import@2x.png" >}}
1.  Add the ComboStick rule into Complex Modifications.
    {{< local-image src="images/complex-modifications@2x.png" >}}

To make dragging easier, button1 (primary click) is assigned to the right-side button.

{{< local-image src="images/F310-buttons.jpg" >}}
