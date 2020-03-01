---
title: 'Use more complex rules'
weight: 200
---

Karabiner-Elements provides more complex event modifications.<br />
These rules change keys by conditions.

{{% alert title="Examples" color="primary" %}}

-   Modifier flags + key to keys:
    -   Change control-m to return key.
    -   Change control-h to delete key.
-   Key to modifier flags + keys:
    -   Change caps lock to command+control+option+shift key
-   Post other key events when a key pressed alone:
    -   Post escape key when you press left control key alone.
-   Change keys in specific apps:
    -   Change left command key to left control key in virtual machines.
-   Execute shell command:
    -   Open Activity Monitor by right shift+a.

{{% /alert %}}

You can import predefined rules from the internet or make your own rules.

## Step 1

Open Complex Modifications tab and press **Add rule** button, then press **Import more rules from the internet** button.<br />
[Official rules site](https://ke-complex-modifications.pqrs.org/) will be open using your default web browser.

{{< local-image src="images/karabiner-elements-complex-modifications-1@2x.png" >}}
{{< local-image src="images/karabiner-elements-complex-modifications-2@2x.png" >}}

## Step 2

Press **Import** button in the page.<br />
A confirmation dialog is shown. Press **Allow** button.

{{< local-image src="images/karabiner-elements-complex-modifications-3@2x.png" >}}
{{< local-image src="images/karabiner-elements-complex-modifications-4@2x.png" >}}
{{< local-image src="images/karabiner-elements-complex-modifications-5@2x.png" >}}

## Step 3

Karabiner-Elements is shown again.
Press **Import** button, then new rules are imported.<br />

{{< local-image src="images/karabiner-elements-complex-modifications-6@2x.png" >}}

## Step 4

Press **Enable** button.

{{< local-image src="images/karabiner-elements-complex-modifications-7@2x.png" >}}

## Step 5

New rule is enabled.<br />
Confirm the result using [Karabiner-EventViewer](/docs/manual/operation/eventviewer/).

{{< local-image src="images/karabiner-elements-complex-modifications-8@2x.png" >}}
