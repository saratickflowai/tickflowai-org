# Quality Engineering and Automation plan, Batch 001 (v1.0, APPROVED by Sara 2026-11-24)

**Period:** 24 Nov to 30 Dec 2026. Works from `AUTOMATION_PLAN.md` and its rules. Before any push or pull request in the QA repo, the agent asks Sara. Any merge or retirement of old manual cases needs Sara's approval per module.

## 1. Target (Sara)
Automation finished for functionality and end-to-end UI, for 4 modules by 30 Dec. A module is done only when: catalog approved by Sara, functional tests automated, end-to-end UI flows automated, each test passes 3 runs in a row.

## 2. Modules and planned finish (estimates, firm dates after the first Friday)
| Module | Planned finish |
|---|---|
| Permissions (RBAC) | Tue 8 Dec |
| Tickets | Fri 18 Dec |
| Service Catalog | Fri 25 Dec |
| SLA | Wed 30 Dec (highest risk) |

## 3. Week by week
| Week | Work | What Sara receives on Friday 6 PM |
|---|---|---|
| Today to Fri 27 Nov | Plan review (does the plan help our goals). Retest of the bugs already Resolved on the board (needs board access and DEV test accounts). RBAC automation starts. Tickets catalog preparation. | Plan review result. Retest results. |
| W1 28 Nov to 4 Dec | RBAC automation (API cases first, then UI). Tickets catalog written. | RBAC progress, Tickets catalog to approve by Thu 3 Dec. |
| W2 5 to 11 Dec | RBAC finished on 8 Dec. Tickets automation starts after approval. Service Catalog catalog written. | RBAC done report. Service Catalog catalog to approve by Thu 10 Dec. |
| W3 12 to 18 Dec | Tickets functional and end-to-end UI. SLA catalog prepared (reuse of the old SLA tests). | Tickets done report on 18 Dec. SLA catalog to approve by Thu 17 Dec. |
| W4 19 to 25 Dec | Service Catalog functional and end-to-end UI. | Service Catalog done report on 25 Dec. |
| W5 26 to 30 Dec | SLA functional and end-to-end UI. | SLA done report on 30 Dec and a batch summary. |

## 4. Weekly bug numbers
Every Friday: bugs raised, Resolved, retested (verified or reopened), rejected by the developer, duplicates (target zero). I do not guess the numbers in advance. A reopened bug mentions Abdelrahman with steps and evidence. The Defect Manager reads his comments before retesting.

## 5. Needs from Sara
Read access to the Azure DevOps board. The DEV test account passwords in the QA environment file or the pipeline secret (not in chat). Approval of the three catalogs on the dates above. Her OK before each push or pull request in the QA repo.

## 6. Usage (planned)
Automation share: 30% of the plan usage (20% plus the unused Security and Performance 10%). Planned vs actual reported every Friday.
## 7. Risks
Tickets and SLA are large modules. DEV is shared and can be slow. The dates are estimates until the first measurement.

## Update v1.0 (Sara, 2026-11-24)
- Order: Permissions first, then Tickets, then Service Catalog **with its tasks**, then SLA.
- The SLA module covers SLA on tickets and SLA on service request tasks (the tasks of the Service Catalog). Both are in scope.
- Usage: Automation gets 20% plus the unused Security and Performance 10%, so 30% in this batch.
- **Access:** the DEV test accounts already exist in Sara's environment file. The cloud workspace where I work has no `.env` and cannot reach dev.tickflowai.com yet (see the reply). Until that is solved, tests are written here and run where DEV is reachable.
