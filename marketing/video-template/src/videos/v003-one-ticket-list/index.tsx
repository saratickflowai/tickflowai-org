import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { EndCard } from '../../template/EndCard';
import { Subtitles } from '../../template/Subtitles';
import { Chip, Headline, Panel, Part, Pop } from '../../template/ui';
import { SCRIPT, SUBTITLES } from './script';

const C = BRAND.colors;
const CHANNEL_COLORS: Record<string, { bg: string; color: string }> = {
  Email: { bg: 'rgba(61,169,219,0.18)', color: '#7CC8EE' },
  Teams: { bg: 'rgba(91,95,199,0.28)', color: '#AEB1FF' },
  WhatsApp: { bg: 'rgba(37,211,102,0.16)', color: '#4BE08A' },
  Hallway: { bg: 'rgba(245,176,65,0.18)', color: '#F5B041' },
  'Added by an agent': { bg: 'rgba(27,182,160,0.2)', color: C.accent },
};

const Card: React.FC<{ channel: string; text: string; tilt: number; atSec: number; top: number; left: number }> = ({
  channel,
  text,
  tilt,
  atSec,
  top,
  left,
}) => (
  <Pop atSec={atSec} style={{ position: 'absolute', top, left, width: 700 }}>
    <div style={{ transform: `rotate(${tilt}deg)` }}>
      <Panel style={{ padding: '30px 36px' }}>
        <Chip bg={CHANNEL_COLORS[channel].bg} color={CHANNEL_COLORS[channel].color}>{channel}</Chip>
        <div style={{ fontSize: 38, fontWeight: 600, marginTop: 16, lineHeight: 1.25 }}>{text}</div>
      </Panel>
    </div>
  </Pop>
);

/** Problem scene: three requests in three places. */
const ScatterScene: React.FC = () => (
  <BrandBackground>
    <Headline text="Requests come from everywhere." />
    <Card {...SCRIPT.scatter.email} tilt={-3} atSec={0.15} top={330} left={80} />
    <Card {...SCRIPT.scatter.teams} tilt={2.5} atSec={1.25} top={600} left={300} />
    <Card {...SCRIPT.scatter.hallway} tilt={-2} atSec={2.65} top={880} left={110} />
  </BrandBackground>
);

/** Solution scene: one ticket list, rows slide in. */
const ListScene: React.FC = () => (
  <BrandBackground>
    <Headline text={SCRIPT.list.title} top={150} />
    <Pop atSec={4.3} style={{ position: 'absolute', left: 80, top: 330, width: 920 }}>
      <Panel style={{ padding: '34px 40px', minHeight: 640 }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: C.accent, letterSpacing: 0.6, marginBottom: 18 }}>TICKETS</div>
        {SCRIPT.list.rows.map((row) => (
          <Pop key={row.text} atSec={row.at} style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, background: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: '22px 26px' }}>
              <div style={{ width: 230, flexShrink: 0 }}>
                <Chip bg={CHANNEL_COLORS[row.channel].bg} color={CHANNEL_COLORS[row.channel].color} size={22}>{row.channel}</Chip>
              </div>
              <div style={{ fontSize: 31, fontWeight: 600, lineHeight: 1.2 }}>{row.text}</div>
            </div>
          </Pop>
        ))}
      </Panel>
    </Pop>
  </BrandBackground>
);

export const V003_DURATION_SEC = SCRIPT.totalSec;

/** Video 003: requests lost between email, Teams and the hallway (Friendly tone), with voice and English subtitles. */
export const V003OneTicketList: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.scatter.from} to={SCRIPT.scenes.scatter.to}><ScatterScene /></Part>
    <Part from={SCRIPT.scenes.list.from} to={SCRIPT.scenes.list.to}><ListScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <EndCard callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
    <Subtitles cues={SUBTITLES} />
  </AbsoluteFill>
);
