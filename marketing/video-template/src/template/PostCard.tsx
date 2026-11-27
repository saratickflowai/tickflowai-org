import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND } from '../brand/brand';
import { L, LightBackground, NumberRow } from './Light';

/** One LinkedIn post graphic (1080x1350), same layout as the Friday "help desk tip" graphic. Static. */
export const PostCard: React.FC<{
  kicker: string;
  headline: readonly string[];
  sub: string;
  rows: readonly { title: string; body: string }[];
  callout: string;
}> = ({ kicker, headline, sub, rows, callout }) => (
  <LightBackground>
    <div style={{ position: 'absolute', top: 66, left: 64, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 56, height: 5, borderRadius: 3, background: L.teal }} />
      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 3.2, color: L.tealDark }}>{kicker}</div>
    </div>
    <div style={{ position: 'absolute', top: 160, left: 64, right: 64 }}>
      {headline.map((line, i) => (
        <div key={i} style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2.4, lineHeight: 1.06, color: i === headline.length - 1 ? L.tealDark : L.navy }}>{line}</div>
      ))}
      <div style={{ fontSize: 34, color: L.slate, marginTop: 26, lineHeight: 1.3 }}>{sub}</div>
    </div>
    <AbsoluteFill style={{ top: 470, padding: '0 64px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      {rows.map((r, i) => (
        <NumberRow key={r.title} n={i + 1} title={r.title} body={r.body} />
      ))}
      <div style={{ marginTop: 8, border: `3px dashed ${BRAND.colors.primary}`, background: L.mint, borderRadius: 26, padding: '30px 38px', fontSize: 34, fontWeight: 700, color: L.navy, lineHeight: 1.3 }}>{callout}</div>
    </AbsoluteFill>
  </LightBackground>
);
