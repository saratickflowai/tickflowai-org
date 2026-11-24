# Gap G7: Bugs and the one developer - DRAFT v0.2

**Date:** 2026-11-24. **Status:** Draft for discussion. Updated after Sara's reply.

## The gap
QA agents can find bugs faster than Abdelrahman can fix them. We must keep the board clean and trustworthy.

## Agreed with Sara (2026-11-24)
1. **One door.** All requests to Abdelrahman go through the Azure DevOps board. No agent messages him directly.
2. **No limit.** There is no cap on open bugs. Every verified bug goes to the board straight away. There is no "Found, not sent" list.
3. **Priorities are set outside the system.** Sara and Abdelrahman agree the order of work between themselves. Agents do not set the order of work.
4. **Triage before sending.** The QA triage agent checks every bug first:
   - It is real: reproduced, with nothing wrong in the test.
   - It is not a duplicate. No duplicates at all (check the board, including closed bugs, by TC ID and by title and steps).
   - Severity is written, always with the reason.
5. **Critical.** Anything that blocks a customer, a demo or a launch, plus security and data loss, is marked Critical. Both founders are told at once.
6. **Marketing and Sales** use the same board. A demo fix is Critical.

## Weekly report (changed to a plain summary)
Once a week the QA Director posts a short summary: bugs found, sent, fixed, still open, and the oldest open bug. It is information only. It does not stop or slow anything. Sara and Abdelrahman use it to decide priorities. Sara can switch it off.
