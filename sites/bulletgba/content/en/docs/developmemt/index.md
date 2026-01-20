---
title: 'Development'
weight: 20
---

## How to build

### Requirements

- devkitPro r18 (buildscripts 20060412)
    - You need to use version r18. Do not use the latest release!

### Steps

Execute the following commands in Terminal.

```shell
git clone --depth 1 https://github.com/pqrs-org/BulletGBA.git
cd BulletGBA/bulletgba/
make
```

## How to replace graphic resources

### Steps

1.  Download [tools.tar.gz](https://github.com/pqrs-org/BulletGBA/releases/download/v5.0.0/tools.tar.gz)
2.  Execute following commands to setup gba-tools.

    ```shell
    mkdir ~/gba
    cd ~/gba
    tar zxf tools.tar.gz
    cd tools/bmp2c
    make clean all
    ```

3.  Modify graphic resources under `bulletgba/images`.
4.  Execute following commands to convert graphic resources.

    ```shell
    cd bulletgba/images/
    ./conv.sh
    ```

## How to add BulletML

### Requirements

You need PHP 5.0+ to convert BulletML to C++.

### Steps

1.  Extract source code.
2.  Put BulletML to `bulletgba/generator/data/xml/user`.
3.  Execute following commands to convert BulletML into C++.

    ```shell
    cd bulletgba/generator/
    make copy all
    ```

### Supported BulletML

The most BulletML are supported. But there are little exception.

- `<accel>` does not work properly.
- `<*Ref>` which contains `$rand` in `<param>` does not work properly.

    ```xml
    <fireRef>
        <param>1.0 * 3.4 + 4.2</param> <!-- *** This line works fine. *** -->
        <param>$rand + 1</param>       <!-- *** This line does not work properly. *** -->
    </fireRef>
    ```

## Thanks

BulletGBA uses following softwares and data.

- [devkitPro](http://www.devkitpro.org/)
- [BulletML](http://www.asahi-net.or.jp/~cs8k-cyu/bulletml/index_e.html)
- [弾幕やさん](http://shinh.skr.jp/sdmkun/zipup.cgi)
- [Mersenne Twister](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html)
- [GAU Cube Bold](http://www.graphicartsunit.com/gaupra/)
