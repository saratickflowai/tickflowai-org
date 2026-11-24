import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { Waveform } from '../../template/Waveform';
import { ease01, enterUp } from '../../template/animations';
import { SCRIPT } from './script';

const C = BRAND.colors;
const WA_HEADER = '#008069';

/** One incoming WhatsApp message. Space is reserved from the start so nothing jumps. */
const Message: React.FC<{ at: number; time: string; children: React.ReactNode }> = ({ at, time, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - at, fps, config: { damping: 22, stiffness: 160, mass: 0.8 } });
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        opacity: interpolate(p, [0, 0.5], [0, 1], { extrapolateRight: 'clamp' }),
        transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px) scale(${interpolate(p, [0, 1], [0.94, 1])})`,
        transformOrigin: 'left top',
        background: C.whatsappBubbleIn,
        color: '#111B21',
        borderRadius: '6px 22px 22px 22px',
        padding: '14px 20px 10px',
        fontSize: 27,
        maxWidth: 470,
        boxShadow: '0 1px 2px rgba(0,0,0,0.18)',
      }}
    >
      {children}
      <div style={{ textAlign: 'right', fontSize: 18, color: '#667781', marginTop: 4 }}>{time}</div>
    </div>
  );
};

/** Problem scene: a realistic phone, messages arrive one after another. */
export const ChatScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = (sec: number) => Math.round(sec * fps);

  const phone = spring({ frame: frame - 4, fps, config: { damping: 24, stiffness: 90, mass: 1 } });
  const typing = frame >= s(5.1) && frame < s(5.75);
  // voice note playhead moves after it arrives
  const voiceProgress = ease01(frame, s(3.0), s(6.6)) * 0.55;

  return (
    <BrandBackground>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 150 }}>
        <div
          style={{
            ...enterUp(frame, fps, 2),
            fontSize: 62,
            fontWeight: 700,
            letterSpacing: -1.2,
            textAlign: 'center',
            maxWidth: 860,
            lineHeight: 1.12,
            marginBottom: 46,
          }}
        >
          {SCRIPT.headline}
        </div>
        <div
          style={{
            width: 600,
            height: 840,
            borderRadius: 78,
            padding: 13,
            background: 'linear-gradient(145deg,#2a2d36,#0b0c10)',
            boxShadow: '0 40px 90px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(255,255,255,0.08)',
            opacity: phone,
            transform: `translateY(${interpolate(phone, [0, 1], [90, 0])}px) rotate(${interpolate(phone, [0, 1], [2, 0])}deg)`,
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 66, overflow: 'hidden', background: '#EFE7DE', display: 'flex', flexDirection: 'column' }}>
            {/* status bar */}
            <div style={{ background: WA_HEADER, color: '#fff', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 40px 0', fontSize: 22, fontWeight: 600 }}>
              <span>9:41</span>
              <div style={{ position: 'absolute', left: '50%', top: 12, width: 130, height: 34, marginLeft: -65, borderRadius: 20, background: '#000' }} />
              <span style={{ letterSpacing: 2 }}>▮▮▮ ▭</span>
            </div>
            {/* chat header */}
            <div style={{ background: WA_HEADER, color: '#fff', display: 'flex', alignItems: 'center', gap: 16, padding: '6px 24px 18px' }}>
              <span style={{ fontSize: 40, lineHeight: 1 }}>‹</span>
              <div style={{ width: 54, height: 54, borderRadius: 27, background: '#DFE5E7', color: '#54656F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 22 }}>IT</div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 600 }}>{SCRIPT.chat.contactName}</div>
                <div style={{ fontSize: 19, opacity: 0.85 }}>online</div>
              </div>
            </div>
            {/* chat area */}
            <div
              style={{
                flex: 1,
                padding: '26px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                backgroundImage: 'radial-gradient(rgba(11,20,26,0.05) 1.5px, transparent 1.5px)',
                backgroundSize: '26px 26px',
              }}
            >
              <Message at={s(0.7)} time="9:38">{SCRIPT.chat.textMessage}</Message>
              <Message at={s(2.7)} time="9:39">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: 400 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 25, background: '#DFE5E7', color: '#54656F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>▶</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Waveform width={250} height={38} progress={voiceProgress} color="#B7C0C5" activeColor="#00A884" />
                    <span style={{ fontSize: 17, color: '#667781' }}>{SCRIPT.chat.voiceNoteLength}</span>
                  </div>
                </div>
              </Message>
              <Message at={s(4.1)} time="9:40">
                <div style={{ width: 400, height: 190, borderRadius: 12, background: 'linear-gradient(135deg,#27364d,#16202f)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <div style={{ width: 290, background: '#F3F3F3', borderRadius: 8, boxShadow: '0 6px 16px rgba(0,0,0,0.35)', overflow: 'hidden' }}>
                    <div style={{ background: '#2B579A', color: '#fff', fontSize: 15, padding: '6px 10px' }}>VPN Client</div>
                    <div style={{ display: 'flex', gap: 10, padding: 12, alignItems: 'center' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 17, background: '#D13438', color: '#fff', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</div>
                      <div style={{ fontSize: 16, color: '#222' }}>Connection failed.<br />Cannot reach the server.</div>
                    </div>
                  </div>
                </div>
                {SCRIPT.chat.photoCaption}
              </Message>
              {typing ? (
                <div style={{ alignSelf: 'flex-start', background: '#fff', borderRadius: '6px 22px 22px 22px', padding: '18px 22px', display: 'flex', gap: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.18)' }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: 6, background: '#8696A0', transform: `translateY(${Math.sin(frame / 4 + i) * 4}px)` }} />
                  ))}
                </div>
              ) : null}
              {frame >= s(5.75) ? (
                <Message at={s(5.75)} time="9:41">{SCRIPT.chat.followUp}</Message>
              ) : null}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </BrandBackground>
  );
};
