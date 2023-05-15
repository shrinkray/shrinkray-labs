---
publishDate: "May 15, 2023"
title: "Try the UTM app virtual machine on your M1/M2 silicone mac"
description: "VirtualBox is not cutting it for a VM on a M1 Mac"
excerpt: "I tried UTM with outstanding results. If reading the Oracle tech docs is confusing and exhausting check out this new VM platform with a clean UI."
image: "~/assets/images/utm.jpg"
category: "Try"
tags: [virtual machine, ui design, utm, windows]
---
Revised: Originally published on Dec 1 2022
## The problem

I needed a Windows virtual machine to test screen reader tools. I initially planned to use VirtualBox, but my current machine is an M1 Silicone. I found conflicting info on whether this was possible. On VirtualBox docs and Reddit, you'll find people looking for a solution. UTM is referenced in some posts with links to a blog post for setting up an earlier version of UTM. I found this problematic.

## Working solution

Now with the latest (at the time of this post is) [UTM 4.x](https://mac.getutm.app/), we have a complete solution. With little effort you can have your Windows virtual machine, utilizing the [Windows Insider Preview Downloads](<https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewARM64>) (P.S. you do not have to be a Microsoft pro to build this). You do need to setup a user account with just an email address. Once you do, Microsoft makes it easy to find current OS builds. Look to the column on the right of the page if you need Windows 10 or some other preview.
https://www.microsoft.com/en-us/windowsinsider/preview-windows
https://learn.microsoft.com/en-us/windows-insider/flight-hub/
https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso?rfs=1
https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewarm64

On the form selector, choose the build with the highest number, which will probably be the Beta Channel. Confirm your languange then move to download the VHDX file. On some earlier blog posts they recommend converting the *.VHDX* format to *.qcow2*. This is no longer necessary. UTM 4 now works directly with the VHDX formats. The UTM interface is not ground breaking but is straightforward compared to what we have with VirtualBox.

At the time of this writing I had no problems setting up the VM on Montery OS. Find a full video tutorial on the steps to do this using the tutorial by Andrew Tsai, linked below. 

### Update: 2023-05-15 Virtual Box now supports M1/M2 Macs
See steps to setup: You can get the [Developer Preview](https://www.virtualbox.org/wiki/Downloads) for MacOS / Arm64. I have not tested this yet. I will write a new post when I do.

## Installing Windows 10/11 Disc Image

1. Download [UTM 4.x App](https://mac.getutm.app/)
2. Install UTM on your Mac Silicone machine
3. The trial period is three months so if you have something installed for longer, Windows will start but will not be activated and you will not be able to use the OS. 
_For people who remember VirtualBox, you could save a snapshot of the VM and restore it to a previous state. This is not possible with UTM. You will need to reinstall the OS unfortuantely._
4. On Windows Insider account look for _**Windows 11 on Arm Insider Preview**_
5. On select edition, Choose the **Beta Channel**, or latest version 
6. Then select language, in my case it is the English (United States) and download the VHDX file
7. It can take up to 30 minutes to download the file.

### Setup UTM

8. Back in UTM Choose **Create a New Virtual Machine** button
9. You want **Virtualize**. Emulate will run much slower
10. The OS is Windows, on that dialog we want to choose to import the VHDX image, click **Browse** to select the file we've downloaded
11. Ensure the options for UEFI Boot and Drivers for SPICE tools are checked
12. Now allocate half the memory of our computer  and half the cores
13. Make a shared folder in your Documents folder; call it _UTM Shared folder_, (something like that)
14. On the summary view, you should have the following options:
Engine: QEMU, use virtualization. Architecture: ARM64 (Arch64); System: QEMU 7.2 ARM Virtual Machine; RAM: 4GB; CPU: 4 cores; Storage: 64GB; Network: Operating System: Windows; Skip boot image, share directory. 
15. **Save**

### Setup Internet Connection
16. In UTM you'll see the new VM, click the play button to start the VM
17. One of the problems with the setup is that windows requires the Internet to complete this setup processes. 
18. Click on the Windows 11 UI. Hold down the **Function key**, then **Shift + F10**
19. This will launch the command prompt (terminal). this will help us bypass the known internet network error. At the prompt type: `oobe\bypassnro` and hit enter

### Complete Windows Setup

20. The whole virtual machine will restart. Click to add a keyboard, skip keyboard layout, ... When you get to the Let's connect you to a network, click on the WiFi icon, click 'I don't have internet' and click 'continue with limited setup'.
21. In next dialog, agree to license agreement, enter your Name then Next, Next, Next, Accept and Windows will now finish the setup process.
22. Next window, if it asks you to install a new build of Windows, choose 'Close'. 

### Install SPICE tools

23. Back in UTM, with SPICE tools downloaded, find in your Windows Explorer, see **CD Drive (D:) UTM** and choose to install. It will install then ask to reboot. With SPICE tools installed, go to Display Settings, (you can find by right-clicking on the display background) and in contextual menu choose 'Display Settings'. 
24. Now we have the ability to change the resolution. For my 14-inch Mac, 1800 x 1169 is perfect. 
25. In the UTM Shared folder, you can use it to transfer files between your Mac and Windows VM.

## Installation is complete

We are now able to run our VM with Windows 11 on our M1/M2 Mac. We can share files between the two systems. We can also change the resolution of the VM. Use the keyboard to copy and paste text between the two systems using windows key + C (copy) and windows key + V (paste).



### Need a phone VM?

Did you know it was possible to install virtual machines on a phone? I had not considered this but it makes sense. UTM offers a solution and it looks as easy as from a desktop. See their page to learn if this install [mobile VMs on your iOS Phone](https://getutm.app/) will work for your project. Please read the FAQ for details such as supported OS versions and jailbreaking vs sideloading.

### Resources

- Find the complete video annotated with chapters and links: [Run Windows 11 ARM for FREE on M1/M2 Mac using UTM 4! Full setup tutorial for macOS Ventura](https://www.youtube.com/watch?v=KGZMV8IuUtA)
- Watch the full video. The author details a bug in the WinOS setup along with a simple terminal fix needed to associate your Mac's WiFi to Windows to complete installation.
- UTM stands for: Universal Turing Machine
