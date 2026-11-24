import { interpolate, spring } from 'remotion';

/** Fade and slide up, starting at `startFrame`. */
export const enterUp = (frame: number, fps: number, startFrame = 0) => {
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 200 } });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px)`,
  };
};

/** Pop in with a small scale, starting at `startFrame`. */
export const popIn = (frame: number, fps: number, startFrame = 0) => {
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 14, mass: 0.6 } });
  return {
    opacity: Math.min(1, progress * 1.5),
    transform: `scale(${interpolate(progress, [0, 1], [0.85, 1])})`,
  };
};
