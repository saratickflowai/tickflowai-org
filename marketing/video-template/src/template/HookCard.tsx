import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../brand/brand';
import { BrandBackground } from './BrandBackground';
import { enterUp } from './animations';

/** Opening card: one big hook line in the first seconds. */
export const HookCard: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <BrandBackground>
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 90 }}>
        <div
          style={{
            ...enterUp(frame, fps, 4),
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: 'center',
          }}
        >
          {text}
        </div>
        <div
          style={{
            ...enterUp(frame, fps, 14),
            marginTop: 40,
            width: 160,
            height: 10,
            borderRadius: 5,
            background: BRAND.colors.accent,
          }}
        />
      </AbsoluteFill>
    </BrandBackground>
  );
};
