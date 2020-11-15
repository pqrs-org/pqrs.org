---
title: 'Allow button on System Preferences > Security > Privacy does not work'
weight: 100
---

The allow button on System Preferences > Security > Privacy should be hidden after you click it.<br/>
If the button does not hide after click, you did not succeed to click it.

{{< local-image src="images/system-preferences-security-and-privacy@2x.png" >}}

## Reason

It's because macOS blocks the click if you are using an app which intercepts mouse events.<br/>
You have to quit them before pressing the allow button.

**Apps which prevent the click:**

-   Google Chrome
-   Dropbox
-   MagicPrefs
-   SteerMouse
-   Witch
-   Sonos Desktop Controller for Mac
-   If you are using macOS from remote via Screen Sharing, you cannot click the allow button.
-   etc.

### Find what app prevents the click

You can find apps which prevents the click if you are using macOS Mojave or later.

1.  Choose Privacy tab on System Preferences > Security > Privacy.
    {{< local-image src="images/system-preferences-security-and-privacy-general@2x.png" >}}
2.  Choose Accessibility.<br/>
    The enabled apps in the list prevent the click. You have to close these apps.
    {{< local-image src="images/system-preferences-security-and-privacy-accessibility@2x.png" >}}

---

### Other workarounds

There are other workarounds if you cannot find apps that intercept mouse events.

#### Click Allow button via keyboard operation

You can press Allow button via keyboard operation.

1.  Change Full Keyboard Access configuration.
    1.  Open System Preferences > Keyboard > Shortcuts.
    2.  Change Full Keyboard Access configuration to All controls.
2.  Click Allow button.
    1.  Open System Preferences > Security > Privacy.
    2.  Move focus to Allow button by using tab or shift+tab key.
    3.  Press spacebar on Allow button.

#### Using safe mode

You can press Allow button by starting your Mac in safe mode since any extra apps which prevent clicking the Allow button is not launched automatically in safe mode.

1.  Download [Karabiner-Elements](/) before restarting your Mac.
2.  Restart your Mac in safe mode by [this instruction](https://support.apple.com/guide/mac-help/start-up-your-mac-in-safe-mode-mh21245/mac).
3.  Reinstall Karabiner-Elements from downloaded file.
4.  Open System Preferences and confirm the Allow button is shown.<br/>
    If the Allow button is hidden, close System Preferences and open it again.
5.  Click the Allow button.
6.  Restart your Mac and boot in normal mode.
