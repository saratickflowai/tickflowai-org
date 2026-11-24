# Systems Register (central list) - DRAFT

**Purpose:** one place that lists every tool and system: what it is, the link, who owns it, and where its login is kept.
**This file contains NO passwords, keys or tokens. Never add them here.**
**Who checks it:** the Audit department (Auditor agent), once a month: is the list complete, does every tool have an owner, are there old or unused keys.
**Responsible:** no single owner per tool. Both founders are responsible. Any alert about a tool goes to both founders (the Claude project alert goes to Sara only). Whichever founder is available fixes it.
**Cost column:** Existing = already paid or part of the product, no new cost. Free plan = costs nothing. To verify = Claude does not know yet, a founder must confirm.
**Who can read this file:** all agents, including QA. It has no passwords. Real passwords (DEV test accounts) are only in the QA environment file, which only QA agents can see.
**Who updates it:** any agent that creates something new (for example a pipeline or a repository) adds its link here the same day.

| Tool or system | What it is for | Link | Responsible | Where the login is kept | Cost | Status |
|---|---|---|---|---|---|---|
| TickFlowAI website | Public site (landing page) | https://tickflowai.com | Both founders | Not applicable | Existing | Live |
| TickFlowAI DEV environment | Shared test environment for QA | https://dev.tickflowai.com | Both founders | DEV test-account passwords in a private `.env` file and pipeline secrets (QA project rule) | Existing | Live |
| GitHub: TickFlowAI-QC | QA automation project | https://github.com/Sara-Magdyy/TickFlowAI-QC | Both founders | Connection (no password stored) | Existing | Live |
| Azure DevOps board | Tasks, bugs and requirements (epics, features, user stories) | To add | Both founders | Connection | Existing | Live |
| HubSpot | CRM (leads) | To add | Both founders | Connection | Free plan | Connected |
| Apollo | Lead data | To add | Both founders | Connection | Free plan | Connected |
| Apify | Lead data and scraping | To add | Both founders | Connection | To verify | Connected (connection issue seen in one session) |
| Vibe Prospecting | Lead data | To add | Both founders | Connection | To verify | Connection problem, to fix later |
| ScrapeGraphAI | Lead data from public pages | To add | Both founders | In Sara's Claude Code | To verify | To check |
| Mailbox: no-reply | Product emails | Not applicable | Both founders | Mail provider | Existing | Live |
| Mailbox: connect | Cold and marketing emails | Not applicable | Both founders | Mail provider | Existing | Live |
| Mailbox: support | Customer support | Not applicable | Both founders | Mail provider | Existing | Live |
| Calendly | Demo booking | To add | Both founders | Connection | Existing | Live |
| Claude project: TickFlowAI Company | Agent organization | Project link | Sara | Claude account | $20 plan | Live |
