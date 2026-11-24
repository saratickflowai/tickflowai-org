import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../brand/brand';
import { BrandBackground } from './BrandBackground';
import { Logo } from './Logo';
import { enterUp, popIn } from './animations';

/** Closing card: logo, one call to action, one small line under it. */
export const EndCard: React.FC<{ callToAction: string; smallLine: string }> = ({ callToAction, smallLine }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <BrandBackground showCornerLogo={false}>
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 90, gap: 56 }}>
        <div style={popIn(frame, fps, 0)}>
          <Logo size={130} />
        </div>
        <div
          style={{ ...enterUp(frame, fps, 10), fontSize: 68, fontWeight: 800, textAlign: 'center', lineHeight: 1.15 }}
        >
          {callToAction}
        </div>
        <div
          style={{
            ...enterUp(frame, fps, 20),
            fontSize: 40,
            fontWeight: 600,
            color: BRAND.colors.background,
            background: BRAND.colors.accent,
            padding: '18px 40px',
            borderRadius: 999,
          }}
        >
          {smallLine}
        </div>
      </AbsoluteFill>
    </BrandBackground>
  );
};
