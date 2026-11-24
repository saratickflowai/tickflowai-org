# Gap G8: Where performance and security tests run - DRAFT v0.1

**Date:** 2026-11-24. **Status:** Draft for discussion. Nothing is decided.

## The gap
Sara wants one performance run and one security / pentest run (D-14 to D-19). Today QA only has the shared DEV environment (dev.tickflowai.com), which Abdelrahman also uses. A heavy test there can slow him down, break his work, and give wrong numbers.

## Example
We send 500 users at the site to measure speed. At the same time Abdelrahman is testing his new feature on DEV. His page becomes slow, he thinks his code is broken, and our speed numbers are wrong because his work was also running.

## Options
| Option | What it means | Good | Bad |
|---|---|---|---|
| A. Time window on DEV (recommended to start) | Run the heavy tests only at a time agreed with Abdelrahman (for example at night). He is told before and after. | No cost, no setup. | Numbers are less exact than a clean copy. Other work must stop during the window. |
| B. Separate test copy | Abdelrahman sets up a second environment, same as DEV, only for performance and security tests. | Exact numbers, no disturbance. | Costs money and needs his time to build. |
| C. Production | Never. | None. | Real customers could be harmed. |

## Safety rules (any option)
1. Production and the admin portal are never tested (agents have no access, D-63).
2. Security tests on DEV only, and only after both founders approve the plan and the window.
3. Tests are limited to our own system. No test on third-party services (for example the payment provider, WhatsApp, Microsoft).
4. Start small (low load), increase step by step, stop at once if the system slows for Abdelrahman.
5. A third-party pentest, if the founders ever want one, is a separate decision.

## Question for Sara
Start with option A and decide on option B after the first performance run shows whether we need it? I will assume yes.

## Agreed with Sara (2026-11-24): option A
- Performance and security tests run on DEV inside a time window, for example 6 PM to 12 AM (example only; each run gets its own window).
- **Sara tells Abdelrahman, outside the system, before the window.** During the window he does not work on DEV or deploy to it, until Sara says "done". This applies to both security and performance runs.
- The window ends only when the QA side reports the run finished and Sara confirms "done".
- Option B (separate test copy) is not needed now. We can revisit it later.
- The safety rules above still apply (no production, no third-party services, both founders approve the plan, start with low load).

## Update after Sara's reply (2026-11-24, later)
- **Time rule:** before every performance or security run, the QA side gives Sara the time it needs (start, expected end). Sara agrees it and tells Abdelrahman. No run starts without it.
- **When finished:** QA reports "finished" to Sara. Then Sara tells Abdelrahman outside the system that DEV is free.
- **Outside pentest company:** decided later, when we plan the security run. At that point we decide whether to do it and what exactly it covers.
- **Third-party services (plain meaning):** services our product uses but other companies run, such as the payment provider, WhatsApp, Microsoft sign-in and Teams, the email provider and the AI provider. We never send heavy or attack-style tests at them. Where a test needs them, we use test mode or fake responses.
