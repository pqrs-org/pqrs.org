---
title: '"Fumihiko Takayama" is shown in Login Items'
weight: 110
---

In Allow in the Background of Login Items, `Fumihiko Takayama` may appear instead of `Karabiner-Elements`.

There are several causes, but the problem is mainly on the macOS side and is difficult to resolve. (**Restarting macOS may solve this issue**)

In any case, there is no problem with leaving it as it is.

{{< local-image src="images/fumihiko-takayama@2x.png" >}}

Expected:

{{< local-image src="images/expected@2x.png" >}}

---

## Information for those who want to know more

The confirmed causes are as follows:

- If you have ever git clone the Karabiner-Elements repository and built it
- If macOS has set the Allow in the Background display name before Karabiner-Elements was registered in the macOS application database

### How to solve when you have built Karabiner-Elements from source code

The Login Items referes Launch Services database to determine the display name.

If you have built Karabiner-Elements from source code, your built binaries in the working directory are registered Launch Services automatically.

We assume Login Items mixes the information of binaries in your working directory and installed from the package, and failed to get the correct information.
Therefore, in Login Items, the signing developer's name is displayed instead.

So purging unintended entries in Launch Services database solves this issue.

#### Steps

Run the following command in Terminal to get the list of registered applications.

```shell
/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -gc -dump | grep ^path | grep Karabiner-Elements
```

The result example:

```text
path:    /Users/tekezo/.Trash/Karabiner-Elements.app (0x6a38)
path:    /Users/tekezo/Library/Developer/Xcode/DerivedData/Karabiner-Elements-aljilynxkbdxwddtylopomxdislp/Build/Products/Debug/Karabiner-Elements.app (0x6bf8)
path:    /Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Menu.app (0x7918)
path:    /Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-NotificationWindow.app (0x7930)
path:    /Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements.app/Contents/Frameworks/Sparkle.framework/Versions/B/Updater.app (0x7938)
path:    /Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-Elements.app (0x793c)
path:    /Applications/Karabiner-Elements.app (0x7940)
path:    /Library/Application Support/org.pqrs/Karabiner-Elements/Karabiner-MultitouchExtension.app (0x7944)
path:    /Users/tekezo/Library/Developer/Xcode/DerivedData/Karabiner-Elements-enyghegdpximkigqjnasmtnnkupb/Build/Products/Release/Karabiner-Elements.app (0x54c4)
```

Next, unregister the path to the built binaries, those containing Xcode, build, etc, from the list.

```sheel
/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -u '/Users/tekezo/.Trash/Karabiner-Elements.app'
/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -u '/Users/tekezo/Library/Developer/Xcode/DerivedData/Karabiner-Elements-aljilynxkbdxwddtylopomxdislp/Build/Products/Debug/Karabiner-Elements.app'
...
```

Finally, restart macOS.
