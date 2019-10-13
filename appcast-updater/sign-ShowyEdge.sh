#!/bin/bash

basedir=$(dirname $0)
cd "$basedir"

priv_pem="secret/ShowyEdge_priv.pem"
. scripts/check-priv_pem.sh

targetdir="../sites/showyedge/static/files"

latest_dmg=$(ruby scripts/get-latest.rb $targetdir/ShowyEdge-*.dmg)
version=$(echo $(basename $latest_dmg .dmg) | sed 's|ShowyEdge-||')
length=$(ruby scripts/get-length.rb $latest_dmg)
dsaSignature=$(sh scripts/sign_update.sh $latest_dmg $priv_pem)
pubDate=$(ruby scripts/get-time.rb)

if [ "$version" == $(ruby scripts/get-version.rb <"$targetdir/appcast-devel.xml") ]; then
  echo " $(basename $0): Already up-to-date."
  exit 0
fi

if xcrun stapler validate -q $latest_dmg; then
  echo " $(basename $latest_dmg) is notarized"
else
  echo " ERROR: $(basename $latest_dmg) is not notarized"
  exit 1
fi

rm -f "$targetdir/appcast-devel.xml.tmp"

cat >>"$targetdir/appcast-devel.xml.tmp" <<EOF
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle"  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>ShowyEdge Changelog</title>
    <link>https://showyedge.pqrs.org/files/appcast.xml</link>
    <description>Most recent changes with links to updates.</description>
    <language>en</language>

    <item>
      <title>Version $version</title>
      <sparkle:minimumSystemVersion>10.9.0</sparkle:minimumSystemVersion>
      <description><![CDATA[
EOF

cat >>"$targetdir/appcast-devel.xml.tmp" <<EOF
<h2>About v$version Update</h2>
EOF

blackfriday-tool update-descriptions/showyedge/beta.md >>"$targetdir/appcast-devel.xml.tmp"

cat >>"$targetdir/appcast-devel.xml.tmp" <<EOF
<p>
  <a href="https://showyedge.pqrs.org/">ShowyEdge WebSite</a>
</p>
]]>
      </description>
      <pubDate>$pubDate</pubDate>
      <enclosure url="https://showyedge.pqrs.org/files/ShowyEdge-$version.dmg"
                 sparkle:version="$version" length="$length" type="application/octet-stream"
                 sparkle:dsaSignature="$dsaSignature"
      />
    </item>

  </channel>
</rss>
EOF

mv "$targetdir/appcast-devel.xml.tmp" "$targetdir/appcast-devel.xml"
chmod 644 "$targetdir/appcast-devel.xml"
echo \
  '\033[33;40m' \
  "$(basename $0): appcast-devel.xml is updated." \
  '\033[0m'