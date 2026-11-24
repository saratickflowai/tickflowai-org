# Gap G5: Sending identity for outreach emails - DRAFT v0.1

**Date:** 2026-11-22. **Status:** Draft for discussion. Nothing is decided.

## The gap
The original document does not say which domain and mailbox send outreach emails. Cold email sent from the main domain (tickflowai.com) can get that domain flagged as spam. Then **product emails also go to spam**: invites, password resets, trial and notification emails. Customers could not sign in.

## Facts we already have
- Outreach channels: email and LinkedIn only (D-49). LinkedIn is sent by the founders by hand.
- Two shared inboxes: the Connect inbox (reach leads, send proposals) and the Support inbox (D-38).
- The product already sends trial emails on a schedule.
- Agents only draft. Sending needs founder approval.

## Options for the Connect inbox domain
| Option | What it is | Good | Bad |
|---|---|---|---|
| A (recommended) | A **separate domain** just for outreach (for example a close variant of the name) | If it gets flagged, the main domain and product emails are safe | Small yearly cost. A new mailbox needs 3 to 4 weeks of slow warm-up. |
| B | A **subdomain** of tickflowai.com | Cheaper, looks closer to the brand | The main domain can still be hurt |
| C | The main domain with strict limits | No cost, no warm-up | Highest risk. Not recommended. |

## Rules proposed for any option
1. **Warm-up:** start with a few messages a day and grow slowly over weeks.
2. **Daily limit** per mailbox, kept small.
3. **Auto-pause:** if many messages bounce or someone marks them as spam, sending stops and both founders are told (a risk, D-36).
4. **Three DNS records** (SPF, DKIM, DMARC) are set up on the new domain. They prove the emails really come from us. Abdelrahman or whoever manages the domain adds them.
5. **Stop link** in every message (D-47 rules).
6. **Support inbox stays on tickflowai.com.**
7. **After a lead replies**, the conversation can move to a founder's normal mailbox.

## Cost (to verify before buying)
A domain is roughly $10 to $15 a year. A mailbox from a standard email provider is roughly a few dollars a month. This is separate from the Claude budget.

## Sara's answers so far (2026-11-22)
- TickFlowAI already has 3 mailboxes: **no-reply** (system emails), **connect**, and **support**.
- The sender is **TickFlowAI** (the brand). It has nothing to do with the founders' names.
- Who sends: most likely **the system sends after both founders approve**. Details to discuss between Sara and Abdelrahman later. Until sending is set up, agents only draft.
- Still open: which domain option (A, B or C), and the cost.

## Final answer (Sara, 2026-11-22)
Cold emails and marketing emails go out from **connect@** on the main domain (option B). If a problem appears, we look for a fix then. The safe habits in the rules above stay in place.

