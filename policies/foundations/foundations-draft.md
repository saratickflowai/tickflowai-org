# TickFlowAI Foundations (Gap G1)

**Status:** DRAFT v0.4 (2026-11-22). Not final. Agents must not use this until it is marked Final.

These six sections are the shared base that every Marketing, Sales and QA agent works from. If something is not written here, agents must not guess it.

| Section | Status |
|---|---|
| 1. Product Fact Sheet | Draft v0.2 in `01-product-fact-sheet-draft.md` (Solution stories only, all Live), waiting for Sara's check |
| 2. ICP | Updated 2026-11-22 (banking low priority, no hard disqualifiers, no seat cap); Sara confirmed the definition |
| 3. Buyer Personas | Drafted |
| 4. Positioning | Competitors listed; differentiators open |
| 5. Pricing Guardrails | Drafted from tickflowai.com/pricing |
| 6. Brand Voice & Language | Language agreed; tone open |

---

## 1. Product Fact Sheet

**Source:** Azure DevOps board (stories and acceptance criteria) + what QA confirmed works on DEV + the public plan comparison on tickflowai.com/pricing.
**Format:** module | what it does | plan (Core / Pro / Enterprise) | status (Live / On DEV only / Planned) | known limits.
**Rule:** Marketing and Sales may only promise features marked Live. Planned items are mentioned only as roadmap, with founder approval.

---

## 2. Ideal Customer Profile (ICP)

### 2.1 Definition (what the ICP means for us)
The ICP describes the **company** that gets the most value from TickFlowAI, buys fastest and stays longest. It is not one person (that is section 3). Agents use it to decide which companies to research, how to score them, and which ones to skip.

### 2.2 Market (all of these are in scope)
| Item | Value |
|---|---|
| Countries, in order | 1) Egypt 2) all Gulf countries 3) other Arab countries 4) international markets |
| Industries | Any industry that needs IT support / a service desk |
| Company size | All sizes, from startups to enterprise |

### 2.3 IT setup (we record it for every company; it helps the score but it is never a requirement)
| What we check | Why it matters |
|---|---|
| Do they have an IT team, and how big? | Price is per agent seat. An "agent" is anyone who is responsible for solving tickets, of any ticket type. |
| What do they use today (email, WhatsApp, Excel, or a tool such as Freshservice)? | Changes the pitch: "first real system" or "switch from a tool that is too expensive or too complex". |
| Do they use Microsoft 365 / Teams? | Helps the fit. If they do not, we still approach them and solve their problem. |
| Do employees ask IT through WhatsApp or other channels? | Helps the fit. If not, we still approach them. |
| How many agent seats might they need? | Up to 50 seats: Core or Pro. Above 50 agent seats: Enterprise. |

### 2.4 Signals that raise the score
- Uses Microsoft 365 / Teams.
- IT requests arrive by WhatsApp, email or Excel with no tracking.
- Growing company, or a recent IT hire or job post.
- Needs audit log, SLA and approvals (regulated sectors).
- Many branches or sites.

### 2.5 Signals that lower the score (never an automatic "no")
- No current ticketing tool, no Microsoft, no WhatsApp: **not a problem.** We still approach them and solve their problem.
- They already use a multi-year enterprise ticketing tool: the score goes down, but we may still show them TickFlowAI.
- They need a feature we do not have: if we have an alternative, the lead goes into the **"Founders decide"** group, with the reason written down. Sara and the co-founder decide whether to continue. Agents never drop these leads on their own.

Each lead ends in one of three groups: **Go** (approach), **Skip** (does not fit), or **Founders decide**.

### 2.6 Focus for the first outreach batches (Sara, 2026-11-22)
- **Regulated sectors:** hospitals and healthcare groups, universities and international schools, insurance. **Banking is low priority** for now, because it may demand more than we need to chase today.
- **Technology companies:** software houses, tech startups, BPO / call centers.
- Any other company with IT support needs is also fine.
- **Size:** all sizes, from 1 employee to 1,000 and above. The system can handle them. We do not cap at 30 seats.

The market stays open; this is only where the first batches start.

### 2.7 How a customer buys
1. **Free trial:** any company can use the system free for 14 days (Pro plan, up to 10 seats, no credit card) to try it before buying.
2. After the trial they **buy Core or Pro** online, or **book a demo** with us.
3. A demo can be about Core, Pro or Enterprise.
4. **Enterprise always goes through the founders**, because the founders set the quota, the AI allowance and all contract terms.

---

## 3. Buyer Personas

The target is whoever owns the decision inside the company, whatever the title. The title usually depends on size:

| Company size | Decision maker (buys) | Main users |
|---|---|---|
| Startup / small | Founder, CEO, CTO or Operations Manager | 1–3 people who handle IT; employees who raise tickets |
| Mid-size | IT Manager / Head of IT | IT support agents; employees |
| Enterprise | CIO / IT Director (with procurement) | Service desk team, team leads; employees |

---

## 4. Positioning (DRAFT v0.1)

**Sources:** the competitor LinkedIn scan of 22 Nov 2026 (Freshworks/Freshservice, ManageEngine incl. Middle East and Africa, Zoho, ServiceNow) and the Product Fact Sheet. The scan covers LinkedIn only. It does not cover competitor prices or features, so claims about those are marked "to verify".

**Monthly scan list:** Freshservice, ManageEngine ServiceDesk Plus, Zoho, ServiceNow.

### 4.1 What the scan found (short)
1. Posts about people (founders, employees, customers) get 5 to 50 times more engagement than product posts.
2. Short product and AI explainer videos get the lowest engagement on all pages.
3. Posts that start with a problem the reader feels work better than posts that start with a feature.
4. Every competitor pushes the same "AI agents" message. It sounds the same everywhere.
5. In our region, the competitor voice is mostly in-person event recaps. No page posts useful local IT content, and none posts in Arabic (based on a small sample).
6. Comments are low everywhere. Real conversation is a gap.

### 4.2 Positioning statement (draft for Sara to correct)
For IT teams in Egypt, the Gulf and the wider Arab region, who handle IT requests through email, WhatsApp and Teams, TickFlowAI is a simple ticketing system with AI built in. It works in English and Arabic, connects to Microsoft 365 and Teams, and lets employees raise tickets through WhatsApp. It is priced per agent seat only, and the people who raise tickets are free.

### 4.3 Our proof points (all from the Product Fact Sheet, so all Live)
- WhatsApp: tickets created and continued over WhatsApp, voice notes turned into text (Pro and Enterprise).
- Microsoft: sign-in, directory sync, and a Teams bot with approvals and alerts (Teams: Pro and Enterprise).
- AI in the product: suggestions before a ticket is sent, similar tickets, reply drafts, sentiment (all plans). Smart assignment is Enterprise only.
- Arabic language support across the screens, emails and notifications.
- Simple price: per agent seat only. Requesters and approvers are free. 14-day free trial.

### 4.4 Where we aim to be different (from the scan)
1. **Local voice:** useful content for IT teams in our region (local IT problems, Arabic tickets, shift coverage, local data rules), not only event photos.
2. **People first:** team stories, customer stories and behind-the-scenes, then product. All posted from the company page. Sara's personal profile is not used (her decision).
3. **Problem first:** each post or video starts with one IT help desk pain, then shows how TickFlowAI handles it on a real screen.
4. **Plain words about AI:** say exactly what the AI does for a ticket, not "AI agents".
5. **Ask real questions** at the end of posts, to start conversations.

### 4.4b Claims we may NOT make until verified
- That we are cheaper than any competitor (competitor prices were not checked).
- That a competitor lacks Arabic, WhatsApp or Teams support (competitor features were not checked).
- Any number about results (for example "X% fewer reassignments") until we have real data. Never invent numbers.

### 4.4c External content rule (Sara, 2026-11-22)
Competitor names and competitor prices are used **only in internal documents** (like this one). Campaigns, posts, videos and messages **never mention a competitor or compare prices directly.**

### 4.5 Open points for Sara
1. Language is decided: English first, Arabic only now and then.
2. A small check of competitor prices and features (public pages only) is approved for internal use only. Claude runs the full competitor scan; results come as a file.
3. Decided: posts come from the company page only, not from Sara's personal profile.
4. Still open: is the positioning statement in 4.2 what you want to say? (After the scan results.)

---

## 5. Pricing Guardrails

**Source:** tickflowai.com/pricing (read 2026-11-22). If the page changes, the page wins and this section is updated.

| Plan | Annual billing | Monthly billing | Notes |
|---|---|---|---|
| Core | $19 per seat / month | $24 per seat / month | Web portal + email |
| Pro | $45 per seat / month | $55 per seat / month | Adds WhatsApp, Teams, service catalog, automation |
| Enterprise | Quoted by founders | Quoted by founders | Above 50 seats, 12-month contract |

- Currency: US dollars, prices exclude VAT.
- Seat = a person who works on tickets (agents, admins). Requesters and approvers are free.
- Free trial: 14 days on Pro, up to 10 seats, no credit card.

**Rules for agents:**
1. Agents only quote the public prices above.
2. Agents never offer or suggest a discount. Discounts are decided only by the founders.
3. Contract length, Enterprise prices and any special terms are given by the founders for each deal.
4. Currency is always USD.

---

## 6. Brand Voice & Language

| Channel | Language |
|---|---|
| LinkedIn and social posts | English. Arabic only occasionally, when the founders decide. |
| Videos | English, with English subtitles (always on, because most people watch with sound off). |
| Conversations with customers | Always English. |

Open: tone of voice (e.g. expert and practical, not hype), words to use and avoid. To draft after positioning.
