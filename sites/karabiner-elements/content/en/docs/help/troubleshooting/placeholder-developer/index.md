---
title: 'Placeholder Developer is shown in Security & Privacy System Preferences'
weight: 600
---

".Karabiner-VirtualHIDDevice-Manager" is usually shown in Security & Privacy System Preferences when macOS requires your approval.

{{< local-image src="images/normal@2x.png" >}}

However, "Placeholder Developer" will be shown due to a macOS issue if you meet all of the following criteria:

-   You are using macOS Catalina (10.15)
-   Multiple system software are waiting your approval.

{{< local-image src="images/placeholder-developer@2x.png" >}}

{{% alert title="Workarounds" color="secondary" %}}

In this case, you can choose one of the following three options to use Karabiner-Elements:

-   Upgrade to macOS Big Sur (11.0) or later.
-   Downgrade to [Karabiner-Elements v12.10.0](/docs/releasenotes/#karabiner-elements-12100).<br />
    Download the package from the above page, and then re-install Karabiner-Elements from the downloaded package.
-   Allow "Placeholder Developer".

{{% /alert %}}

{{% alert title="Info: This issue is solved with macOS Big Sur (11.0)" color="primary" %}}

The developer name is shown properly on macOS Big Sur.

{{< local-image src="images/big-sur@2x.png" >}}

{{% /alert %}}
