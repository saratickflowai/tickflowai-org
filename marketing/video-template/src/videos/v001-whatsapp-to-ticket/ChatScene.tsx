import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { enterUp } from '../../template/animations';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { popIn } from '../../template/animations';
import { SCRIPT } from './script';

const C = BRAND.colors;

const Bubble: React.FC<{ startFrame: number; children: React.ReactNode }> = ({ startFrame, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (frame < startFrame) {
    return null;
  }
  return (
    <div
      style={{
        ...popIn(frame, fps, startFrame),
        alignSelf: 'flex-start',
        transformOrigin: 'left bottom',
        background: C.whatsappBubbleIn,
        color: '#111',
        borderRadius: 22,
        padding: '18px 24px',
        fontSize: 32,
        maxWidth: 560,
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
      }}
    >
      {children}
    </div>
  );
};

/** Problem scene: a phone fills with WhatsApp requests (text, voice note, photo, follow-up). */
export const ChatScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = (sec: number) => Math.round(sec * fps);
  return (
    <BrandBackground>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 150 }}>
        <div
          style={{
            ...enterUp(frame, fps, 2),
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -1,
            textAlign: 'center',
            maxWidth: 860,
            lineHeight: 1.12,
            marginBottom: 54,
          }}
        >
          {SCRIPT.headline}
        </div>
        <div
          style={{
            width: 660,
            height: 760,
            borderRadius: 64,
            border: '14px solid #1d1d1f',
            overflow: 'hidden',
            background: C.whatsappChatBg,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 0,
          }}
        >
          <div style={{ background: '#075E54', color: 'white', padding: '36px 32px 24px', fontSize: 34, fontWeight: 700 }}>
            {SCRIPT.chat.contactName}
          </div>
          <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'flex-end' }}>
            <Bubble startFrame={s(0.7)}>{SCRIPT.chat.textMessage}</Bubble>
            <Bubble startFrame={s(2.7)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <div style={{ width: 54, height: 54, borderRadius: 27, background: C.whatsappGreen, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>▶</div>
                <div style={{ width: 260, height: 8, borderRadius: 4, background: '#b9c2c9' }} />
                <span style={{ fontSize: 26, color: '#667' }}>{SCRIPT.chat.voiceNoteLength}</span>
              </div>
            </Bubble>
            <Bubble startFrame={s(4.1)}>
              <div style={{ width: 380, height: 220, borderRadius: 14, background: 'linear-gradient(135deg,#3a4a63,#1f2a3c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b6b', fontSize: 72, fontWeight: 800 }}>!</div>
              <div style={{ marginTop: 10 }}>{SCRIPT.chat.photoCaption}</div>
            </Bubble>
            <Bubble startFrame={s(5.7)}>{SCRIPT.chat.followUp}</Bubble>
          </div>
        </div>
      </AbsoluteFill>
    </BrandBackground>
  );
};
