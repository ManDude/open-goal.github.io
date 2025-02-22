---
sidebar_position: 2
---

# Frequently Asked Questions

## General Questions

### How do I play it?

:::caution
You will need your own legitimately obtained copy of the original game.  The jak games are not rare and can be found used for very affordable prices.

We support **_all_** versions of Jak 1

Jak 1 - https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=jak&_sacat=0
:::

If you are on Windows, we encourage you to use our Launcher which simplfiies the installation process.  You can find a link to get this from the homepage https://opengoal.dev

If you are on Linux, at this time the Launcher is not yet ready, so you will have to get the latest release from our GitHub repo https://github.com/open-goal/jak-project/releases and provide the path to your ISO like so - `./extractor <path-to-iso>`.  Once this completes, you should be able to run `gk` to start the game.

### What are the minimum requirements?

These are the minimum architecture requirements for the project at the time of writing:
- x86-64 CPU with **AVX** support.
  - Most, if not all, 64-bit CPUs should work. OpenGOAL has a very small CPU footprint, so most modern CPUs will run the game fine.
- Graphics card that supports **OpenGL 4.3**.
  - If you have an AMD card, you should definitely update to the latest drivers.  AMD has recently released an update that significantly boosts performance in OpenGL (potentially 2x the FPS!)
- You might experience slower loads with a hard drive compared to an SSD.

#### Will you always require AVX?

Yes, AVX instructions are used for basically all vector math computations.

### Where can I Donate?

For several reasons, we are **not** accepting any financial donations of any kind.

### Why was this project started

First and foremost, for fun and the challenge.  We are primarily interested in learning how the original games were made, and understanding the technology behind them.  The end result of a working PC port that can potentially support mod and such is very motivating and exciting -- but ultimately secondary.

### Is this project legal?

Yes.

### My antivirus claims it's a virus, what gives?

It's not a virus, there is nothing we can do to solve false-positive detections.  If you have any doubts, our code and release process is entirely open-source and can be audited.

### How finished is the project?

Jak 1 is at a stage where it is mostly feature complete and bug free on the default settings.  Jak 2 is in very early stages.

### When is Jak1 | Jak2 | Jak3 | JakX

Please remember that we do this work for free, in our spare time, when we feel like it.  There are no rigid timelines that we make for ourselves, things will be done when they are done.

- Jak 1 is essentially complete, bug fixes and improvements will likely continue to be added overtime.
- Jak 2 is in very early stages, do not hold your breath on this being complete within atleast a year.
- Jak 3 will probably be worked on after Jak 2 is "complete"
- We are unsure if we will will on Jak X at this time

### Will you decompile Daxter or The Lost Frontier?

No, these games run on completely different engines and were not made by Naughty Dog.

### Will you decompile _insert non-jak game here_

No, we are no where near done with Jak yet, and other than experience -- not much is transferable from this project to others. The Jak games present a very unique set of challenges that we have solved that other games do not -- similarly other games pose entirely new sets of challenges.

Most importantly, we are motivated on working on Jak, not other games.  Those other games likely already have small niche communities plugging away at things in the background just like we were.

## Game Info

### Does the game have differences? I don't remember these options!

We have added a plethora of options to the game settings (and removed some that didn't make sense) so that you can have a more up to date experience, or a more PS2-like experience if you decide. It is up to you! There are also a bunch of extra goodies and added secrets to find out. We are aiming to keep the core gameplay (controls, physics, behaviors, etc.) identical however, so if you find any issues or differences with this then do not hesitate to tell us about it.

### Will there be bug fixes to the game?

The original game had a few issues of varying severity - from progress softlocks to crashing - that we are aiming to patch. The complexity of these issues is varying (if they were simple to reproduce and fix, Naughty Dog likely would have done it), but so far we have fixed 2 issues that could crash the game.

### Will there be mod support?

In the future yes! We intend to make it as easy as we can to make your own code or import graphics for the game.

## Troubleshooting

### I am getting "illegal operation"/"illegal instruction" errors when running the game or tools.

This shouldn't happen, so please contact us in the support channel of the discord server and we can help, and tell us if your CPU supports AVX, AVX2 or AVX512.

### The game is really slow.

Your GPU might be too weak. Some of our rendering code is a bit inefficient and can still be improved, but you should expect significantly better performance than for example running via an emulator.  Therefore, things might get better overtime -- or your hardware is just plain too limiting.

### The game crashed!!

Curses! Contact us in the help channel on the discord server and tell us about it! Post the log files as well. These are located in the `data/log` folder of the release (if you are using the Launcher, there is a button on the settings tab that takes you to the folder containing the `data` folder).

Make sure you tell us exactly how the crash happened.

### My controller doesn't work!

Our controller handling does need some work, but generally speaking any controller defined in this database should be supported https://github.com/gabomdq/SDL_GameControllerDB You can try the following until support improves:
- Make sure you only have 1 controller plugged in at a time to ensure that one is used
- Try leveraging Steam to get the controller recognized
- If your controller isn't in the DB above, you should follow the steps there to make a mapping for your controller

### I am having some other issue or found a bug with the game/tools.

First, scroll through our [issues](https://github.com/open-goal/jak-project/issues) page to make sure that your issue hasn't been reported already. If it hasn't, feel free to open up a new issue, or report it to us directly. Make sure you provide reproduction steps! We can't always guess why things go wrong.

## Technical Questions

### How is this project possible?

Naughty Dog created a custom programming language called [GOAL](https://en.wikipedia.org/wiki/Game_Oriented_Assembly_Lisp), along with a compiler for it. GOAL makes up 98% of all the code in Jak & Daxter, and the GOAL compiler does not have the same amount of optimizations as C or C++ compilers have, which means that the compiler often times left specific instructions that denote some specific kind of control flow, which lets us piece back the original structure of the code accurately for about 99% of the functions in the game. Nearly every type in GOAL also has an autogenerated debug `inspect` method, which prints all of a type's fields by default. These `inspect` methods can tell us what fields were in the type, at what offset, and what their type was.

### I'm a Developer, how can I help?

Our project moves very fast so it's hard to give an answer here that will remain true for weeks let alone months.

Some recommended steps are:
- Consult our GitHub README and get the project setup
- Look through our documentation that we try to update when we get a chance
- Look through our issue board on the github repository and see if you feel comfortable tackling a problem

Our codebase is almost entirely C++ with the exception of some throwaway scripts.  Of course you will eventually have to understand OpenGOAL, our flavour of the Naughty Dog language as the game is by-and-large _not rewritten_ in C++.

### Do you support ARM platforms

No, and the current core-development team has no one interested in undertaking the work to port our code to work on ARM platforms.
