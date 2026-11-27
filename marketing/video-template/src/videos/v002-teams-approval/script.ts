import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 002, Sun 29 Nov 2026. Tone: Friendly. About 12 seconds.
 * Voice: ElevenLabs "Miles - Clear Explainer Narrator" (public/audio/v002-voice.mp3, 11.0 s).
 * Live facts only: Teams approval actions, approval routing for service requests (Service Catalog).
 * The Teams window and the request are drawn examples, not real screenshots.
 */
export const SCRIPT = {
  id: 'v002-teams-approval',
  voiceFile: 'audio/v002-voice.mp3',
  headline: 'A request needs your approval.',
  card: {
    title: 'New laptop for a new hire',
    requester: 'Requested by: Employee',
    waiting: 'Waiting for your approval',
    done: 'Approved by you',
  },
  endCard: { callToAction: 'Try it free for 14 days.', smallLine: 'No credit card. Link in the comments.' },
  scenes: { main: { from: 0, to: 9.2 }, end: { from: 8.9, to: 12.4 } },
  totalSec: 12.4,
} as const;

export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 0.2, endSec: 1.5, text: 'A request needs your approval.' },
  { startSec: 1.9, endSec: 4.7, text: 'In TickFlowAI, it arrives in Microsoft Teams.' },
  { startSec: 5.0, endSec: 7.1, text: 'Read it, then approve or reject.' },
  { startSec: 7.5, endSec: 8.8, text: 'You never leave Teams.' },
  { startSec: 9.2, endSec: 10.9, text: 'Try it free for 14 days.' },
];
