import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../brand/brand';

/** One subtitle line, shown from `startSec` up to `endSec`. */
export interface SubtitleCue {
  readonly startSec: number;
  readonly endSec: number;
  readonly text: string;
}

/** English subtitles at the bottom of the video, same style in every video. */
export const Subtitles: React.FC<{ cues: readonly SubtitleCue[] }> = ({ cues }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const seconds = frame / fps;
  const active = cues.find((cue) => seconds >= cue.startSec && seconds < cue.endSec);
  if (!active) {
    return null;
  }
  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 70 }}>
      <div
        style={{
          maxWidth: 940,
          background: BRAND.colors.subtitleBg,
          color: BRAND.colors.text,
          fontFamily: BRAND.font.family,
          fontSize: 44,
          fontWeight: 600,
          lineHeight: 1.3,
          textAlign: 'center',
          padding: '18px 32px',
          borderRadius: 18,
        }}
      >
        {active.text}
      </div>
    </AbsoluteFill>
  );
};

/** Writes the cues as an .srt file body, for uploading captions to LinkedIn. */
export const toSrt = (cues: readonly SubtitleCue[]): string => {
  const stamp = (sec: number): string => {
    const ms = Math.round(sec * 1000);
    const pad = (n: number, w = 2) => String(n).padStart(w, '0');
    return `${pad(Math.floor(ms / 3600000))}:${pad(Math.floor(ms / 60000) % 60)}:${pad(Math.floor(ms / 1000) % 60)},${pad(ms % 1000, 3)}`;
  };
  return cues.map((c, i) => `${i + 1}\n${stamp(c.startSec)} --> ${stamp(c.endSec)}\n${c.text}\n`).join('\n');
};
