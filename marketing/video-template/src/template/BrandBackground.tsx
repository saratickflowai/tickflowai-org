import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { BRAND } from '../brand/brand';
import { Logo } from './Logo';

/** Background used by every scene: brand gradient and a small logo in the corner. */
export const BrandBackground: React.FC<{ showCornerLogo?: boolean; children?: React.ReactNode }> = ({
  showCornerLogo = true,
  children,
}) => {
  const frame = useCurrentFrame();
  const orb = (cx: number, cy: number, r: number, color: string, phase: number) => (
    <div
      style={{
        position: 'absolute',
        left: cx + Math.sin(frame / 70 + phase) * 60 - r,
        top: cy + Math.cos(frame / 90 + phase) * 50 - r,
        width: r * 2,
        height: r * 2,
        borderRadius: '50%',
        background: color,
        filter: 'blur(90px)',
        opacity: 0.35,
      }}
    />
  );
  return (
  <AbsoluteFill
    style={{
      background: `radial-gradient(circle at 25% 5%, ${BRAND.colors.background} 0%, ${BRAND.colors.backgroundDeep} 75%)`,
      fontFamily: BRAND.font.family,
      color: BRAND.colors.text,
    }}
  >
    {orb(150, 250, 280, BRAND.colors.primary, 0)}
    {orb(950, 1100, 320, BRAND.colors.skyEnd, 2)}
    {children}
    {showCornerLogo ? (
      <div style={{ position: 'absolute', top: 48, left: 56, opacity: 0.85 }}>
        <Logo size={40} />
      </div>
    ) : null}
  </AbsoluteFill>
  );
};
