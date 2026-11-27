import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../brand/brand';
import { enterUp, popIn } from './animations';

/** Light style (Sara, 27 Nov 2026): same look as the Friday tip graphic. White cards, navy text, teal accents. */
export const L = {
  bg: '#F3F9F9',
  card: '#FFFFFF',
  navy: '#0F1A43',
  slate: '#56627F',
  teal: '#1BB6A0',
  tealDark: '#0F8F7E',
  mint: '#E6F7F4',
  border: 'rgba(15, 26, 67, 0.09)',
  soft: 'rgba(15, 26, 67, 0.045)',
  shadow: '0 14px 40px rgba(15, 26, 67, 0.10)',
} as const;

/** Chip colors that stay readable on white. */
export const TONES = {
  blue: { bg: 'rgba(37,99,235,0.10)', color: '#1D4ED8' },
  green: { bg: 'rgba(22,163,74,0.12)', color: '#15803D' },
  amber: { bg: 'rgba(217,119,6,0.13)', color: '#B45309' },
  sky: { bg: 'rgba(2,132,199,0.11)', color: '#0369A1' },
  purple: { bg: 'rgba(79,70,229,0.11)', color: '#4338CA' },
  teal: { bg: 'rgba(15,143,126,0.12)', color: '#0F766E' },
} as const;

/** Light logo (navy wordmark). */
export const LightLogo: React.FC<{ size: number }> = ({ size }) => (
  <Img src={staticFile('brand/logo-light.svg')} style={{ height: size }} />
);

/** Light background with soft moving shapes and a teal bar on top. Motion is slow and calm. */
export const LightBackground: React.FC<{ showLogo?: boolean; children?: React.ReactNode }> = ({ showLogo = true, children }) => {
  const frame = useCurrentFrame();
  const blob = (cx: number, cy: number, r: number, color: string, phase: number) => (
    <div
      style={{
        position: 'absolute',
        left: cx + Math.sin(frame / 60 + phase) * 70 - r,
        top: cy + Math.cos(frame / 75 + phase) * 60 - r,
        width: r * 2,
        height: r * 2,
        borderRadius: '50%',
        background: color,
        filter: 'blur(70px)',
        opacity: 0.55,
      }}
    />
  );
  return (
    <AbsoluteFill style={{ background: L.bg, fontFamily: BRAND.font.family, color: L.navy, overflow: 'hidden' }}>
      {blob(120, 260, 260, '#CFF3EC', 0)}
      {blob(980, 1050, 300, '#D5EAF8', 2)}
      <AbsoluteFill
        style={{
          backgroundImage: 'radial-gradient(rgba(15,26,67,0.07) 1.6px, transparent 1.6px)',
          backgroundSize: '44px 44px',
          backgroundPosition: `${(frame * 0.4) % 44}px ${(frame * 0.25) % 44}px`,
          opacity: 0.6,
        }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 12, background: `linear-gradient(90deg, ${BRAND.colors.mintStart}, ${BRAND.colors.skyEnd})` }} />
      {children}
      {showLogo ? (
        <div style={{ position: 'absolute', top: 52, right: 64 }}>
          <LightLogo size={44} />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

/** Small label with a line, like "HELP DESK TIP" in the Friday graphic. */
export const Kicker: React.FC<{ text: string; top?: number; left?: number }> = ({ text, top = 58, left = 64 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lineW = interpolate(frame, [0, 14], [0, 56], { extrapolateRight: 'clamp' });
  return (
    <div style={{ ...enterUp(frame, fps, 0), position: 'absolute', top, left, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: lineW, height: 5, borderRadius: 3, background: L.teal }} />
      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 3.2, color: L.tealDark }}>{text}</div>
    </div>
  );
};

/** Big headline, words appear one after another. Last line is teal like the Friday graphic. */
export const KineticHeadline: React.FC<{ lines: readonly string[]; top?: number; size?: number }> = ({ lines, top = 150, size = 76 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  let index = 0;
  return (
    <div style={{ position: 'absolute', top, left: 64, right: 64 }}>
      {lines.map((line, li) => (
        <div key={li} style={{ fontSize: size, fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, color: li === lines.length - 1 && lines.length > 1 ? L.tealDark : L.navy }}>
          {line.split(' ').map((word) => {
            const start = 4 + index++ * 4;
            return (
              <span key={index} style={{ display: 'inline-block', marginRight: '0.28em', ...enterUp(frame, fps, start) }}>
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

/** White product card with a soft shadow. Drawn example, not a real screenshot. */
export const LightCard: React.FC<{ style?: React.CSSProperties; children: React.ReactNode }> = ({ style, children }) => (
  <div style={{ background: L.card, borderRadius: 30, padding: '36px 42px', border: `1.5px solid ${L.border}`, boxShadow: L.shadow, ...style }}>
    {children}
  </div>
);

/** Numbered row used in post graphics and in some video scenes. */
export const NumberRow: React.FC<{ n: number; title: string; body: string; animateFrom?: number }> = ({ n, title, body, animateFrom }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const anim = animateFrom === undefined ? {} : popIn(frame, fps, animateFrom);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 26, background: L.card, borderRadius: 24, padding: '26px 32px', border: `1.5px solid ${L.border}`, boxShadow: '0 8px 24px rgba(15,26,67,0.07)', ...anim }}>
      <div style={{ width: 70, height: 70, borderRadius: 35, flexShrink: 0, background: `linear-gradient(135deg, ${BRAND.colors.mintStart}, ${L.teal})`, color: '#fff', fontSize: 36, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
      <div>
        <div style={{ fontSize: 38, fontWeight: 800, color: L.navy }}>{title}</div>
        <div style={{ fontSize: 27, color: L.slate, marginTop: 4, lineHeight: 1.3 }}>{body}</div>
      </div>
    </div>
  );
};

/** Closing card in the light style: logo, one call to action, one small line. */
export const LightEnd: React.FC<{ callToAction: string; smallLine: string }> = ({ callToAction, smallLine }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <LightBackground showLogo={false}>
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80, gap: 52 }}>
        <div style={popIn(frame, fps, 0)}>
          <LightLogo size={120} />
        </div>
        <div style={{ ...enterUp(frame, fps, 10), fontSize: 84, fontWeight: 800, textAlign: 'center', lineHeight: 1.1, letterSpacing: -2, color: L.navy }}>
          {callToAction}
        </div>
        <div style={{ ...enterUp(frame, fps, 20), fontSize: 38, fontWeight: 700, color: '#fff', background: L.tealDark, padding: '18px 42px', borderRadius: 999 }}>
          {smallLine}
        </div>
      </AbsoluteFill>
    </LightBackground>
  );
};
