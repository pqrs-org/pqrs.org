---
title: '5. Modify F310'
weight: 50
---

## Remove the parts

The Logitech F310 is a bit thick as is, so start by removing the parts.
Use a soldering iron to melt the solder and remove the parts, then use desoldering braid to clean up the remaining solder.

-   The USB cable is detached to remove the ferrite core.
-   The central rod (LED) is removed to reduce the height.
-   The switches for LB and RB are removed to replace them with Cherry MX switches.
-   The orange parts of LT and RT are removed to reduce the height.

{{< local-image src="images/F310-before-front.jpg" >}}
{{< local-image src="images/F310-before-back.jpg" >}}

### After removing the parts

| Before                                                 | :arrow_right: | After                                                   |
| ------------------------------------------------------ | ------------- | ------------------------------------------------------- |
| {{< local-image src="images/F310-before-front.jpg" >}} | :arrow_right: | {{< local-image src="images/F310-removed-front.jpg" >}} |
| {{< local-image src="images/F310-before-back.jpg" >}}  | :arrow_right: | {{< local-image src="images/F310-removed-back.jpg" >}}  |

## Snip the USB cable

Cut the removed USB cable to a convenient length and strip the insulation.

{{< local-image src="images/usb-cable-1.jpg" width="400px" inline="true" >}}
{{< local-image src="images/usb-cable-2.jpg" width="200px" inline="true" >}}

## Solder the parts to the circuit board

Solder the following parts onto the circuit board.

-   **USB Cable**:
    -   Qty: 1
    -   The wire color is
        <span style="padding: 0 4px; background-color: red;   border: 1px solid red;   color: white;">V</span>
        <span style="padding: 0 4px; background-color: green; border: 1px solid green; color: white;">D+</span>
        <span style="padding: 0 4px; background-color: white; border: 1px solid black; color: black;">D-</span>
        <span style="padding: 0 4px; background-color: black; border: 1px solid black; color: white;">G-</span>
-   **10k ohm variable resistors**:
    -   Qty: 2
    -   The orientation of the resistor doesn't matter.
    -   To prevent interference with the case, bend the leads inward as you attach them.
-   **2-pin Connector with Wires (male)**:
    -   The color of the wire doesn't matter.

### USB wire color

{{< local-image src="images/F310-after-front.jpg" >}}
{{< local-image src="images/F310-after-back.jpg" >}}
