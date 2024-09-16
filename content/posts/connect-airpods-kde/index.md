---
title: Connect AirPods with Linux
description: How to achieve a successful connection to AirPods with Linux
date: '2024-09-16'
draft: false
slug: '/pensieve/connect-airpods-linux'
tags:
  - Audio
  - Linux
---

## Problem

AirPods are not automatically recognized in Linux. To connect them via Bluetooth, you need to make some configuration changes.

## Solution

**1. Edit the `main.conf` file:**

Open the `/etc/bluetooth/main.conf` file as root and change the `ControllerMode` to `bredr`:

```config:title=/etc/bluetooth/main.conf
#ControllerMode = dual
ControllerMode = bredr
```

**2. Restart Bluetooth:**

Restart the Bluetooth service:

```bash
sudo systemctl restart bluetooth
```

**3. Connect AirPods:**

Long press the button on the AirPods case until the LED blinks. The case should appear in the Bluetooth accessories list.

**4. Connect multiple accessories (optional):**

If you want to connect multiple Bluetooth accessories at once, switch back to `dual mode` in the `main.conf` file.

![AirPods and MX Keys connected](./bluetooth-accessories.png)

**5. Automatic connection (optional):**

To enable automatic connection of Bluetooth devices upon boot, set `AutoEnable` to `true` in the `main.conf` file.

## Additional information

- You can find more information about Bluetooth configuration on the Arch Wiki: [https://wiki.archlinux.org/title/Bluetooth](https://wiki.archlinux.org/title/Bluetooth)
- If you are still having trouble, you can try troubleshooting tips from the Apple Support website: [https://support.apple.com/airpods](https://support.apple.com/airpods)
