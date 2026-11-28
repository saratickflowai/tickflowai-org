import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile } from 'remotion';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';
import { Burst, CountUp, Ping, Shine } from '../../template/Motion';
import { Avatar, Chip, Cursor, Part, Pop, useVideoFrame } from '../../template/ui';
import { SCRIPT } from '../v004-microsoft-sign-in/script';

const SIGNIN_CLICK = 5.1;
const CONFIRM_CLICK = 10.0;
const NAMES = ['A. Hassan', 'M. Alli', 'S. Omar', 'N. Fari'];
const TYPO = [false, true, false, true];
const MS_BLUE = '#0067B8';
const ease = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

/** Scene 1: typing by hand (typos) against one Microsoft sign-in. */
const SplitScene: React.FC = () => {
  const f = useVideoFrame();
  const signed = f >= Math.round(SIGNIN_CLICK * 30);
  return (
    <LightBackground>
      <Kicker text="MICROSOFT SIGN-IN" />
      <KineticHeadline lines={['Do not type', 'your company.']} />
      {/* Top: by hand */}
      <Pop atSec={0.2} style={{ position: 'absolute', left: 80, top: 420, width: 920 }}>
        <div style={{ background: '#fff', borderRadius: 24, border: `1.5px solid ${L.border}`, boxShadow: L.shadow, padding: '24px 34px', position: 'relative', opacity: signed ? 0.45 : 1 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: L.slate, letterSpacing: 1 }}>BY HAND</div>
          {NAMES.map((name, i) => {
            const t = ease(f, 12 + i * 22, 12 + i * 22 + 20);
            const n = Math.floor(t * name.length);
            const typoShow = TYPO[i] && f > 12 + i * 22 + 22 && f < 140;
            return (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 34, padding: '10px 0', borderBottom: `1.5px solid ${L.soft}`, minHeight: 56, color: typoShow ? '#B91C1C' : L.navy }}>
                <span style={{ flex: 1, textDecoration: typoShow ? 'underline wavy #B91C1C' : undefined }}>
                  {name.slice(0, n)}
                  {n > 0 && n < name.length ? '▏' : ''}
                </span>
                {typoShow ? <Chip bg="rgba(185,28,28,0.12)" color="#B91C1C" size={20}>typo</Chip> : null}
              </div>
            );
          })}
        </div>
      </Pop>
      {/* Bottom: one sign-in */}
      <Pop atSec={3.2} style={{ position: 'absolute', left: 80, top: 890, width: 920 }}>
        <div style={{ background: '#fff', borderRadius: 24, border: `1.5px solid ${L.border}`, boxShadow: L.shadow, padding: '24px 34px', position: 'relative' }}>
          <Shine atSec={3.6} radius={24} />
          <div style={{ fontSize: 24, fontWeight: 800, color: L.tealDark, letterSpacing: 1 }}>WITH SYNC</div>
          <div style={{ marginTop: 16, height: 100, borderRadius: 6, background: signed ? '#15803D' : '#fff', border: `2px solid ${signed ? '#15803D' : '#8A8886'}`, color: signed ? '#fff' : '#1B1B1F', fontSize: 34, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
            {signed ? (
              'Signed in ✓'
            ) : (
              <>
                <svg width="38" height="38" viewBox="0 0 40 40"><rect x="2" y="2" width="17" height="17" fill="#F25022" /><rect x="21" y="2" width="17" height="17" fill="#7FBA00" /><rect x="2" y="21" width="17" height="17" fill="#00A4EF" /><rect x="21" y="21" width="17" height="17" fill="#FFB900" /></svg>
                Sign in with Microsoft Entra ID
              </>
            )}
          </div>
        </div>
      </Pop>
      <Ping x={540} y={1030} atSec={3.5} color={MS_BLUE} size={220} />
      <Burst x={540} y={1030} atSec={SIGNIN_CLICK} check={false} />
      <Cursor from={{ x: 860, y: 1250 }} to={{ x: 540, y: 1030 }} startSec={4.3} endSec={5.0} clickSec={SIGNIN_CLICK} />
    </LightBackground>
  );
};

const PEOPLE = SCRIPT.people;

/** Scene 2: people found in the directory wait at the review gate. Confirm opens it. */
const GateScene: React.FC = () => {
  const f = useVideoFrame();
  const confirmF = Math.round(CONFIRM_CLICK * 30);
  const reviewed = (i: number) => f >= Math.round((8.3 + i * 0.22) * 30);
  const gateOpen = ease(f, confirmF, confirmF + 10);
  return (
    <LightBackground>
      <Kicker text="DIRECTORY SYNC" />
      <KineticHeadline lines={['You review', 'who joins.']} />
      {/* Source: Entra ID */}
      <Pop atSec={5.9} style={{ position: 'absolute', left: 80, top: 400, width: 920 }}>
        <div style={{ background: '#fff', borderRadius: 24, border: `1.5px solid ${L.border}`, boxShadow: L.shadow, height: 250, padding: '22px 34px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, fontWeight: 800, color: L.slate }}>
            <svg width="34" height="34" viewBox="0 0 40 40"><rect x="2" y="2" width="17" height="17" fill="#F25022" /><rect x="21" y="2" width="17" height="17" fill="#7FBA00" /><rect x="2" y="21" width="17" height="17" fill="#00A4EF" /><rect x="21" y="21" width="17" height="17" fill="#FFB900" /></svg>
            MICROSOFT ENTRA ID
            <span style={{ marginLeft: 'auto', fontSize: 24, color: L.tealDark }}>
              <CountUp from={0} to={PEOPLE.length} startSec={7.0} endSec={7.6} /> people found
            </span>
          </div>
        </div>
      </Pop>
      {/* Gate */}
      <div style={{ position: 'absolute', left: 80, top: 690, width: 920, height: 110 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 50, height: 0, borderTop: `5px dashed ${L.teal}`, opacity: 1 - gateOpen * 0.6 }} />
        <div style={{ position: 'absolute', left: 300, top: 0, width: 320, height: 100, borderRadius: 20, background: gateOpen > 0.5 ? '#15803D' : L.navy, color: '#fff', fontSize: 30, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, boxShadow: '0 12px 30px rgba(15,26,67,0.25)' }}>
          {gateOpen > 0.5 ? 'Gate open ✓' : '🔒 Review gate'}
        </div>
      </div>
      {/* Destination */}
      <Pop atSec={6.2} style={{ position: 'absolute', left: 80, top: 930, width: 920 }}>
        <div style={{ background: '#fff', borderRadius: 24, border: `1.5px solid ${L.border}`, boxShadow: L.shadow, height: 250, padding: '22px 34px' }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: L.tealDark }}>TICKFLOWAI USERS</div>
        </div>
      </Pop>
      {/* People travelling from top card, held at the gate until Confirm */}
      {PEOPLE.map((p, i) => {
        const appear = ease(f, Math.round(p.at * 30), Math.round(p.at * 30) + 14);
        const go = ease(f, confirmF + 2 + i * 3, confirmF + 14 + i * 3);
        const y = interpolate(go, [0, 1], [500, 1050]);
        return (
          <div key={p.initials} style={{ position: 'absolute', left: 120 + i * 215, top: y, width: 190, opacity: appear, transform: `scale(${0.8 + appear * 0.2})`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ position: 'relative' }}>
              <Avatar letter={p.initials} size={84} bg="rgba(15,26,67,0.10)" color={L.navy} />
              {reviewed(i) ? (
                <div style={{ position: 'absolute', right: -10, bottom: -6, width: 38, height: 38, borderRadius: 19, background: '#15803D', color: '#fff', fontSize: 24, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
              ) : null}
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{p.role}</div>
          </div>
        );
      })}
      {/* Confirm button under the gate */}
      <Pop atSec={9.0} style={{ position: 'absolute', left: 300, top: 826, width: 480 }}>
        <div style={{ height: 80, borderRadius: 16, background: f >= confirmF ? '#15803D' : L.tealDark, color: '#fff', fontSize: 30, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {f >= confirmF ? 'New users confirmed ✓' : 'Confirm new users'}
        </div>
      </Pop>
      <Burst x={540} y={1060} atSec={CONFIRM_CLICK + 0.35} check={false} />
      <Cursor from={{ x: 860, y: 1250 }} to={{ x: 540, y: 866 }} startSec={9.3} endSec={9.95} clickSec={CONFIRM_CLICK} />
    </LightBackground>
  );
};

export const V004A_DURATION_SEC = SCRIPT.totalSec;

/** Video 004, idea A: typing by hand against Microsoft sign-in, ending on the review gate (idea B). No captions. */
export const V004ATypingVsSync: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.signIn.from} to={SCRIPT.scenes.signIn.to}><SplitScene /></Part>
    <Part from={SCRIPT.scenes.sync.from} to={SCRIPT.scenes.sync.to}><GateScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <LightEnd callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
  </AbsoluteFill>
);
