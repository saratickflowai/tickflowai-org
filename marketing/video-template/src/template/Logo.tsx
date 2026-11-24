import React from 'react';
import { Img, staticFile } from 'remotion';
import { BRAND } from '../brand/brand';

/**
 * Brand logo (official SVG in /public/brand).
 * If logoFile is null, a text placeholder is drawn (not the official logo).
 */
export const Logo: React.FC<{ size: number }> = ({ size }) => {
  if (BRAND.logoFile) {
    return <Img src={staticFile(BRAND.logoFile)} style={{ height: size }} />;
  }
  const c = BRAND.colors;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.14, fontFamily: BRAND.font.family }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.26,
          background: `linear-gradient(135deg, ${c.mintStart}, ${c.skyEnd})`,
          color: c.background,
          fontWeight: 800,
          fontSize: size * 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        TF
      </div>
      <div style={{ fontWeight: 700, fontSize: size * 0.62, color: c.text, letterSpacing: -0.5 }}>TickFlow</div>
      <div
        style={{
          background: c.logoTeal,
          color: '#fff',
          fontWeight: 800,
          fontSize: size * 0.4,
          borderRadius: size * 0.14,
          padding: `${size * 0.05}px ${size * 0.12}px`,
        }}
      >
        AI
      </div>
    </div>
  );
};
