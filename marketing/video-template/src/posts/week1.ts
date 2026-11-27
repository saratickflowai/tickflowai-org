/**
 * Post graphics for week 1 (Sat 28 Nov, Mon 30 Nov, Fri 4 Dec 2026).
 * Same layout and voice as the Friday 27 Nov "help desk tip" graphic. Live facts only (Product Fact Sheet v0.2).
 */
export const POST_CARDS = {
  'post-sat-one-ticket': {
    kicker: 'ONE TICKET',
    headline: ['From the first message', 'to a confirmed fix.'],
    sub: 'Here is the path of one ticket in TickFlowAI.',
    rows: [
      { title: 'A message arrives', body: 'A WhatsApp message becomes a ticket.' },
      { title: 'The agent has context', body: 'Similar tickets are suggested.' },
      { title: 'The clock is visible', body: 'An SLA timer shows the time left.' },
      { title: 'The requester confirms', body: 'A short survey closes the loop.' },
    ],
    callout: 'Next video: approve a request from Microsoft Teams, on Sunday.',
  },
  'post-mon-permissions': {
    kicker: 'BEHIND THE SCENES',
    headline: ['A permission mistake', 'is easy to miss.'],
    sub: 'This is how we check permissions before you see them.',
    rows: [
      { title: 'Pick a role', body: 'Every role gets its own checks.' },
      { title: 'Check what it can do', body: 'The screens and actions it should have.' },
      { title: 'Check what it cannot do', body: 'Everything it should never reach.' },
      { title: 'Run it three times', body: 'A test joins the suite after three passes.' },
    ],
    callout: 'Tomorrow: requests lost between email, Teams and the hallway.',
  },
  'post-fri-channels': {
    kicker: 'WHY WE BUILT IT',
    headline: ['Requests start in a chat,', 'not in a form.'],
    sub: 'So every way in becomes a ticket.',
    rows: [
      { title: 'Email', body: 'An email becomes a ticket.' },
      { title: 'Microsoft Teams', body: 'A Teams message becomes a ticket.' },
      { title: 'WhatsApp', body: 'A message or a voice note becomes a ticket.' },
    ],
    callout: 'One place for the team, in English or Arabic.',
  },
} as const;
