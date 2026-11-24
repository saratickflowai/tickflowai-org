# Quality Engineering company - Batch 001 (24 Nov to 30 Dec 2026) - DRAFT, waiting for Sara's approval

**Mission:** every feature of TickFlowAI is tested, including misuse, and the tests are automated so they can run again at any time.
**Works from:** `AUTOMATION_PLAN.md` in the QA repo (saratickflowai/TickFlowAI-QC) and its rules. Sara is the QA lead.
**Plan:** `plans/director-plans/03-automation-plan.md` (v1.0, approved). RBAC detail: shared folder `qa/permissions-automation-plan.md`.

## 1. Team
| Agent | Batch 001 | Job in this batch | Output |
|---|---|---|---|
| QA Director | ON | Plan review, module order, weekly bug numbers, explains any plan change to Sara | Plan review, weekly report |
| Test Analyst | ON | Catalogs for Tickets, Service Catalog (with tasks), SLA (ticket SLA and service-request-task SLA). Positive, negative, edge and misuse cases. Shows merge or retire counts for Sara | Catalog files in the QA repo |
| Automation Engineer | ON | Playwright + TypeScript, Page Object Model, no fixed waits, 3 passes in a row. API cases first, then UI. **One test first, Sara approves, then the rest** | Tests in the QA repo (push only with Sara's OK) |
| Defect Manager | ON | Retest bugs set to Resolved. Raise new bugs (real, no duplicates, severity with reason). Mention Abdelrahman with steps and evidence when reopening | Board updates |
| API Tester, Integration Tester, Exploratory and UX Tester | OFF | Not in this batch | - |
| Security Tester, Performance Engineer | GATED, OFF | Their 10% usage moves to Automation | - |
| AI Evaluation Engineer | POSTPONED | - | - |

## 2. Targets (Sara's targets govern)
A module is done only when: catalog approved by Sara, functional tests automated, end-to-end UI flows automated, each test passes 3 runs in a row.

| Module | Planned finish (estimate, firm after Fri 27 Nov) | Today |
|---|---|---|
| Permissions (RBAC) | Tue 8 Dec | Catalog approved, 152 cases: 73 automated, 64 left, 14 retired, 1 cannot automate (branch `stage-3-rbac`, not merged) |
| Tickets | Fri 18 Dec | No catalog yet |
| Service Catalog (with its tasks) | Fri 25 Dec | No catalog yet |
| SLA (tickets and service request tasks) | Wed 30 Dec, highest risk | About 163 old SLA tests to reuse |

Weekly bug numbers (no guess in advance): raised, Resolved, retested (verified or reopened), rejected by the developer, duplicates (target zero).

## 3. Tasks and deadlines
| When | Task | Agent | Sara does |
|---|---|---|---|
| Tue 24 to Fri 27 Nov | QA plan review: does the plan help our goals | QA Director | Read, decide on changes |
| Wed 25 Nov | First test TC-RBAC-0128 (catalog.manage, API) written | Automation Engineer | Approve the test, then the rest follow |
| By Fri 27 Nov | List and retest bugs already Resolved on the board | Defect Manager | Give board access |
| 24 Nov to 1 Dec | RBAC Group A: 15 real-action API cases | Automation Engineer | OK each push |
| Thu 3 Dec | Tickets catalog ready | Test Analyst | Approve |
| 2 to 8 Dec | RBAC Group B: 44 UI visibility cases. RBAC done Tue 8 Dec | Automation Engineer | OK push and pull request |
| Thu 10 Dec | Service Catalog catalog (with tasks) ready | Test Analyst | Approve |
| 9 to 18 Dec | Tickets functional and end-to-end UI | Automation Engineer | OK pushes |
| Thu 17 Dec | SLA catalog ready (reuse of old SLA tests) | Test Analyst | Approve |
| 19 to 25 Dec | Service Catalog functional and end-to-end UI | Automation Engineer | OK pushes |
| 26 to 30 Dec | SLA functional and end-to-end UI. Batch summary | Automation Engineer, QA Director | Read |
| Every Friday 6 PM | Weekly report: module status, bug numbers, next week's plan | QA Director | Read, decide |

RBAC Group C (5 cases) needs Sara's decision first: invite accept by hand (0115), rename a system role on DEV (0144), bug #1590 (0148), where the audit log is shown (0150).

## 4. Rules for this company
- Everything in the system gets tested, including misuse (wrong input, repeated or rapid use, very large input, odd order, wrong role).
- Every test activity ends in written test cases in the catalog.
- Before any push or pull request in the QA repo, ask Sara. Merges or retirements of old manual cases need Sara's approval per module, shown as counts.
- The Defect Manager retests, it never fixes. Bug state Resolved means ready for retest. It reads Abdelrahman's comments first and does not argue "by design" or "will not fix": it reports the reason to Sara.
- Critical bugs (customer, demo or launch blocker, security, data loss) go to both founders at once.
- DEV passwords only in the git-ignored `.env` and pipeline secrets. Never in chat or files.

## 5. Sara approves to start
1. This team, module order and task list.
2. TC-RBAC-0128 as the first test (one test, then her approval for the rest).

## 6. Needs from Sara (blocks running tests from the cloud workspace)
- Add `dev.tickflowai.com` and `dev.azure.com` to Allowed domains in the cloud environment settings.
- Add the DEV test-account passwords as environment secrets with the names in `.env.example`.
- Read access to the Azure DevOps board for the Defect Manager.
Until then, tests are written in the cloud and run on Sara's laptop.
