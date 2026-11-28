import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile } from 'remotion';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';
import { Burst, CountUp, Fly, Ping, Ring, Shine } from '../../template/Motion';
import { Avatar, Cursor, Part, Pop, useVideoFrame } from '../../template/ui';
import { SCRIPT } from '../v004-microsoft-sign-in/script';

const SIGNIN_CLICK = 5.1;
const CONFIRM_CLICK = 10.0;
const MS_BLUE = '#0067B8';
const FONT = '"Segoe UI", "Segoe UI Variable", system-ui, sans-serif';
const ease = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

const MsLogo: React.FC<{ s?: number }> = ({ s = 34 }) => (
  <svg width={s} height={s} viewBox="0 0 40 40"><rect x="2" y="2" width="17" height="17" fill="#F25022" /><rect x="21" y="2" width="17" height="17" fill="#7FBA00" /><rect x="2" y="21" width="17" height="17" fill="#00A4EF" /><rect x="21" y="21" width="17" height="17" fill="#FFB900" /></svg>
);

/** A TickFlowAI app window frame: dark navy sidebar, white content. Drawn example. */
const AppWindow: React.FC<{ title: string; children: React.ReactNode; top?: number }> = ({ title, children, top = 400 }) => (
  <div style={{ position: 'absolute', left: 70, top, width: 940, height: 760, borderRadius: 16, overflow: 'hidden', background: '#fff', border: `1px solid ${L.border}`, boxShadow: '0 20px 50px rgba(15,26,67,0.18)', display: 'flex', fontFamily: FONT }}>
    <div style={{ width: 200, background: L.navy, color: '#C3CBE8', padding: '26px 18px', fontSize: 22 }}>
      <div style={{ color: '#fff', fontWeight: 800, fontSize: 26, marginBottom: 22 }}>TickFlowAI</div>
      {['Tickets', 'Catalog', 'SLA', 'Users', 'Settings'].map((x) => (
        <div key={x} style={{ padding: '10px 12px', borderRadius: 8, marginBottom: 6, background: x === 'Settings' ? 'rgba(6,210,180,0.18)' : undefined, color: x === 'Settings' ? '#5EEAD4' : undefined, fontWeight: x === 'Settings' ? 700 : 500 }}>{x}</div>
      ))}
    </div>
    <div style={{ flex: 1, padding: '26px 30px', position: 'relative' }}>
      <div style={{ fontSize: 22, color: L.slate }}>Settings / Users</div>
      <div style={{ fontSize: 36, fontWeight: 700, margin: '4px 0 18px' }}>{title}</div>
      {children}
    </div>
  </div>
);

/** Scene 1: the manual Users page, then a Microsoft sign-in window opens on top. */
const SignInScene: React.FC = () => {
  const f = useVideoFrame();
  const signed = f >= Math.round(SIGNIN_CLICK * 30);
  const closing = ease(f, Math.round((SIGNIN_CLICK + 0.4) * 30), Math.round((SIGNIN_CLICK + 0.7) * 30));
  return (
    <LightBackground>
      <Kicker text="MICROSOFT SIGN-IN" />
      <KineticHeadline lines={['Add your whole', 'company.']} />
      <Pop atSec={0.3}>
        <AppWindow title="Users">
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <div style={{ background: L.tealDark, color: '#fff', padding: '10px 22px', borderRadius: 8, fontSize: 22, fontWeight: 600 }}>+ Add user</div>
            <div style={{ border: '1.5px solid #BDBDBD', padding: '10px 22px', borderRadius: 8, fontSize: 22 }}>Import</div>
          </div>
          {['A. Hassan', 'M. Ali', 'S. Omar', 'N. Farid'].map((n, i) => {
            const t = ease(f, 12 + i * 20, 12 + i * 20 + 16);
            return (
              <div key={n} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 0', borderBottom: `1.5px solid ${L.soft}`, opacity: t, fontSize: 26 }}>
                <Avatar letter={n[0]} size={44} bg="rgba(15,26,67,0.10)" color={L.navy} />
                {n}
              </div>
            );
          })}
        </AppWindow>
      </Pop>
      {/* Microsoft sign-in window */}
      <Fly atSec={3.6} dy={80} style={{ position: 'absolute', left: 210, top: 560, width: 660, opacity: 1 - closing, transform: `translateY(${-30 * closing}px)` }}>
        <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 30px 70px rgba(0,0,0,0.3)', border: '1px solid #D2D0CE', fontFamily: FONT, overflow: 'hidden' }}>
          <div style={{ height: 46, background: '#F3F2F1', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 18, color: '#323130', gap: 10 }}>
            <MsLogo s={20} /> Sign in to your account
          </div>
          <div style={{ padding: '36px 44px 40px' }}>
            <MsLogo s={40} />
            <div style={{ fontSize: 42, fontWeight: 600, color: '#1B1B1B', margin: '18px 0 6px' }}>Sign in</div>
            <div style={{ fontSize: 24, color: '#605E5C', marginBottom: 22 }}>Use your work account</div>
            <div style={{ borderBottom: `2px solid ${MS_BLUE}`, fontSize: 26, color: '#1B1B1B', padding: '8px 0' }}>name@company.com</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 34 }}>
              <div style={{ background: signed ? '#15803D' : MS_BLUE, color: '#fff', fontSize: 26, fontWeight: 600, padding: '12px 46px' }}>{signed ? 'Signed in ✓' : 'Next'}</div>
            </div>
          </div>
        </div>
      </Fly>
      <Ping x={540} y={620} atSec={3.7} color={MS_BLUE} size={240} />
      <Burst x={700} y={870} atSec={SIGNIN_CLICK} check={false} />
      <Cursor from={{ x: 880, y: 1230 }} to={{ x: 740, y: 874 }} startSec={4.3} endSec={5.0} clickSec={SIGNIN_CLICK} />
    </LightBackground>
  );
};

const PEOPLE = SCRIPT.people;

/** Scene 2: Directory page. A ring shows the sync, found people are reviewed, then confirmed. */
const SyncScene: React.FC = () => {
  const f = useVideoFrame();
  const confirmF = Math.round(CONFIRM_CLICK * 30);
  const confirmed = f >= confirmF;
  const prog = ease(f, Math.round(6.1 * 30), Math.round(8.2 * 30));
  return (
    <LightBackground>
      <Kicker text="DIRECTORY SYNC" />
      <KineticHeadline lines={['Sync your directory.']} />
      <Pop atSec={5.9}>
        <AppWindow title="Directory sync" top={380}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 14 }}>
            <Ring size={96} stroke={11} progress={prog} color={confirmed ? '#15803D' : L.teal}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>
                <CountUp from={0} to={PEOPLE.length} startSec={6.1} endSec={8.2} />
              </div>
            </Ring>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>{prog < 1 ? 'Syncing from Microsoft Entra ID...' : 'People found'}</div>
              <div style={{ fontSize: 20, color: L.slate }}>Review them before they become users</div>
            </div>
          </div>
          {PEOPLE.map((p, i) => {
            const checked = f >= Math.round((8.4 + i * 0.25) * 30);
            return (
              <Fly key={p.initials} atSec={p.at} dx={60} dy={0} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', borderRadius: 10, background: 'rgba(15,26,67,0.04)', fontSize: 26 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 6, border: `2px solid ${checked ? '#15803D' : '#8A8886'}`, background: checked ? '#15803D' : '#fff', color: '#fff', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{checked ? '✓' : ''}</div>
                  <Avatar letter={p.initials} size={44} bg="rgba(15,26,67,0.10)" color={L.navy} />
                  <div style={{ flex: 1, fontWeight: 600 }}>{p.role}</div>
                  <div style={{ fontSize: 20, padding: '3px 14px', borderRadius: 999, background: confirmed ? 'rgba(22,163,74,0.14)' : 'rgba(217,119,6,0.14)', color: confirmed ? '#15803D' : '#B45309', fontWeight: 700 }}>{confirmed ? 'User' : 'New'}</div>
                </div>
              </Fly>
            );
          })}
          <Pop atSec={9.0} style={{ position: 'absolute', left: 30, right: 30, bottom: 26 }}>
            <div style={{ height: 70, borderRadius: 8, background: confirmed ? '#15803D' : L.tealDark, color: '#fff', fontSize: 26, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {confirmed ? 'New users confirmed ✓' : 'Confirm new users'}
            </div>
          </Pop>
        </AppWindow>
      </Pop>
      <Burst x={720} y={1010} atSec={CONFIRM_CLICK} check={false} />
      <Cursor from={{ x: 880, y: 1260 }} to={{ x: 700, y: 1085 }} startSec={9.3} endSec={9.95} clickSec={CONFIRM_CLICK} />
    </LightBackground>
  );
};

export const V004C_DURATION_SEC = SCRIPT.totalSec;

/** Video 004, idea C: real-looking windows (Microsoft sign-in, TickFlowAI directory page). No captions. */
export const V004CRealWindows: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.signIn.from} to={SCRIPT.scenes.signIn.to}><SignInScene /></Part>
    <Part from={SCRIPT.scenes.sync.from} to={SCRIPT.scenes.sync.to}><SyncScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <LightEnd callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
  </AbsoluteFill>
);
