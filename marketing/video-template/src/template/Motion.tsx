import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { L } from './Light';
import { useVideoFrame } from './ui';

/** Slow camera push (and a small drift) on everything inside, so no scene is ever still. */
export const Camera: React.FC<{ push?: number; driftX?: number; driftY?: number; children: React.ReactNode }> = ({
  push = 0.05,
  driftX = -14,
  driftY = -10,
  children,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / Math.max(1, durationInFrames);
  return (
    <AbsoluteFill style={{ transform: `translate(${driftX * t}px, ${driftY * t}px) scale(${1 + push * t})`, transformOrigin: '50% 45%' }}>
      {children}
    </AbsoluteFill>
  );
};

/** Gentle up and down float, for avatars and badges. */
export const Float: React.FC<{ amp?: number; speed?: number; phase?: number; rot?: number; style?: React.CSSProperties; children: React.ReactNode }> = ({
  amp = 10,
  speed = 0.07,
  phase = 0,
  rot = 0,
  style,
  children,
}) => {
  const frame = useVideoFrame();
  return (
    <div style={{ transform: `translateY(${Math.sin(frame * speed + phase) * amp}px) rotate(${Math.sin(frame * speed * 0.8 + phase) * rot}deg)`, ...style }}>
      {children}
    </div>
  );
};

/** Expanding rings, like a notification ping. Centered on x, y (video pixels). */
export const Ping: React.FC<{ x: number; y: number; atSec: number; color?: string; rings?: number; size?: number }> = ({
  x,
  y,
  atSec,
  color = L.teal,
  rings = 3,
  size = 260,
}) => {
  const frame = useVideoFrame();
  const start = Math.round(atSec * 30);
  return (
    <div style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}>
      {Array.from({ length: rings }).map((_, i) => {
        const p = interpolate(frame - start - i * 7, [0, 28], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        if (p <= 0 || p >= 1) return null;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: -size / 2,
              top: -size / 2,
              width: size,
              height: size,
              borderRadius: size / 2,
              border: `5px solid ${color}`,
              opacity: (1 - p) * 0.8,
              transform: `scale(${0.2 + p * 1.1})`,
            }}
          />
        );
      })}
    </div>
  );
};

const CONFETTI = ['#1BB6A0', '#3DA9DB', '#F5B041', '#5B5FC7', '#25D366', '#0F1A43'];

/** Success burst: confetti flies out and a green check pops in. Centered on x, y. */
export const Burst: React.FC<{ x: number; y: number; atSec: number; check?: boolean }> = ({ x, y, atSec, check = true }) => {
  const frame = useVideoFrame();
  const { fps } = useVideoConfig();
  const start = Math.round(atSec * fps);
  const f = frame - start;
  if (f < 0 || f > 70) return null;
  const pop = spring({ frame: f, fps, config: { damping: 12, stiffness: 160, mass: 0.7 } });
  return (
    <div style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none', zIndex: 30 }}>
      {Array.from({ length: 22 }).map((_, i) => {
        const angle = (i / 22) * Math.PI * 2 + (i % 3) * 0.3;
        const speed = 7 + (i % 5) * 2.4;
        const dist = interpolate(f, [0, 40], [0, speed * 26], { extrapolateRight: 'clamp' });
        const fall = f * f * 0.12;
        const op = interpolate(f, [22, 62], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: Math.cos(angle) * dist - 9,
              top: Math.sin(angle) * dist + fall - 9,
              width: i % 2 ? 18 : 12,
              height: 18,
              borderRadius: i % 3 === 0 ? 9 : 3,
              background: CONFETTI[i % CONFETTI.length],
              opacity: op,
              transform: `rotate(${f * (8 + (i % 4) * 5)}deg)`,
            }}
          />
        );
      })}
      {check ? (
        <div
          style={{
            position: 'absolute',
            left: -60,
            top: -60,
            width: 120,
            height: 120,
            borderRadius: 60,
            background: '#15803D',
            color: '#fff',
            fontSize: 74,
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 30px rgba(21,128,61,0.45)',
            transform: `scale(${pop * interpolate(f, [40, 62], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
          }}
        >
          ✓
        </div>
      ) : null}
    </div>
  );
};

/** Circular progress ring with content in the middle. */
export const Ring: React.FC<{ size: number; progress: number; stroke?: number; color?: string; track?: string; children?: React.ReactNode }> = ({
  size,
  progress,
  stroke = 16,
  color = L.teal,
  track = 'rgba(15,26,67,0.09)',
  children,
}) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(1, Math.max(0, progress)))} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
    </div>
  );
};

/** A block that flies in from an offset with a spring and a small tilt, from `atSec` (video time). */
export const Fly: React.FC<{ atSec: number; dx?: number; dy?: number; rot?: number; style?: React.CSSProperties; children: React.ReactNode }> = ({
  atSec,
  dx = 0,
  dy = 120,
  rot = 0,
  style,
  children,
}) => {
  const frame = useVideoFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - Math.round(atSec * fps), fps, config: { damping: 15, stiffness: 110, mass: 0.9 } });
  return (
    <div
      style={{
        opacity: interpolate(p, [0, 0.35], [0, 1], { extrapolateRight: 'clamp' }),
        transform: `translate(${(1 - p) * dx}px, ${(1 - p) * dy}px) rotate(${(1 - p) * rot}deg) scale(${0.9 + p * 0.1})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** A diagonal light sweep across a card, once, at `atSec`. */
export const Shine: React.FC<{ atSec: number; radius?: number }> = ({ atSec, radius = 30 }) => {
  const frame = useVideoFrame();
  const p = interpolate(frame, [Math.round(atSec * 30), Math.round(atSec * 30) + 26], [-0.4, 1.4], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', top: -40, bottom: -40, width: 180, left: `${p * 100}%`, transform: 'skewX(-20deg)', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)' }} />
    </div>
  );
};

/** Number that counts up between two video seconds. */
export const CountUp: React.FC<{ from: number; to: number; startSec: number; endSec: number }> = ({ from, to, startSec, endSec }) => {
  const frame = useVideoFrame();
  const v = interpolate(frame, [Math.round(startSec * 30), Math.round(endSec * 30)], [from, to], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <>{Math.round(v)}</>;
};
