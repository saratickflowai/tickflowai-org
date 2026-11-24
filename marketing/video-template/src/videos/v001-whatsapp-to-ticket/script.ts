import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 001, Thu 26 Nov 2026. Tone: Expert. About 30 seconds.
 * Source: org-design/content/week-0/first-drafts.md, item 2 (draft, waiting for Sara's approval).
 * Live facts only: WhatsApp message becomes a ticket, voice note becomes text (Pro and Enterprise).
 */
export const SCRIPT = {
  id: 'v001-whatsapp-to-ticket',
  hook: 'Your IT requests arrive on WhatsApp.',
  chat: {
    contactName: 'IT Support',
    textMessage: 'Hi, my laptop cannot reach the VPN',
    voiceNoteLength: '0:12',
    photoCaption: 'Error on my screen',
    followUp: 'Any update?',
  },
  ticket: {
    title: 'Laptop cannot reach the VPN',
    channelLabel: 'From WhatsApp',
    requester: 'Employee',
    transcript: 'My laptop cannot connect to the VPN since this morning. I already restarted it.',
    agentReply: 'Thanks. I am checking your VPN access now and will update you here.',
  },
  endCard: {
    callToAction: 'Try it free for 14 days.',
    smallLine: 'No credit card. Link in the comments.',
  },
  /** Scene lengths in seconds. Total = 30. */
  timing: { hook: 3, chat: 7, ticket: 14, end: 6 },
} as const;

export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 0, endSec: 3, text: 'Your IT requests arrive on WhatsApp.' },
  { startSec: 3, endSec: 6.5, text: 'Some are voice notes. Some are photos.' },
  { startSec: 6.5, endSec: 10, text: 'Nobody knows who has them.' },
  { startSec: 10, endSec: 14.5, text: 'In TickFlowAI, a WhatsApp message becomes a ticket.' },
  { startSec: 14.5, endSec: 19, text: 'A voice note becomes text.' },
  { startSec: 19, endSec: 24, text: 'Your team answers in the same ticket.' },
];
