---
publishDate: "Dec 1 2022"
title: "Try the UTM app virtual machine on your M1/M2 silicone mac"
description: "VirtualBox is not cutting it for a VM on a M1 Mac"
excerpt: "I tried UTM with outstanding results. If reading the Oracle tech docs is confusing and exhausting check out this new VM platform with a clean UI."
image: "~/assets/images/utm.jpg"
category: "Tutorials"
tags: [virtual machine, ui design, utm]
---
## The problem

I needed a Windows virtual machine to test screen reader tools. I initially planned to use VirtualBox, but my current machine is an M1 Silicone. I found conflicting info on whether this was possible. On VirtualBox docs and Reddit, you'll find people looking for a solution. UTM is referenced in some posts with links to a blog post for setting up an earlier version of UTM. I found this problematic.

## Working solution

Now with the latest (at the time of this post is) [UTM 4.x](https://mac.getutm.app/), we have a complete solution. With little effort you can have your Windows virtual machine, utilizing the [Windows Insider Preview Downloads](<https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewARM64>) (P.S. you do not have to be a Microsoft pro to build this). You do need to setup a user account with just an email address. Once you do, Microsoft makes it easy to find current OS builds. Look to the column on the right of the page if you need Windows 10 or some other preview. UTM provides a kit to install [mobile VMs on your iOS Phone](https://getutm.app/)! Please read the FAQ for details such as supported iOS versions and jailbreaking vs sideloading.

On the form selector, choose the build with the highest number, which will probably be the Beta Channel. Confirm your languange then move to download the VHDX file. On some earlier blog posts they recommend converting the *.VHDX* format to *.qcow2*. This is no longer necessary. UTM 4 now works directly with the VHDX formats. The UTM interface is not ground breaking but is straightforward compared to what we have with VirtualBox.

At the time of this writing I had no problems setting up the VM on Montery OS. Find a full video tutorial on the steps to do this using the tutorial by Andrew Tsai, linked below.

### Resources

- Find the complete video annotated with chapters and links: [Run Windows 11 ARM for FREE on M1/M2 Mac using UTM 4! Full setup tutorial for macOS Ventura](https://www.youtube.com/watch?v=KGZMV8IuUtA)
- Watch the full video. The author details a bug in the WinOS setup along with a simple terminal fix needed to associate your Mac's WiFi to Windows to complete installation.
- UTM stands for: Universal Turing Machine
