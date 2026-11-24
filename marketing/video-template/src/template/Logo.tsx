import React from 'react';
import { Img, staticFile } from 'remotion';
import { BRAND } from '../brand/brand';

/** Brand logo. Uses the logo file when set, otherwise a text mark. */
export const Logo: React.FC<{ size: number }> = ({ size }) => {
  if (BRAND.logoFile) {
    return <Img src={staticFile(BRAND.logoFile)} style={{ height: size }} />;
  }
  return (
    <div
      style={{
        fontFamily: BRAND.font.family,
        fontWeight: 800,
        fontSize: size * 0.6,
        color: BRAND.colors.text,
        letterSpacing: -1,
      }}
    >
      TickFlow<span style={{ color: BRAND.colors.accent }}>AI</span>
    </div>
  );
};
