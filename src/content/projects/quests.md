---
title: "Quests"
category: "Productivity"
year: "2026"
featured: true
order: 1
description: "A habit tracker where streaks can freeze, break, and be won back. Daily challenges, streak restores, trophies, offline support and an installable app, designed and built from scratch."
tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Zustand"]
image: "/images/quests.webp"
images:
  [
    "/images/quests1.webp",
    "/images/quests2.webp",
    "/images/quests3.webp",
    "/images/quests4.webp",
    "/images/quests5.webp",
    "/images/quests6.webp",
    "/images/quests7.webp",
  ]
live: "https://quests.divineobeten.xyz"
caseStudy: true
---

## Overview

Quests is a habit tracker built around one idea: a missed day shouldn't have to end a streak. You set a challenge, cross off a box for each day, and spend a streak restore to win back a streak you broke. I designed and built the whole product, from the rules engine and database to the motion details.

## What I Built

I owned everything: product thinking, design, and engineering.

**Quests of Any Length**
Built quests that run for a day, a week, a month, a custom number of days, or with no end date at all. Each card shows its length and how far along you are.

**Day Boxes**
Built the day-by-day boxes, with the weekday inside each box and the day number beneath it. An X draws itself when you check in, and the finished days fade back so the current day stands out.

**Skipped Days**
Built skipping, so you can leave out weekends, Tuesdays or any weekday you choose. Skipped days never break a streak and don't count towards the quest's length.

**Streak Restores**
Built the restore system. Miss up to three days and spend a restore to keep your streak. After that, the quest can be restarted or deleted. Restores are earned by finishing quests, reaching milestones on infinite quests and unlocking trophies.

**Freezing a Quest**
Built quest holds. A held quest turns blue and frosts over, with large white snowflakes and ice lines that form on the card. The days you're away are neither missed nor counted. The frost is pure CSS, using only opacity and transform with no filters and no endless animation, so it stays smooth on slow devices.

**Trophies**
Built 24 trophies across four ladders: getting started, streak length, quests completed and check-ins in a single day. Each one pays out 0 to 5 restores, and a completed-quests tab keeps the history with dates, best streak and how many days were restored, skipped or held.

**Works Offline, Installs as an App**
Built it as an installable app with a hand-written service worker. Offline, every change is saved on the device and sent in order when the connection returns, running through the same rules as the server. If the server rejects a change, that one is dropped and the rest carry on.

**Auth & Sync**
Built Google sign-in with sessions, so quests and streaks follow you across devices.

**Design**
Designed the interface myself: a plain white canvas, Geist type, soft-bordered cards with state colours (white when healthy, blue when frozen, grey when a restore can save it, red when it can't), and motion used with restraint, including `prefers-reduced-motion` support.

## Engineering Decisions

- **A pure domain core.** Streaks, restores, skips, holds and trophies are plain TypeScript with no React or database imports, covered by tests with fixed dates.
- **One set of rules, two places.** Every state change is a single function. The browser runs it for an instant update and the server runs the same function on the database state, so the two can't drift apart.
- **Streaks are derived, never stored.** A stored counter eventually disagrees with the check-ins. A streak computed from them can't.
- **Saving only what changed.** The server works out which rows to insert, update or delete, and writes them in a transaction that locks the user's row so two devices take turns.
- **Offline by queueing actions, not data.** The browser stores what you did while offline and replays it against the server's own data, instead of merging two copies.
- **Tested end to end in layers.** Domain, persistence diffing, the store, components and the service worker are all covered with Vitest and Testing Library, using fake clocks and fake networks.

## More from this project

## Outcome

A live, installable habit tracker with a tested rules engine, a real backend and offline support, built to show product thinking, engineering structure and motion craft in one project.
