import { Easing, interpolate, spring } from 'remotion';

/** Soft fade and slide up, starting at `startFrame`. No bounce. */
export const enterUp = (frame: number, fps: number, startFrame = 0) => {
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 200, mass: 0.9 }, durationInFrames: 22 });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [28, 0])}px)`,
  };
};

/** Gentle scale-in with a very small overshoot, starting at `startFrame`. */
export const popIn = (frame: number, fps: number, startFrame = 0) => {
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 18, mass: 0.7, stiffness: 140 } });
  return {
    opacity: interpolate(progress, [0, 0.6], [0, 1], { extrapolateRight: 'clamp' }),
    transform: `scale(${interpolate(progress, [0, 1], [0.92, 1])})`,
  };
};

/** Smooth 0 to 1 between two frames with easing. */
export const ease01 = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
