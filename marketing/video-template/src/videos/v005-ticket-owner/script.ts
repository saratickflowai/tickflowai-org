import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 005, Thu 3 Dec 2026. Tone: Friendly. About 12 seconds.
 * Voice: ElevenLabs "Miles - Clear Explainer Narrator" (public/audio/v005-voice.mp3, 11.5 s).
 * Live facts only: tickets are assigned to agents, SLA time-left display on tickets.
 * The ticket and the timer are drawn examples, not real screenshots.
 */
export const SCRIPT = {
  id: 'v005-ticket-owner',
  voiceFile: 'audio/v005-voice.mp3',
  ticket: { title: 'Printer is offline', agents: ['A', 'B', 'C'] },
  endCard: { callToAction: 'Try it free for 14 days.', smallLine: 'No credit card. Link in the comments.' },
  scenes: { problem: { from: 0, to: 4.4 }, owner: { from: 4.1, to: 9.9 }, end: { from: 9.6, to: 12.6 } },
  totalSec: 12.6,
} as const;

export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 0.1, endSec: 0.95, text: 'Three agents.' },
  { startSec: 1.2, endSec: 1.75, text: 'One ticket.' },
  { startSec: 2.2, endSec: 3.9, text: 'Everyone thinks someone else has it.' },
  { startSec: 4.3, endSec: 7.0, text: 'In TickFlowAI, every ticket has an owner,' },
  { startSec: 7.2, endSec: 9.3, text: 'and an SLA timer shows the time left.' },
  { startSec: 9.7, endSec: 11.5, text: 'Try it free for 14 days.' },
];
