# Product Fact Sheet (DRAFT v0.2)

**Date:** 2026-11-22. **Status:** Draft for Sara's check. Not final.
**Source:** Azure DevOps board snapshot of 14 November 2026, plus the public pricing page.

## Rules Sara gave (2026-11-22)
1. **Only the user stories under "Solution" count.** Stories under Admin, Portfolio (public website) and Phase 2 are not part of the product facts.
2. **Everything under Solution is built**, whatever its state on the board (New, Active, Pending, Pending QC, In Testing or Closed). All of it is built as the board describes it.
3. **Which plan gets which feature comes only from the comparison table on the pricing page.** The table wins over the plan cards.

So every module below is **Live**. Marketing and Sales may talk about these features. Anything not listed here is not a product fact, and agents must ask before mentioning it.

**Scope used:** 132 stories under Solution, in 17 groups.

## Modules (all Live)

| # | Module | What it does | Plans |
|---|---|---|---|
| 1 | Incident Management (manual ticketing) | Create and handle tickets. Tickets start in a default state, AI adds extra information in the background. Resolve, verify and auto-close. | Core, Pro, Enterprise |
| 2 | CSAT and Quality Feedback | The requester confirms the fix. A satisfaction survey appears when a ticket closes. Auto-close without survey. A ticket can be reopened. | Core, Pro, Enterprise |
| 3 | User Management and RBAC | Sign-in with MFA, password recovery, invite-based registration, sessions, departments and manager hierarchy, system roles, custom roles, bulk actions on users. | MFA, sessions, departments: Core, Pro, Enterprise. Custom roles: Pro, Enterprise |
| 4 | Microsoft Entra ID and Teams | Single sign-on, directory sync with review and safety controls, confirmation of new users. Teams: user bot menu, approval actions, agent channel alerts, per-recipient notifications, in-app tabs for new ticket and service catalog. | Entra sign-in and directory sync: Core, Pro, Enterprise. Teams: Pro, Enterprise |
| 5 | WhatsApp | Inbound message routing, voice notes turned into text with sentiment check, outbound replies with 24-hour window handling, merge of duplicate profiles, per-recipient notifications. | Pro, Enterprise |
| 6 | Notifications Engine | Rules for who gets which alert, inbound email creates and threads tickets, in-app, email, Teams and WhatsApp channels, batching to avoid spam, full event payloads, fallback to in-app if Teams fails, notification history, inbound email admin settings, email branding. | Core, Pro, Enterprise |
| 7 | Knowledge Base | Articles and sections, staleness checks, view counts, publishing control, AI content gate, promotion thresholds, one vote per agent per section, draft source settings. | Core, Pro, Enterprise |
| 8 | AI and Automation Suite | Suggestions before a ticket is sent, sentiment analysis, score-based smart assignment, similar tickets, AI reply drafts, resolution summaries, trend detection and knowledge gap drafts, PII scrubbing. | Deflection suggestions, similar tickets, sentiment, reply drafts: Core, Pro, Enterprise. Resolution summaries and KB drafts from trends: Pro, Enterprise. Smart assignment: Enterprise only |
| 9 | Automation Rules Engine | Global rules run in order, dynamic service forms, loop detection. | Pro, Enterprise |
| 10 | Service Catalog | Service and form builder, request submission, approval routing and task creation, standalone tasks, workflow logic with conditions, protection of fields in use, edge cases, approver approve or reject. | Pro, Enterprise |
| 11 | SLA | Working hours and time zone, holidays and seasonal hours, SLA policies for tickets and for service request tasks, policy testing, suggested policies, policy history, time-left display, manual and automatic pause, "about to breach" view, warnings, escalation, automation on SLA events, test on past tickets, compliance report, permissions, plan rules. | SLA on tickets: Core, Pro, Enterprise. SLA on service request tasks: Pro, Enterprise |
| 12 | Reports | Global summary with CSV export, service fulfilment velocity, AI deflection and ROI, agent performance, approval bottlenecks, automation impact, audit and security log, catalog summary, global reporting rules. | Dashboard, ticket summary, agent performance, audit log: Core, Pro, Enterprise. Automation impact, approval bottlenecks, fulfilment velocity, catalog summary, AI deflection ROI, exports: Pro, Enterprise |
| 13 | Archiving and Data Lifecycle | Hot and cold data, nightly archiving, access to archived data, KB staleness after archiving, tenant isolation, retention cleanup, reliable follow-up actions. | Core, Pro, Enterprise |
| 14 | Billing and Subscription | Signup and workspace creation, 14-day trial with limits and warnings, plan checks per feature, paid seat rules, directory sync and seats, choose a plan and pay, payment provider and webhooks, billing page, customer portal, failed payments and recovery, downgrade warnings, AI allowance and usage meter, storage allowance, enterprise and comped accounts, welcome screen and onboarding checklist. | n/a |
| 15 | Localization (Arabic) | Choose and keep a language, Arabic screens (shell, sign-in, users, settings and all other screens), emails, notifications and reports in the user's language, AI drafts in the ticket's language, Arabic-aware search. | Core, Pro, Enterprise |

## Not product facts (left out on purpose)
- **Admin** (internal founders' portal, 56 stories), **Portfolio** (public website, 49 stories) and **Phase 2** (4 stories: Ask Flo, real-time agent chat and calls, roles and permissions, import from another system). Phase 2 items are future ideas and must not be promised.
- Two board items that are tasks, not features: "Clean Up Code" and the RBAC permission validation task.
- **9 stories that have no parent in the snapshot**, so they are not under Solution as the board shows it. Six of them look like parts of Knowledge Base and Notifications (they are in modules 6 and 7 above only if you confirm), plus "Generic (phase 0)" and "Marketing Plan".

## Confirmed by Sara (2026-11-22)
- The six parentless stories stay in Knowledge Base and Notifications.
- "Approver approve or reject service request" belongs to Service Catalog.

## Questions for Sara (older list, now answered except the pricing card)
1. Six stories (KB promotion threshold, one vote per agent, draft source mode, notification history ledger, inbound email admin settings, email branding) have no parent on the board. They look like they belong to Knowledge Base and Notifications. I included them in modules 6 and 7. Is that right?
2. "Approver approve or reject service request" (US-10.06) also has no parent. I included it in Service Catalog. Right?
4. One thing for your QA role: the board shows many modules as "Pending QC" or "In Testing". They are built, but not fully tested. Should agents say so if a customer asks, or only say "built"?
5. Pricing page: the Core card does not list "AI reply drafts", but the comparison table includes them in Core. By your rule, the table wins, so agents say Core includes them. The Core card on the website should be fixed to match.

## Update (2026-11-24)
- Sara: the website is correct about plan contents. So the Core card (no "AI reply drafts") is right. **AI reply drafts are NOT treated as a Core feature until Sara confirms the exact plan.** Agents must not say Core includes reply drafts. (This replaces the earlier note that the table wins for this one item.)
