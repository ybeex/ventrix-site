---
title: "Consumables vs assets: why your inventory needs two rulebooks"
description: "Tools come back; gloves don't. Learn why tracking them the same way fails, and how to set minimums, reorder points and check-outs for each."
date: 2026-10-26
tags: ["Inventory", "Workshops"]
---
Most small inventory systems fail for a simple reason: they treat a drill and a box of drill bits as the same kind of thing. They aren't. One comes back, and the other gets used up. Mixing them up is the reason many spreadsheets end up full of numbers nobody trusts.

## Two kinds of stock

**Assets** are things that go out and come back: power tools, ladders, test equipment, laptops, a projector. You care about *which one*, *who has it* and *what condition it is in*. Each is its own thing.

**Consumables** are things that get used up: gloves, fasteners, tape, solvent, printer paper. You care about *how many are left* and *when to reorder*. Individual units don't matter.

The questions you ask are different:

| | Assets | Consumables |
|---|---|---|
| Key question | Who has it? | How many are left? |
| Movement | Check out, check in | Use up, restock |
| Risk | Lost, damaged, late | Run out mid-job |
| Alert | Overdue | Low stock |
| Count | Is it here? | How many are here? |

## What goes wrong when you mix them

**Tracking a consumable like an asset.** Nobody wants to log "checked out one glove to Amaka". People stop, the system falls behind, and then the whole record loses credibility, including the part about tools.

**Tracking an asset like a consumable.** "We have 6 drills" is useless when 5 are out and the sixth is broken. You need to know which drill is where.

**One alert for both.** "Overdue" makes sense for a ladder. "Overdue" for a box of screws is nonsense.

## Setting up consumables

For each consumable, decide four things:

1. **Unit.** Pairs, boxes, metres, litres. Pick the unit you actually reorder in.
2. **Minimum.** The quantity at which you must reorder. Think about lead time: if the supplier takes a week and you use 10 a day, your minimum is at least 70.
3. **Reorder quantity.** How much to buy. Round to a pack size.
4. **A "near minimum" buffer.** A second, earlier warning gives you time to act before you're actually low.

A rough rule: minimum = average daily use × supplier lead time in days, plus a safety margin for the critical items. Start there and adjust after a month of real data.

## Setting up assets

For each asset:

1. **Identity.** A name, a number or tag, and ideally a photo. "Drill (red)" isn't enough once you have three red drills.
2. **A home.** Which shelf it lives on, so "missing" means something.
3. **A condition.** Good, damaged, needs inspection. Update on every return.
4. **Due dates.** Default loan lengths by type.

## Counting them differently

When you count, the two kinds behave differently:

- **Consumables:** enter the physical quantity. The system compares it to what it expects, and any difference needs a reason (used and not logged, miscounted, damaged, stolen).
- **Assets:** confirm each one is present. A missing asset isn't a "variance of -1"; it's a specific tool someone needs to find.

Counting by shelf, on a regular cycle, beats one annual count that takes a weekend and finds nothing useful. Our guide to [running a stock count](/blog/how-to-run-a-stock-count) goes through it step by step.

## Don't track everything

Some items are cheap enough that tracking costs more than losing them. A reasonable approach is to track consumables where running out stops work, and ignore the rest; track assets above a value or risk threshold, and treat the rest as consumables ("hex keys, bulk").

## How Ventrix handles this

Ventrix treats [assets and consumables differently](/features/stock-levels) from the start. Assets are checked out and back in; consumables are used up and restocked. Consumables have minimums and reorder quantities, and the [Low stock](/features/stock-levels) list shows how short you are and how much to buy. But the principle holds in any system, or on paper: two kinds of stock need two sets of rules.
