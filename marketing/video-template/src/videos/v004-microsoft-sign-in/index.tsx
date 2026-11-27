import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { BRAND } from '../../brand/brand';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';

import { Subtitles } from '../../template/Subtitles';
import { Avatar, Chip, Cursor, Panel, Part, Pop, useVideoFrame } from '../../template/ui';
import { SCRIPT, SUBTITLES } from './script';

const C = BRAND.colors;
const SIGNIN_CLICK = 5.1;
const CONFIRM_CLICK = 10.0;

/** Scene 1: a list that is typed by hand, then the Microsoft sign-in button is clicked. */
const SignInScene: React.FC = () => {
  const frame = useVideoFrame();
  const typed = interpolate(frame, [10, 90], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const handList = interpolate(frame, [100, 114], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const signedIn = frame >= Math.round(SIGNIN_CLICK * 30);
  return (
    <LightBackground>
      <Kicker text="MICROSOFT SIGN-IN" />
      <KineticHeadline lines={['Add your whole', 'company.']} />
      <div style={{ position: 'absolute', left: 90, top: 440, width: 900, opacity: handList }}>
        <Panel>
          {[0, 1, 2, 3].map((i) => {
            const text = 'Name: ' + ['A. Hassan', 'M. Ali', 'S. Omar', 'N. Farid'][i];
            const n = Math.floor(Math.min(1, Math.max(0, typed * 4 - i)) * text.length);
            return (
              <div key={i} style={{ fontSize: 40, padding: '18px 0', borderBottom: '1.5px solid rgba(15,26,67,0.09)', color: L.slate, minHeight: 50 }}>
                {text.slice(0, n)}
                {n > 0 && n < text.length ? '▏' : ''}
              </div>
            );
          })}
        </Panel>
      </div>
      <Pop atSec={3.7} style={{ position: 'absolute', left: 140, top: 480, width: 800 }}>
        <Panel style={{ textAlign: 'center', padding: '56px 44px' }}>
          <div style={{ fontSize: 30, color: L.slate, marginBottom: 28 }}>TickFlowAI</div>
          <div
            style={{
              height: 108,
              borderRadius: 18,
              background: signedIn ? '#15803D' : '#FFFFFF',
              color: signedIn ? '#FFFFFF' : '#1B1B1F',
              border: '2px solid rgba(15,26,67,0.15)',
              fontSize: 36,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 18,
            }}
          >
            {signedIn ? 'Signed in ✓' : 'Sign in with Microsoft Entra ID'}
          </div>
        </Panel>
      </Pop>
      <Cursor from={{ x: 820, y: 900 }} to={{ x: 640, y: 622 }} startSec={4.3} endSec={5.0} clickSec={SIGNIN_CLICK} />
    </LightBackground>
  );
};

/** Scene 2: directory sync. People appear, are reviewed, new users are confirmed. */
const SyncScene: React.FC = () => {
  const frame = useVideoFrame();
  const confirmed = frame >= Math.round(CONFIRM_CLICK * 30);
  const reviewed = frame >= Math.round(8.3 * 30);
  return (
    <LightBackground>
      <Kicker text="DIRECTORY SYNC" />
      <KineticHeadline lines={['Sync your directory.']} />
      <Pop atSec={6.0} style={{ position: 'absolute', left: 80, top: 380, width: 920 }}>
        <Panel style={{ minHeight: 700 }}>
          {SCRIPT.people.map((p) => (
            <Pop key={p.initials} atSec={p.at} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22, background: 'rgba(15,26,67,0.045)', borderRadius: 20, padding: '18px 26px' }}>
                <Avatar letter={p.initials} size={64} bg="rgba(15,26,67,0.10)" color={C.text} />
                <div style={{ flex: 1, fontSize: 34, fontWeight: 600 }}>{p.role}</div>
                {confirmed ? (
                  <Chip bg="rgba(37,211,102,0.16)" color="#4BE08A">Confirmed ✓</Chip>
                ) : reviewed ? (
                  <Chip bg="rgba(245,176,65,0.18)" color="#F5B041">New user</Chip>
                ) : (
                  <Chip bg="rgba(61,169,219,0.18)" color="#7CC8EE">Found</Chip>
                )}
              </div>
            </Pop>
          ))}
          <Pop atSec={9.0} style={{ marginTop: 26 }}>
            <div style={{ height: 96, borderRadius: 18, background: confirmed ? '#15803D' : L.tealDark, color: '#FFFFFF', fontSize: 34, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {confirmed ? 'New users confirmed ✓' : 'Confirm new users'}
            </div>
          </Pop>
        </Panel>
      </Pop>
      <Cursor from={{ x: 800, y: 1170 }} to={{ x: 520, y: 1110 }} startSec={9.3} endSec={9.95} clickSec={CONFIRM_CLICK} />
    </LightBackground>
  );
};

export const V004_DURATION_SEC = SCRIPT.totalSec;

/** Video 004: sign in with Microsoft and sync your directory (Expert tone), with voice and English subtitles. */
export const V004MicrosoftSignIn: React.FC = () => {
  useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: '#05070F' }}>
      <Audio src={staticFile(SCRIPT.voiceFile)} />
      <Part from={SCRIPT.scenes.signIn.from} to={SCRIPT.scenes.signIn.to}><SignInScene /></Part>
      <Part from={SCRIPT.scenes.sync.from} to={SCRIPT.scenes.sync.to}><SyncScene /></Part>
      <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
        <LightEnd callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
      </Part>
      <Subtitles cues={SUBTITLES} />
    </AbsoluteFill>
  );
};
