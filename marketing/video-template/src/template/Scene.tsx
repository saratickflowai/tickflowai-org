import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

/** Wraps a scene: smooth fade in and out and a slow camera push, so cuts feel soft. */
export const Scene: React.FC<{ durationInFrames: number; fadeFrames?: number; children: React.ReactNode }> = ({
  durationInFrames,
  fadeFrames = 10,
  children,
}) => {
  const frame = useCurrentFrame();
  useVideoConfig();
  const opacity = interpolate(frame, [0, fadeFrames, durationInFrames - fadeFrames, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.ease),
  });
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.04], { easing: Easing.out(Easing.quad) });
  return <div style={{ position: 'absolute', inset: 0, opacity, transform: `scale(${scale})` }}>{children}</div>;
};
