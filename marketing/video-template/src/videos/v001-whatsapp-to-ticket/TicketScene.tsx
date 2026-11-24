import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { enterUp, popIn } from '../../template/animations';
import { SCRIPT } from './script';

const C = BRAND.colors;

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontSize: 24, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
    {children}
  </div>
);

/** Solution scene: the message becomes a ticket, the voice note becomes text, the agent replies in the ticket. */
export const TicketScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = (sec: number) => Math.round(sec * fps);

  const transcriptStart = s(4.6);
  const transcriptChars = Math.floor(
    interpolate(frame, [transcriptStart, transcriptStart + s(2.6)], [0, SCRIPT.ticket.transcript.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
  );

  return (
    <BrandBackground>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 170 }}>
        <div
          style={{
            ...popIn(frame, fps, 0),
            width: 940,
            background: C.surface,
            borderRadius: 32,
            padding: 48,
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
            border: `2px solid ${C.primary}55`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: C.accent }}>New ticket</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: 'white', background: C.whatsappGreen, padding: '8px 20px', borderRadius: 999 }}>
              {SCRIPT.ticket.channelLabel}
            </div>
          </div>
          <div style={{ fontSize: 46, fontWeight: 800, marginTop: 18 }}>{SCRIPT.ticket.title}</div>
          <div style={{ fontSize: 28, color: C.textMuted, marginTop: 8 }}>Requester: {SCRIPT.ticket.requester}</div>

          <div style={{ height: 2, background: '#ffffff22', margin: '34px 0' }} />

          <div style={enterUp(frame, fps, s(4.3))}>
            <SectionLabel>Voice note {SCRIPT.chat.voiceNoteLength} as text</SectionLabel>
            <div style={{ fontSize: 34, lineHeight: 1.4, minHeight: 140, background: '#ffffff10', borderRadius: 18, padding: '20px 26px' }}>
              {SCRIPT.ticket.transcript.slice(0, transcriptChars)}
            </div>
          </div>

          <div style={{ ...enterUp(frame, fps, s(9.2)), marginTop: 34 }}>
            <SectionLabel>Agent reply</SectionLabel>
            <div style={{ fontSize: 34, lineHeight: 1.4, background: C.primary, borderRadius: 18, padding: '20px 26px' }}>
              {SCRIPT.ticket.agentReply}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </BrandBackground>
  );
};
