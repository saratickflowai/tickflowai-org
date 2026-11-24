import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from 'remotion';
import { EndCard } from '../../template/EndCard';
import { Scene } from '../../template/Scene';
import { Subtitles } from '../../template/Subtitles';
import { ChatScene } from './ChatScene';
import { SCRIPT, SUBTITLES } from './script';
import { TicketScene } from './TicketScene';

/** Total length of video 001 in seconds. */
export const V001_DURATION_SEC = SCRIPT.totalSec;

/** Video 001: WhatsApp requests become tickets (Expert tone), with voice and English subtitles. */
export const V001WhatsAppToTicket: React.FC = () => {
  const { fps } = useVideoConfig();
  const sc = SCRIPT.scenes;
  const part = (range: { from: number; to: number }, child: React.ReactNode) => {
    const duration = Math.round((range.to - range.from) * fps);
    return (
      <Sequence from={Math.round(range.from * fps)} durationInFrames={duration}>
        <Scene durationInFrames={duration}>{child}</Scene>
      </Sequence>
    );
  };
  return (
    <AbsoluteFill style={{ background: '#05070F' }}>
      <Audio src={staticFile(SCRIPT.voiceFile)} />
      {part(sc.chat, <ChatScene />)}
      {part(sc.ticket, <TicketScene />)}
      {part(sc.end, <EndCard callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />)}
      <Subtitles cues={SUBTITLES} />
    </AbsoluteFill>
  );
};
