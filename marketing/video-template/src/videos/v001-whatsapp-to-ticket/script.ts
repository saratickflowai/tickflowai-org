import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 001, Thu 26 Nov 2026. Tone: Expert. About 19 seconds.
 * Voice: ElevenLabs "Miles" (public/audio/v001-voice.mp3, 17.8 s). Times below follow the voice.
 * Source text: org-design/content/week-0/first-drafts.md, item 2 (draft, waiting for Sara's approval).
 * Live facts only: WhatsApp message becomes a ticket, voice note becomes text (Pro and Enterprise).
 */
export const SCRIPT = {
  id: 'v001-whatsapp-to-ticket',
  voiceFile: 'audio/v001-voice.mp3',
  headline: 'Your IT requests arrive on WhatsApp.',
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
  /** Scene start and end, in seconds. Scenes overlap a little for soft crossfades. */
  scenes: {
    chat: { from: 0, to: 7.6 },
    ticket: { from: 7.2, to: 15.2 },
    end: { from: 14.8, to: 19.5 },
  },
  totalSec: 19.5,
} as const;

/** Subtitle cues follow the voice. */
export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 2.6, endSec: 5.2, text: 'Some are voice notes. Some are photos.' },
  { startSec: 5.4, endSec: 7.1, text: 'Nobody knows who has them.' },
  { startSec: 7.3, endSec: 10.4, text: 'In TickFlowAI, a WhatsApp message becomes a ticket.' },
  { startSec: 10.7, endSec: 12.3, text: 'A voice note becomes text.' },
  { startSec: 12.6, endSec: 14.6, text: 'Your team answers in the same ticket.' },
  { startSec: 14.9, endSec: 16.7, text: 'Try it free for 14 days.' },
  { startSec: 16.8, endSec: 17.7, text: 'No credit card.' },
];
