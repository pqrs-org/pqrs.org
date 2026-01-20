---
title: '5. Soldering'
weight: 50
---

## Remove the parts

The Logitech F310 is a bit thick as is, so start by removing the parts.
Use a soldering iron to melt the solder and remove the parts, then use desoldering braid to clean up the remaining solder.

- The USB cable is detached to remove the ferrite core.
- The central rod (LED) is removed to reduce the height.
- The switches for LB and RB are removed to replace them with Cherry MX switches.
- The orange parts of LT and RT are removed to reduce the height.

{{< local-image src="images/F310-before-front.jpg" >}}
{{< local-image src="images/F310-before-back.jpg" >}}

### After removing the parts

| Before                                                 | :arrow_right: | After                                                   |
| ------------------------------------------------------ | ------------- | ------------------------------------------------------- |
| {{< local-image src="images/F310-before-front.jpg" >}} | :arrow_right: | {{< local-image src="images/F310-removed-front.jpg" >}} |
| {{< local-image src="images/F310-before-back.jpg" >}}  | :arrow_right: | {{< local-image src="images/F310-removed-back.jpg" >}}  |

## Snip the cables

Cut the removed USB cable to a convenient length and strip the insulation.

{{< local-image src="images/usb-cable-1.jpg" width="400px" inline="true" >}}
{{< local-image src="images/usb-cable-2.jpg" width="300px" inline="true" >}}

Cut the 2-pin Connector with Wires and strip the insulation.

{{< local-image src="images/wires.jpg" width="600px" >}}

## Solder the parts to the circuit board

Solder the following parts onto the circuit board.

- **USB Cable**:
    - Qty: 1
    - The wire color is
      <span style="padding: 0 4px; background-color: red;   border: 1px solid red;   color: white;">V</span>
      <span style="padding: 0 4px; background-color: green; border: 1px solid green; color: white;">D+</span>
      <span style="padding: 0 4px; background-color: white; border: 1px solid black; color: black;">D-</span>
      <span style="padding: 0 4px; background-color: black; border: 1px solid black; color: white;">G-</span>
- **10k ohm variable resistors**:
    - Qty: 2
    - The orientation of the resistor doesn't matter.
    - To prevent interference with the case, bend the leads inward as you attach them.
- **2-pin Connector with Wires (female)**:
    - The color of the wire doesn't matter.

{{< local-image src="images/F310-after-front.jpg" >}}
{{< local-image src="images/F310-after-back.jpg" >}}

## Solder the wires to Cherry MX Switches

Bend the switch pins, then solder the wires. The color of the wire doesn't matter.

{{< local-image src="images/switches-1.jpg" width="200px" inline="true" >}}
{{< local-image src="images/switches-2.jpg" width="400px" inline="true" >}}

## Verify the functionality

With the soldering complete, connect the Cherry MX switches to the circuit board, and then connect the board to macOS via USB.
Ensure that the stick and buttons are working correctly.

### Tuning the variable resistor

The variable resistor is configured so that changing the resistance triggers button7 and button8.
You'll need to tune the resistance to prevent these buttons from being activated.
Use EventViewer to adjust the variable resistor until both buttons are in the `up` state.

{{< local-image src="images/eventviewer@2x.png" >}}
{{< local-image src="images/resistor.jpg" >}}
