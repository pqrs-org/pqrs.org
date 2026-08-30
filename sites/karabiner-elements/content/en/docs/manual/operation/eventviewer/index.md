---
title: 'Confirm the result of configuration (EventViewer)'
weight: 400
---

Karabiner-Elements provides a built-in event viewer named Karabiner-EventViewer.
You can show keyboard and mouse events by using it.

1.  Open Karabiner-EventViewer from Apps or Finder.
    {{< local-image src="images/spotlight@2x.png" >}}
2.  Input events will be shown when you type keyboard.
    {{< local-image src="images/karabiner-elements-eventviewer@2x.png" >}}

## How to check the device's original events

EventViewer shows events after Karabiner-Elements has modified them.
However, when you configure Karabiner-Elements to change an event, you must specify the original event that the device sends.
This is why trying to modify the event shown in EventViewer sometimes does not work.

A prominent example is changing the function keys.
When you press a function key, the device sends something like `{"key_code":"f1"}`,
but because Karabiner-Elements converts it into a brightness adjustment,
EventViewer displays `{"consumer_key_code":"display_brightness_decrement"}`.
(When you actually change the key in Karabiner-Elements, you need to specify `f1`.)

EventViewer also provides a way to show the original events.
Select Capture Raw Input Events in the sidebar, then select the device you want to inspect, and then press the Start capture button.
Karabiner-Elements modifications will be temporarily disabled for that device, allowing you to view its original events.

{{< local-image src="images/original-events@2x.png" >}}
