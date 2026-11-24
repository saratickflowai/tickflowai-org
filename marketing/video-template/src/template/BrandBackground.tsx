import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND } from '../brand/brand';
import { Logo } from './Logo';

/** Background used by every scene: brand gradient and a small logo in the corner. */
export const BrandBackground: React.FC<{ showCornerLogo?: boolean; children?: React.ReactNode }> = ({
  showCornerLogo = true,
  children,
}) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(circle at 20% 10%, ${BRAND.colors.surface} 0%, ${BRAND.colors.background} 60%)`,
      fontFamily: BRAND.font.family,
      color: BRAND.colors.text,
    }}
  >
    {children}
    {showCornerLogo ? (
      <div style={{ position: 'absolute', top: 48, left: 56, opacity: 0.85 }}>
        <Logo size={56} />
      </div>
    ) : null}
  </AbsoluteFill>
);
