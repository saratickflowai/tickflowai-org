import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 003, Tue 1 Dec 2026. Tone: Friendly. About 15 seconds.
 * Voice: ElevenLabs "Miles - Clear Explainer Narrator" (public/audio/v003-voice.mp3, 14.5 s).
 * Live facts only: inbound email creates tickets, Teams and WhatsApp channels, agents create tickets by hand (Incident Management).
 * The cards and the ticket list are drawn examples, not real screenshots.
 */
export const SCRIPT = {
  id: 'v003-one-ticket-list',
  voiceFile: 'audio/v003-voice.mp3',
  scatter: {
    email: { channel: 'Email', text: 'Printer is offline' },
    teams: { channel: 'Teams', text: 'Need access to the shared folder' },
    hallway: { channel: 'Hallway', text: '"Do you have a minute? My monitor is flickering."' },
  },
  list: {
    title: 'One ticket list',
    rows: [
      { channel: 'Email', text: 'Printer is offline', at: 4.8 },
      { channel: 'Teams', text: 'Need access to the shared folder', at: 5.9 },
      { channel: 'WhatsApp', text: 'Cannot sign in to the portal', at: 6.9 },
      { channel: 'Added by an agent', text: 'Monitor is flickering', at: 10.1 },
    ],
  },
  endCard: { callToAction: 'Try it free for 14 days.', smallLine: 'No credit card. Link in the comments.' },
  scenes: { scatter: { from: 0, to: 4.5 }, list: { from: 4.2, to: 12.7 }, end: { from: 12.4, to: 15.4 } },
  totalSec: 15.4,
} as const;

export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 0.1, endSec: 1.0, text: 'An email here.' },
  { startSec: 1.3, endSec: 2.5, text: 'A Teams message there.' },
  { startSec: 2.9, endSec: 4.05, text: 'A request in the hallway.' },
  { startSec: 4.4, endSec: 7.4, text: 'In TickFlowAI, email, Teams and WhatsApp' },
  { startSec: 7.5, endSec: 9.6, text: 'requests land in one ticket list.' },
  { startSec: 10.0, endSec: 12.2, text: 'An agent can add the hallway request by hand.' },
  { startSec: 12.6, endSec: 14.3, text: 'Try it free for 14 days.' },
];
