# The three TickFlowAI companies (Batch 001) - DRAFT, waiting for Sara's approval

**Date:** 2026-11-24. **Period:** 24 Nov to 30 Dec 2026. **Status:** BUILT, NOT STARTED. No agent runs until Sara approves its company.
**Built from:** role cards, decision rights, Gap 6 access table, Gap 9 measures, Batch 001 plan v0.3, the three approved Director plans (v1.0), content calendar.

| Company | Folder | Director | Agents ON in Batch 001 | Main target by 30 Dec |
|---|---|---|---|---|
| Marketing | `marketing/` | Marketing Director | 5 + Intelligence (shared) | 3 to 4 videos a week, a post on the other days, 100 to 200 people saw our posts |
| Sales | `sales/` | Sales Director | 5 + Intelligence (shared) | 100+ leads contacted, 10 to 20 replies, 1 to 5 demos |
| Quality Engineering | `quality-engineering/` | QA Director | 4 | 4 modules automated: Permissions, Tickets, Service Catalog (with tasks), SLA |

**Head office (shared, not a company):** Chief of Staff (the coordinator in this project), Independent Reviewer, Auditor.

## 1. All 25 agents and their Batch 001 status
| # | Agent | Company | Batch 001 |
|---|---|---|---|
| 01 | Chief of Staff | Head office | ON |
| 02 | Independent Reviewer | Head office | ON (checks the Friday package, the first email batches, each new test file) |
| 03 | Auditor | Head office | ON once, 30 Dec (first monthly audit) |
| 04 | Marketing Director | Marketing | ON |
| 05 | Market and Competitor Intelligence | Marketing and Sales (shared) | ON, light |
| 06 | Content Creator | Marketing | ON |
| 07 | Social and Community | Marketing | ON, light |
| 08 | Marketing Analyst | Marketing | ON (weekly) |
| 09 | Video Producer | Marketing | ON |
| 10 | Sales Director | Sales | ON |
| 11 | Lead Researcher | Sales | ON |
| 12 | Lead Verifier and CRM Steward | Sales | ON |
| 13 | Outreach Writer | Sales | ON |
| 14 | Demo and Proposal Prep | Sales | ON (standard demo kit first, then on each booked demo, Critical) |
| 15 | Customer Success Agent | Sales | DORMANT until the first paying client |
| 16 | QA Director | Quality Engineering | ON |
| 17 | Test Analyst | Quality Engineering | ON |
| 18 | Automation Engineer | Quality Engineering | ON |
| 19 | Defect Manager | Quality Engineering | ON |
| 20 | API Tester | Quality Engineering | OFF (API cases this batch are done by the Automation Engineer) |
| 21 | Integration Tester | Quality Engineering | OFF |
| 22 | Exploratory and UX Tester | Quality Engineering | OFF |
| 23 | Security Tester | Quality Engineering | GATED, OFF (share moved to Automation) |
| 24 | Performance Engineer | Quality Engineering | GATED, OFF (share moved to Automation) |
| 25 | AI Evaluation Engineer | Quality Engineering | POSTPONED |

An OFF agent is still defined. It starts only when a batch plan needs it and Sara approves (D-02e).

## 2. How a company starts work
1. **Sara approves the company** (its folder README: team, tasks, targets, needs). Each company can be approved alone.
2. **The coordinator opens one thread for that company.** The thread acts as the Director and uses the agent files in `.claude/agents/`. Only agents marked ON for the batch are used.
3. **The Director posts the plan for today to Friday 27 Nov**, then every Friday the plan for the next week (Saturday to Friday).
4. **Agents make drafts only.** Drafts are saved in the shared project folder (content in `org-design/content/<week>/`), reports in the org repo `reports/weekly/`. Lead personal data goes only to HubSpot.
5. **Independent Reviewer checks** before a founder sees it.
6. **A founder approves, and a founder sends or publishes.** No agent posts, sends, publishes, deletes, pushes or merges.
7. **Every Friday 6 PM Cairo:** one weekly report per company with the template in `templates/weekly-report-template.md` (target, benchmark, actual). First one: Friday 27 Nov.
8. **Day-14 check on Tue 8 Dec:** targets vs real numbers and usage. The Director proposes changes, Sara decides.

## 3. Rules every company keeps
- Nothing goes out without founder approval. Money, price, contracts, Enterprise terms and legal risk need both founders (record or skip with a reason is allowed).
- Every risk is shown to both founders.
- Only public prices. No discounts. No competitor names or price comparisons in public content. No invented numbers.
- No passwords, keys, tokens or lead personal data in git, chat, documents or logs.
- A change to an agreed rule goes into `policies/decisions-log.md` first.
- Usage split: Marketing 30%, Sales (leads) 30%, Automation 30% (20% plus the unused Security and Performance 10%), Management 10%. Planned vs actual every Friday. Budget: the $20 plan, so agents use the Sonnet model.

## 4. What Sara approves now
For each company: "start" or "change first". The exact list is in each company README, section "Sara approves to start".
