# Gap G9: How we measure the agents' work - DRAFT v0.1

**Date:** 2026-11-24. **Status:** Draft for discussion. Nothing is decided.

## The gap
Agents can write reports that say "I wrote 40 messages and ran 120 tasks". That shows they are busy, not that the work is good. We need numbers that show results.

## Rules
1. **Results, not activity.** We measure what the work produced and how much of it the founders had to fix.
2. **Every number comes from a record** (the board, HubSpot, the usage report, the approval buttons). No record means the number is not reported. Agents never invent numbers.
3. **Rework rate is the main quality number:** how many drafts the founders rejected or changed. The record/skip buttons already store a reason, so this is free to measure.
4. **The Auditor agent checks** a sample of reported numbers against the records every month.

## What each company reports (weekly batch report)
| Company | Result numbers | Quality numbers |
|---|---|---|
| Marketing | Posts and videos published vs planned. Post reactions and comments. Website visits and trial sign-ups if the data exists. | Share of drafts approved without changes. Share rejected, with reasons. |
| Sales (leads) | Leads checked and sorted (Go / Skip / Founders decide). Outreach sent after approval. Replies. Demos booked. Trials started. | Share of leads or emails founders rejected. Wrong data found (for example a wrong email). Bounce rate. |
| Quality Engineering | Tests added and passing. Valid bugs sent to the board. Bugs fixed and verified. | Bugs the developer rejected as not real. Duplicates (target zero). Tests that fail randomly. Bugs reopened after a fix. |
| All | Usage vs plan (D-02): planned vs actual. | Rework rate, as above. |

## What we do NOT report
Number of messages written, tasks started, hours "worked", or any count that only shows activity.

## Question for Sara
Do you agree that "founders approved without changes" is the main quality measure? I will assume yes.

## Update after Sara's questions (2026-11-24)
- **Post and video reactions and comments:** agents have no LinkedIn access (Gap 6). Default: once a week a founder exports the company page analytics file (or pastes the numbers) into the shared folder; the Marketing agent reads it. If the LinkedIn page is connected to HubSpot, the agent may read the numbers from there (to check). Without the data, the report says "no data", never a guess.
- **How a lead is sorted Go / Skip / Founders decide:** by the ICP rules (foundations section 2), using the lead record fields. The agent writes the reason for each lead. Founders see the reasons. The report only counts them.
- **Rejected vs came back (QA):** "Rejected by developer" = the developer says it is not a real bug (a wrong test, expected behaviour). "Reopened after a fix" = the developer fixed it, but it fails again on retest or later.

## Agreed with Sara (2026-11-24)
- Sara exports the page analytics every week and puts the file in the shared folder; the Marketing agent reads it.
- **Skip override:** the lead report lists every Skip with its reason, and gives Sara an option per lead: "I want to contact this one". A founder's choice always wins over the score. The lead then moves to Go (or Founders decide) and the choice and reason are recorded.
- The QA metric is now called **"Bugs reopened after a fix"** (before: "came back").
