import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { Waveform } from '../../template/Waveform';
import { ease01 } from '../../template/animations';
import { SCRIPT } from './script';

const C = BRAND.colors;

/** Text typed out letter by letter between two frames, with a blinking caret while typing. */
const useTyped = (text: string, from: number, to: number) => {
  const frame = useCurrentFrame();
  const n = Math.floor(ease01Linear(frame, from, to) * text.length);
  const typing = frame >= from && frame < to + 6;
  const caret = typing && Math.floor(frame / 8) % 2 === 0 ? '▏' : '';
  return text.slice(0, n) + caret;
};
const ease01Linear = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

const Chip: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <div style={{ background: bg, color, fontSize: 23, fontWeight: 600, padding: '8px 18px', borderRadius: 999 }}>{children}</div>
);

/** Solution scene: a ticket card. The WhatsApp voice note is turned into text, the agent answers inside the ticket. */
export const TicketScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = (sec: number) => Math.round(sec * fps);

  const card = spring({ frame: frame - 2, fps, config: { damping: 24, stiffness: 95, mass: 1 } });
  const toast = ease01(frame, s(0.3), s(0.7)) - ease01(frame, s(2.4), s(2.8));
  const transcriptFrom = s(3.5);
  const transcriptTo = s(5.4);
  const transcript = useTyped(SCRIPT.ticket.transcript, transcriptFrom, transcriptTo);
  const wave = ease01Linear(frame, transcriptFrom, transcriptTo);
  const reply = useTyped(SCRIPT.ticket.agentReply, s(5.6), s(7.4));
  const replyShown = ease01(frame, s(5.4), s(5.8));
  const transcriptShown = ease01(frame, s(3.2), s(3.6));

  return (
    <BrandBackground>
      {/* toast */}
      <div
        style={{
          position: 'absolute',
          top: 130,
          left: '50%',
          transform: `translate(-50%, ${interpolate(toast, [0, 1], [-30, 0])}px)`,
          opacity: toast,
          background: C.primary,
          color: '#04201C',
          fontWeight: 700,
          fontSize: 28,
          padding: '14px 30px',
          borderRadius: 999,
          boxShadow: '0 14px 40px rgba(0,0,0,0.4)',
        }}
      >
        ✓ Ticket created from WhatsApp
      </div>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 230 }}>
        <div
          style={{
            width: 940,
            background: C.surface,
            borderRadius: 30,
            padding: '42px 46px',
            border: '1.5px solid rgba(255,255,255,0.09)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            opacity: card,
            transform: `translateY(${interpolate(card, [0, 1], [120, 0])}px)`,
          }}
        >
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Chip bg="rgba(59,130,246,0.18)" color="#8DB8FF">New</Chip>
            <Chip bg="rgba(37,211,102,0.16)" color="#4BE08A">{SCRIPT.ticket.channelLabel}</Chip>
          </div>
          <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: -0.8, marginTop: 20 }}>{SCRIPT.ticket.title}</div>
          <div style={{ fontSize: 26, color: C.textMuted, marginTop: 6 }}>Requester: {SCRIPT.ticket.requester}</div>
          <div style={{ height: 1.5, background: 'rgba(255,255,255,0.09)', margin: '30px 0' }} />

          {/* requester message: voice note and its text */}
          <div style={{ opacity: transcriptShown, transform: `translateY(${(1 - transcriptShown) * 20}px)` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, background: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: '18px 24px' }}>
              <div style={{ width: 52, height: 52, borderRadius: 26, background: C.whatsappGreen, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>▶</div>
              <Waveform width={520} height={44} progress={wave} color="rgba(255,255,255,0.28)" activeColor={C.accent} />
              <span style={{ fontSize: 22, color: C.textMuted }}>{SCRIPT.chat.voiceNoteLength}</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: C.accent, margin: '18px 0 8px', letterSpacing: 0.4 }}>VOICE NOTE AS TEXT</div>
            <div style={{ fontSize: 33, lineHeight: 1.4, minHeight: 138 }}>{transcript}</div>
          </div>

          {/* agent reply */}
          <div style={{ opacity: replyShown, transform: `translateY(${(1 - replyShown) * 20}px)`, marginTop: 14, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ width: 52, height: 52, borderRadius: 26, background: `linear-gradient(135deg, ${C.mintStart}, ${C.skyEnd})`, color: C.background, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>A</div>
            <div style={{ flex: 1, background: 'rgba(27,182,160,0.16)', border: '1.5px solid rgba(27,182,160,0.4)', borderRadius: 20, padding: '16px 24px', fontSize: 31, lineHeight: 1.4, minHeight: 100 }}>
              <div style={{ fontSize: 21, fontWeight: 600, color: C.accent, marginBottom: 6 }}>Agent reply</div>
              {reply}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </BrandBackground>
  );
};
