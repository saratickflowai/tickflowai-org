import React, { createContext, useContext } from 'react';
import { Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../brand/brand';
import { Scene } from './Scene';
import { ease01, enterUp } from './animations';

const C = BRAND.colors;

/** Start of the current scene in seconds, so timings inside a scene can use video time. */
const OffsetContext = createContext(0);

/** Frame counted from the start of the whole video, also inside a Part. */
export const useVideoFrame = (): number => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return frame + Math.round(useContext(OffsetContext) * fps);
};

/** A scene that lives between two seconds of the video, with the soft fade of `Scene`. */
export const Part: React.FC<{ from: number; to: number; children: React.ReactNode }> = ({ from, to, children }) => {
  const { fps } = useVideoConfig();
  const duration = Math.round((to - from) * fps);
  return (
    <Sequence from={Math.round(from * fps)} durationInFrames={duration}>
      <OffsetContext.Provider value={from}>
        <Scene durationInFrames={duration}>{children}</Scene>
      </OffsetContext.Provider>
    </Sequence>
  );
};

/** Big headline at the top of a scene. */
export const Headline: React.FC<{ text: string; top?: number }> = ({ text, top = 140 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        ...enterUp(frame, fps, 2),
        position: 'absolute',
        top,
        left: 70,
        right: 70,
        fontSize: 64,
        fontWeight: 700,
        letterSpacing: -1.2,
        textAlign: 'center',
        lineHeight: 1.12,
      }}
    >
      {text}
    </div>
  );
};

/** Small rounded label, like a status or channel tag. */
export const Chip: React.FC<{ bg: string; color: string; children: React.ReactNode; size?: number }> = ({
  bg,
  color,
  children,
  size = 23,
}) => (
  <div style={{ background: bg, color, fontSize: size, fontWeight: 600, padding: '8px 18px', borderRadius: 999, whiteSpace: 'nowrap', display: 'inline-block' }}>
    {children}
  </div>
);

/** Round avatar with one letter. */
export const Avatar: React.FC<{ letter: string; size?: number; bg?: string; color?: string; ring?: boolean }> = ({
  letter,
  size = 64,
  bg = `linear-gradient(135deg, ${C.mintStart}, ${C.skyEnd})`,
  color = C.background,
  ring = false,
}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      background: bg,
      color,
      fontWeight: 800,
      fontSize: size * 0.42,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: ring ? `0 0 0 6px ${C.accent}` : undefined,
    }}
  >
    {letter}
  </div>
);

/** Dark card used for product screens. Drawn example, not a real screenshot. */
export const Panel: React.FC<{ style?: React.CSSProperties; children: React.ReactNode }> = ({ style, children }) => (
  <div
    style={{
      background: C.surface,
      borderRadius: 30,
      padding: '38px 44px',
      border: '1.5px solid rgba(255,255,255,0.09)',
      boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
      ...style,
    }}
  >
    {children}
  </div>
);

/** Springs a block in at `atSec`. Space is reserved from the start, so nothing jumps. */
export const Pop: React.FC<{ atSec: number; style?: React.CSSProperties; children: React.ReactNode }> = ({
  atSec,
  style,
  children,
}) => {
  const frame = useVideoFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - Math.round(atSec * fps), fps, config: { damping: 20, stiffness: 130, mass: 0.8 } });
  return (
    <div
      style={{
        opacity: interpolate(p, [0, 0.5], [0, 1], { extrapolateRight: 'clamp' }),
        transform: `translateY(${interpolate(p, [0, 1], [34, 0])}px) scale(${interpolate(p, [0, 1], [0.95, 1])})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Mouse pointer that glides from one point to another and clicks (small ripple). */
export const Cursor: React.FC<{
  from: { x: number; y: number };
  to: { x: number; y: number };
  startSec: number;
  endSec: number;
  clickSec: number;
}> = ({ from, to, startSec, endSec, clickSec }) => {
  const frame = useVideoFrame();
  const { fps } = useVideoConfig();
  const t = ease01(frame, Math.round(startSec * fps), Math.round(endSec * fps));
  const x = interpolate(t, [0, 1], [from.x, to.x]);
  const y = interpolate(t, [0, 1], [from.y, to.y]);
  const clickF = Math.round(clickSec * fps);
  const ripple = ease01(frame, clickF, clickF + 10);
  const visible = ease01(frame, Math.round(startSec * fps) - 4, Math.round(startSec * fps) + 2);
  return (
    <div style={{ position: 'absolute', left: x, top: y, opacity: visible, zIndex: 20 }}>
      {frame >= clickF ? (
        <div
          style={{
            position: 'absolute',
            left: -30,
            top: -30,
            width: 60,
            height: 60,
            borderRadius: 30,
            border: `4px solid ${C.accent}`,
            opacity: 1 - ripple,
            transform: `scale(${0.4 + ripple * 1.2})`,
          }}
        />
      ) : null}
      <svg width="54" height="64" viewBox="0 0 54 64" style={{ filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.5))', transform: `scale(${frame >= clickF && frame < clickF + 5 ? 0.9 : 1})` }}>
        <path d="M6 4 L6 50 L19 38 L28 58 L37 54 L28 35 L46 35 Z" fill="#fff" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
