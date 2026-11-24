# Gap G6: Agent access and where passwords and keys are kept - DRAFT v0.1

**Date:** 2026-11-22. **Status:** Draft for discussion. Nothing is decided.

## The gap
The original document says "no unnecessary permissions", but has no list of which agent can touch which system, and no rule for where passwords and keys live.

## Access levels (simple)
| Level | Meaning |
|---|---|
| None | The agent cannot reach this system. |
| Read | Can look, cannot change anything. |
| Draft | Can prepare content (emails, posts, replies) but cannot send or publish. |
| Write | Can create and update records. |
| Send | Can send or publish, but only through the approval check (both or either founder, as the rules say). Not built yet. |

## Starting access by agent group
| System | Marketing agents | Lead agents (research, verify, outreach) | Demo and proposal agent | Customer Success agent | QA agents | Directors and Chief of Staff |
|---|---|---|---|---|---|---|
| HubSpot (leads, CRM) | Read | Write | Read | Read | None | Read |
| Apollo, Apify, Vibe Prospecting, ScrapeGraphAI | None | Read (run searches) | None | None | None | None |
| Connect inbox (connect@) | None | Draft | Draft | None | None | Read |
| Support inbox | None | None | None | Draft | None | Read |
| Azure DevOps board | Read | None | None | Write (bugs only) | Write | Read |
| GitHub: org repo (when created) | Write (docs) | Write (docs) | Write (docs) | Write (docs) | Write (docs) | Read |
| GitHub: QA repo (TickFlowAI-QC) | None | None | None | None | Write, with Sara's OK before every push or pull request | Read |
| Google Drive, Docs, Canva | Write | Read | Write | Read | None | Read |
| Calendly (demo bookings) | None | Read | Read | None until the first paying client | None | Read |
| LinkedIn | None. Founders post and message by hand. | None | None | None | None | None |
| DEV environment test accounts | None | None | None | None | Use (test only) | None |
| Admin portal (customers, revenue) | None | None | None | None | None | None |
| Production | None | None | None | None | None | None |

## Where passwords and keys live
1. **Never** in chat, git, documents, reports or logs.
2. Each tool connection (connector) keeps its own login. We do not copy keys out of it.
3. Keys that must exist as files live only in a git-ignored `.env` on the machine, and as secret variables in the pipeline. This is already the rule in the QA repo (DEV test-account passwords only).
4. **One owner per connector.** A founder who connected it, with its cost, what it can reach and what data it holds written down.
5. Separate key per tool, so one leak does not open everything.
6. Change a key if a person or tool leaves.
7. Connecting a new tool needs a founder's approval. If it costs money, both founders (D-30).

## Rules proposed
1. **Least access first.** Read, then draft, then write. Nobody starts with more than the table above.
2. **No agent sends, publishes or deletes** until the approval check exists (D-57). Until then, drafts only.
3. **Deleting:** agents never delete by themselves. The only exception is the lead retention rule (archive after 3 months, delete details after 6 months, D-50). That runs as a scheduled job whose rule both founders approved, and every run is logged.
4. **Personal data** stays in HubSpot only.
5. **Admin portal and production:** no agent access at all.
6. **Any access change** is logged and shown to both founders (D-36).

## Update after Sara's reply (2026-11-23)
- Sara's idea: one central file with all passwords, links and everything we need, checked by the Audit department.
- **Claude's change:** one central file for **links, owners and where each login is kept**, but **not the passwords themselves**. The file is `systems-register.md`. The Audit department checks it every month. Any agent that creates something new (like a pipeline or a repository) adds the link there.
- **Why not passwords in a file:** every agent and every thread can read the shared project folder. If one file holds all passwords, one mistake or leak opens everything. Passwords go in a password manager that only the two founders use. Passwords are never sent in chat.
- **Who has real passwords:** only the QA agents, for the DEV test accounts (existing QA project rule: private `.env` file and pipeline secrets). All other tools are used through connections that never show a password to an agent.
- **Owner of a tool** = the person who fixes it, pays for it and can disconnect it.


## Update after Sara's reply (2026-11-23, evening)
- Access table agreed as written. Changes will come later, when the agents are in use (Sara will say what to add or remove). Admin portal and production stay at None for now.
- Calendly for Customer Success set to None until the first paying client (the agent is dormant).
- **No one owner per tool.** Both founders are responsible. Any alert about a tool goes to both founders; whoever is free fixes it. Claude must not decide who does what. Exception: the Claude project alert goes to Sara only.
- Passwords: not in the systems register. They are only in the QA environment file (DEV test accounts), which only QA agents can see. The register is readable by all agents, including QA.
- **Lead history (open):** the lead retention rule must keep a record of every lead we did not continue with, and why, so we never start the same lead again. See D-66.
- Azure DevOps is also where agents take requirements (epics, features, user stories), not only tasks and bugs.

## Update (2026-11-23, late)
- Marketing tools: Remotion (videos) and Claude's marketing skills. Other plugins are allowed when they improve the work (Sara: important, not to be forgotten). Canva stays allowed but is not required. Plugin list to be reviewed when Marketing starts.
- GitHub "Write (docs)" means: agent role cards and skills, templates, content calendar, video scripts and Remotion video projects (Marketing), demo scripts and proposal templates (Demo), support playbooks (Customer Success), batch reports and the decisions log. Never lead or customer personal data (that stays in HubSpot only).
- Azure DevOps: agents take requirements only from the Solution epic (features and user stories under it), as in the Product Fact Sheet.
- Gap 6 closed by Sara, with one carry-over: lead history fields (D-66).

## Update (2026-11-24, Gap 11)
Marketing, Sales and Customer Success have no access to the QA repo. Their documents go to the org repo. The Demo agent learns about known bugs from the board, not from the QA repo.
