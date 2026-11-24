# Gap G11: The QA company uses the existing automation plan - DRAFT v0.1

**Date:** 2026-11-24. **Status:** Draft for discussion. Nothing is decided.

## The gap
The original requirements describe a new QA company, but do not mention that Sara already has an approved plan (`AUTOMATION_PLAN.md` in the TickFlowAI-QC repo, approved 2026-11-21). If the agents start a second plan, there will be two plans that disagree.

## Where that plan stands today (from the repo, read only)
- Stage 0 (git, GitHub, history) and Stage 1 (new project structure) are done.
- Stage 2 (test-case catalog): RBAC is done and approved (1,053 manual rows became 152 clean cases). The next modules still need catalogs.
- Stage 3 (automating module by module) is the main work and has not started.
- Stage 4 (suites, Azure pipeline, automatic bug raising) waits for pipeline access and an area for the bugs.
- Stages 5 and 6 (performance, security, visual, accessibility, final audit) come later.

## Proposal
1. **One plan.** The QA company works only from `AUTOMATION_PLAN.md` and its rules (`CLAUDE.md`, the quality rules in section 7). The agents do not write a second plan.
2. **Agents do the stage work.** QA agents map to the plan's stages: catalog agent (Stage 2), automation agent (Stage 3), pipeline and bug-raising agent (Stage 4), performance and security agent (Stage 5, uses the time-window rule from Gap 8), auditor (Stage 6).
3. **Plan changes go through Sara.** If an agent thinks the plan should change, it proposes the change. Sara decides. The plan file is updated, and the history file gets an entry (as the plan already requires).
4. **Marketing and Sales do not touch the QA repo** except docs (Gap 6).
5. **Order stays as Sara set it:** Marketing and Leads first, automation continues in parallel on its own budget share (D-20).
6. **Open items from the plan** (pipeline access, area for automation bugs, the Agent role account) stay with Sara. QA agents ask her when they reach them.
7. **Before any push or pull request** in the QA repo, the agent asks Sara first (her standing rule).

## Question for Sara
Is this right: QA agents only follow your plan and never replace it? I will assume yes.

## Agreed and changed after Sara's reply (2026-11-24)
1. **First step:** when the agent structure is built, the agent responsible for the plan (QA Director) reviews `AUTOMATION_PLAN.md` and reports to Sara: does the plan help our goals, yes or no, and why.
2. **Plan changes:** the agent never asks "accept or not". It explains: why the change is needed, what Sara can expect after it, what it costs (usage), and how long it takes. It says exactly what changes. Nothing changes silently: no test case is changed, no test is flipped (for example from positive to negative) without explaining why. Sara decides.
3. **Marketing and Sales do not touch the QA repo.** There is no document they need from it. Their documents go to the org repo. The Demo agent reads known bugs from the board. (Gap 6 table updated.)
4. **Open items** are things in the plan that wait for Sara: (a) pipeline access, so tests can run on each deploy; (b) the **area path** in Azure DevOps: a folder-like label that groups board items, so automation bugs sit in their own place and can be filtered; (c) the **Agent role test account** on DEV: one test user with the Agent role. soha@ works, saramagdyy61@ returned a sign-in error (401).
5. **Before any push or pull request** in the QA repo, the agent asks Sara. Sara gives the access each time.

## Final changes (2026-11-24)
- **Demo agent and bugs:** read-only access to the board's bug list, only to know which features are currently broken before a demo, so a founder can avoid or warn about them. The Demo agent never changes a bug. Sara can remove this.
- **Bug placement:** an automation bug is placed by its **iteration path** (the iteration of the feature or story it belongs to). The area path stays the project default (the whole project is one area). So the plan's open item "area/iteration for automation bugs" is answered. The QA plan file will be updated by the QA agent with Sara's OK.
- **Agent test account:** Sara gives the real password when the work starts. It goes only into the QA environment file (.env) and the pipeline secrets, not into chat.
- Gap 11 is the last gap on the list. Sara closes it after this update.

## Demo agent rule (Sara, 2026-11-24)
Bug information is internal. The Demo agent uses it only to prepare the demo script and to warn the founders, privately. It never writes anything customer-facing that admits a problem in the solution, and it never says "this is broken" in a script, proposal or message to a prospect. The script simply avoids the broken part.
Also confirmed: updating the QA plan with the iteration-path rule is a to-do for the QA agent (with Sara's OK).
