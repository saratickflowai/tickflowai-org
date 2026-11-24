import React from 'react';
import { AbsoluteFill, Series, useVideoConfig } from 'remotion';
import { EndCard } from '../../template/EndCard';
import { HookCard } from '../../template/HookCard';
import { Subtitles } from '../../template/Subtitles';
import { ChatScene } from './ChatScene';
import { SCRIPT, SUBTITLES } from './script';
import { TicketScene } from './TicketScene';

/** Total length of video 001 in seconds. */
export const V001_DURATION_SEC = Object.values(SCRIPT.timing).reduce((a, b) => a + b, 0);

/** Video 001: WhatsApp requests become tickets (Expert tone). */
export const V001WhatsAppToTicket: React.FC = () => {
  const { fps } = useVideoConfig();
  const t = SCRIPT.timing;
  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={t.hook * fps}>
          <HookCard text={SCRIPT.hook} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t.chat * fps}>
          <ChatScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t.ticket * fps}>
          <TicketScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t.end * fps}>
          <EndCard callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
        </Series.Sequence>
      </Series>
      <Subtitles cues={SUBTITLES.filter((c) => c.startSec >= t.hook)} />
    </AbsoluteFill>
  );
};
