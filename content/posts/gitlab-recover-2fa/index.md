---
title: GitLab recover 2fa
description: Easy technique to recover 2FA codes with GitLab
date: '2024-09-02'
draft: false
slug: '/pensieve/gitlab-recover-2fa'
tags:
  - GitLab
  - Security
---

## Problem

Recently, I became disconnected from my GitLab account. When trying to reconnect, I faced an error.
My authentication codes were incorrect!  
I believe the problem arose when I switched from a password manager.

## Solution

I discovered a method to resolve this issue.

> **⚠️ Mandatory**  
> For this, you need to have configured an SSH access to [gitlab.com](https://gitlab.com)

Here is the single command you need to execute:

```bash
ssh git@gitlab.com 2fa_recovery_codes
```

Et voila, you will have new recovery codes that you can connect with 🎉
