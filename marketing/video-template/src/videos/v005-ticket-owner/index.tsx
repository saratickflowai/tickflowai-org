import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile } from 'remotion';
import { BRAND } from '../../brand/brand';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';

import { Subtitles } from '../../template/Subtitles';
import { Avatar, Chip, Panel, Part, Pop, useVideoFrame } from '../../template/ui';
import { SCRIPT, SUBTITLES } from './script';

const C = BRAND.colors;
const AGENT_COLORS = ['linear-gradient(135deg,#F5B041,#E67E22)', `linear-gradient(135deg, ${C.mintStart}, ${C.skyEnd})`, 'linear-gradient(135deg,#AEB1FF,#6C6FE0)'];

const TicketHeader: React.FC<{ chip: React.ReactNode }> = ({ chip }) => (
  <div>
    <div style={{ display: 'flex', gap: 12 }}>{chip}</div>
    <div style={{ fontSize: 50, fontWeight: 700, letterSpacing: -0.8, marginTop: 18 }}>{SCRIPT.ticket.title}</div>
  </div>
);

/** Problem scene: one ticket, three agents, nobody owns it. */
const ProblemScene: React.FC = () => (
  <LightBackground>
    <Kicker text="TICKET OWNER" />
    <KineticHeadline lines={['Who owns', 'this ticket?']} />
    <div style={{ position: 'absolute', left: 120, top: 470, width: 840 }}>
      <Pop atSec={0.2}>
        <Panel>
          <TicketHeader chip={<Chip bg="rgba(245,176,65,0.18)" color="#F5B041">No owner</Chip>} />
        </Panel>
      </Pop>
    </div>
    {SCRIPT.ticket.agents.map((letter, i) => (
      <Pop key={letter} atSec={0.3 + i * 0.9} style={{ position: 'absolute', top: 760 + (i === 1 ? 70 : 0), left: 150 + i * 280 }}>
        <div style={{ position: 'relative' }}>
          <Avatar letter={letter} size={150} bg={AGENT_COLORS[i]} />
          <div style={{ position: 'absolute', top: -40, right: -30, width: 76, height: 76, borderRadius: 38, background: '#fff', color: '#1B1B1F', fontSize: 52, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>?</div>
        </div>
      </Pop>
    ))}
  </LightBackground>
);

/** Solution scene: the ticket has an owner and an SLA timer counts down. */
const OwnerScene: React.FC = () => {
  const frame = useVideoFrame();
  const sec = frame / 30;
  const left = Math.max(0, Math.round(7200 - (sec - 4.1) * 40));
  const pad = (n: number) => String(n).padStart(2, '0');
  const timer = `${pad(Math.floor(left / 3600))}:${pad(Math.floor((left % 3600) / 60))}:${pad(left % 60)}`;
  const bar = interpolate(left, [0, 7200], [0, 1]);
  return (
    <LightBackground>
      <Kicker text="TICKET OWNER" />
      <KineticHeadline lines={['One owner.', 'Clear time left.']} />
      <Pop atSec={4.2} style={{ position: 'absolute', left: 90, top: 440, width: 900 }}>
        <Panel style={{ minHeight: 640 }}>
          <TicketHeader chip={<Chip bg="rgba(59,130,246,0.18)" color="#8DB8FF">In progress</Chip>} />
          <div style={{ height: 1.5, background: 'rgba(15,26,67,0.09)', margin: '30px 0' }} />
          <Pop atSec={4.8}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <Avatar letter="B" size={96} bg={AGENT_COLORS[1]} ring />
              <div>
                <div style={{ fontSize: 24, color: L.slate, fontWeight: 600, letterSpacing: 0.5 }}>OWNER</div>
                <div style={{ fontSize: 42, fontWeight: 700 }}>Agent B</div>
              </div>
            </div>
          </Pop>
          <Pop atSec={7.0} style={{ marginTop: 40 }}>
            <div style={{ background: 'rgba(15,26,67,0.045)', borderRadius: 22, padding: '26px 30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 24, color: L.slate, fontWeight: 600, letterSpacing: 0.5 }}>SLA TIME LEFT</div>
                <div style={{ fontSize: 58, fontWeight: 800, fontVariantNumeric: 'tabular-nums', color: L.tealDark }}>{timer}</div>
              </div>
              <div style={{ height: 16, borderRadius: 8, background: 'rgba(15,26,67,0.10)', marginTop: 20, overflow: 'hidden' }}>
                <div style={{ width: `${bar * 100}%`, height: '100%', background: `linear-gradient(90deg, ${C.mintStart}, ${C.skyEnd})` }} />
              </div>
            </div>
          </Pop>
        </Panel>
      </Pop>
    </LightBackground>
  );
};

export const V005_DURATION_SEC = SCRIPT.totalSec;

/** Video 005: who owns this ticket (Friendly tone), with voice and English subtitles. */
export const V005TicketOwner: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.problem.from} to={SCRIPT.scenes.problem.to}><ProblemScene /></Part>
    <Part from={SCRIPT.scenes.owner.from} to={SCRIPT.scenes.owner.to}><OwnerScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <LightEnd callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
    <Subtitles cues={SUBTITLES} />
  </AbsoluteFill>
);
