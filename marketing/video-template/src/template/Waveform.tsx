import React from 'react';

/** Fixed bar heights (0 to 1) that look like a voice note. Same every render. */
export const WAVE_HEIGHTS: readonly number[] = Array.from({ length: 36 }, (_, i) =>
  Math.min(1, 0.25 + Math.abs(Math.sin(i * 1.7) * 0.55) + Math.abs(Math.sin(i * 0.43)) * 0.25),
);

/** Voice note waveform. Bars left of `progress` (0 to 1) use `activeColor`. */
export const Waveform: React.FC<{
  width: number;
  height: number;
  progress: number;
  color: string;
  activeColor: string;
}> = ({ width, height, progress, color, activeColor }) => {
  const count = WAVE_HEIGHTS.length;
  const barW = width / count;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, width, height }}>
      {WAVE_HEIGHTS.map((h, i) => (
        <div
          key={i}
          style={{
            width: barW * 0.55,
            marginRight: barW * 0.45,
            height: Math.max(6, h * height),
            borderRadius: 4,
            background: i / count < progress ? activeColor : color,
          }}
        />
      ))}
    </div>
  );
};
