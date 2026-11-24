# Gap G4: Nobody owns legal and privacy rules - DRAFT v0.1

**Date:** 2026-11-22. **Status:** Draft for discussion. Nothing here is decided.
**Important:** Claude is not a lawyer. This is a list of things to check, not legal advice. A lawyer should confirm the country rules before the first outreach campaign.

## The gap
The original document says leads must be "lawfully obtained" and security tests must follow "Egyptian or applicable international law", but nobody owns checking this. We plan to collect lead data from many countries, store names, emails and phone numbers, use scraping and data tools, send cold emails, and process personal data with AI.

## What can go wrong
- A complaint or fine for sending messages or storing data in a way a country does not allow.
- Our sending domain gets blocked, which also hurts product emails (invites, notifications).
- A data tool or scraping tool breaks a website's terms, and its account is closed.
- A LinkedIn account is restricted (already decided: no LinkedIn scraping, founders send manually).

## Proposal
1. **Owner:** both founders. Anything with legal risk is Critical and needs both (D-35). Agents check the rules but never decide.
2. **Country rules table:** one short table, written once with a lawyer. For each country: allowed channels (email, manual LinkedIn, phone), whether permission is needed before the first message, required wording (who we are, how to stop), how long we may keep a lead. Agents follow the table.
3. **Unknown country = "Founders decide".** If a lead is from a country that is not in the table, the agent does not contact them. It uses the existing "Founders decide" group.
4. **Stop button:** every message says how to stop. A "Do not contact" flag (field 66 in the lead record) is respected at once, in all inboxes.
5. **Collect only what we need:** business contact details. Private personal numbers or addresses are not collected, even if a tool offers them. (Sara to decide.)
6. **One home for personal data:** HubSpot only. Never in git, chat or reports.
7. **Retention:** leads with no reply and no activity are archived or deleted after a set time. (Time to decide.)
8. **Tool terms:** each data and scraping tool is checked for its terms before use. No scraping of sites that forbid it.
9. **Website legal pages:** Terms of Service, Privacy Policy and the Data Processing Agreement with subprocessor list were still "Active" (not finished) on the board snapshot of 14 Nov. Outreach sends people to the website, so these should be ready before the first campaign.
10. **Security testing:** only on our own DEV environment, with a written scope signed by Sara (already agreed).
11. **First markets:** start outreach only in Egypt and the Gulf, after their rules are in the table. Other countries come later.

## Sara's answers (2026-11-22) - Gap closed
1. **Lawyer:** Sara has one, but will not go back to him on every point. If a country has problems, the agents list them, and the founders decide whether to go back to the lawyer.
2. **Contact data:** business details only. If a number might be personal and we cannot tell, it is shown to Sara. If it is a priority lead, we keep it but we give it to nobody and do nothing with it.
3. **Channels:** email and LinkedIn only.
4. **Keeping leads:** no reply: archive after 3 months, delete the details after 6 months. We keep a small record that we contacted them, with the history, so we never contact them again by mistake.
5. **First markets:** Egypt first, then the Gulf, then other countries later.
6. **Website legal pages** (Terms, Privacy, Data Processing Agreement) are not finished. They are hidden from the website for now. When finished, the lawyer reviews them first, then they are published.

