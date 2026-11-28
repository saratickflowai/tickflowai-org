import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile } from 'remotion';
import { BRAND } from '../../brand/brand';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';

import { Avatar, Chip, Panel, Part, Pop, useVideoFrame } from '../../template/ui';
import { Burst, Float, Fly, Ping, Ring, Shine } from '../../template/Motion';
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
          <TicketHeader chip={<Chip bg="rgba(217,119,6,0.14)" color="#B45309">No owner</Chip>} />
        </Panel>
      </Pop>
    </div>
    {SCRIPT.ticket.agents.map((letter, i) => (
      <Fly key={letter} atSec={0.3 + i * 0.9} dy={200} rot={i * 10 - 10} style={{ position: 'absolute', top: 760 + (i === 1 ? 70 : 0), left: 150 + i * 280 }}>
        <Float amp={12} phase={i * 2} rot={2}>
        <div style={{ position: 'relative' }}>
          <Avatar letter={letter} size={150} bg={AGENT_COLORS[i]} />
          <div style={{ position: 'absolute', top: -40, right: -30, width: 76, height: 76, borderRadius: 38, background: '#fff', color: '#1B1B1F', fontSize: 52, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>?</div>
        </div>
        </Float>
      </Fly>
    ))}
    {[0, 1, 2].map((i) => (
      <Ping key={i} x={225 + i * 280 + 110} y={760 + (i === 1 ? 70 : 0) - 10} atSec={1.4 + i * 0.9} color="#B45309" size={150} />
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
      <Burst x={186} y={660} atSec={4.8} check={false} />
      <Pop atSec={4.2} style={{ position: 'absolute', left: 90, top: 440, width: 900 }}>
        <Panel style={{ minHeight: 640, position: 'relative' }}>
          <Shine atSec={4.6} />
          <TicketHeader chip={<Chip bg="rgba(37,99,235,0.12)" color="#1D4ED8">In progress</Chip>} />
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
            <div style={{ background: 'rgba(15,26,67,0.045)', borderRadius: 22, padding: '26px 34px', display: 'flex', alignItems: 'center', gap: 34 }}>
              <Ring size={170} stroke={18} progress={bar} color={bar < 0.25 ? '#D97706' : L.teal}>
                <div style={{ fontSize: 24, fontWeight: 800, color: L.slate }}>SLA</div>
              </Ring>
              <div>
                <div style={{ fontSize: 24, color: L.slate, fontWeight: 600, letterSpacing: 0.5 }}>TIME LEFT</div>
                <div style={{ fontSize: 76, fontWeight: 800, fontVariantNumeric: 'tabular-nums', color: L.tealDark, letterSpacing: -1 }}>{timer}</div>
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
  </AbsoluteFill>
);
