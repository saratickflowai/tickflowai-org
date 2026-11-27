import type { SubtitleCue } from '../../template/Subtitles';

/**
 * Video 004, Wed 2 Dec 2026. Tone: Expert. About 13 seconds.
 * Voice: ElevenLabs "Miles - Clear Explainer Narrator" (public/audio/v004-voice.mp3, 12.7 s).
 * Live facts only: Microsoft Entra ID single sign-on, directory sync with review and safety controls, confirmation of new users.
 * The screens and people are drawn examples, not real screenshots.
 */
export const SCRIPT = {
  id: 'v004-microsoft-sign-in',
  voiceFile: 'audio/v004-voice.mp3',
  typedNames: ['Name: ', 'Name: ', 'Name: ', 'Name: '],
  people: [
    { initials: 'FA', role: 'Finance', at: 7.0 },
    { initials: 'SU', role: 'Support', at: 7.2 },
    { initials: 'OP', role: 'Operations', at: 7.4 },
    { initials: 'HR', role: 'People team', at: 7.6 },
  ],
  endCard: { callToAction: 'Try it free for 14 days.', smallLine: 'No credit card. Link in the comments.' },
  scenes: { signIn: { from: 0, to: 6.0 }, sync: { from: 5.7, to: 10.8 }, end: { from: 10.5, to: 13.6 } },
  totalSec: 13.6,
} as const;

export const SUBTITLES: readonly SubtitleCue[] = [
  { startSec: 0.1, endSec: 3.2, text: 'Adding your whole company should not mean typing every name.' },
  { startSec: 3.7, endSec: 5.75, text: 'Sign in with Microsoft Entra ID.' },
  { startSec: 6.1, endSec: 7.2, text: 'Sync your directory.' },
  { startSec: 7.6, endSec: 10.5, text: 'Review the people it finds, and confirm new users.' },
  { startSec: 10.9, endSec: 12.7, text: 'Try it free for 14 days.' },
];
