import React from 'react';
import { AbsoluteFill, Audio, interpolate, staticFile, useVideoConfig } from 'remotion';
import { BRAND } from '../../brand/brand';
import { KineticHeadline, Kicker, L, LightBackground, LightEnd } from '../../template/Light';

import { Avatar, Cursor, Part, Pop, useVideoFrame } from '../../template/ui';
import { Burst, Fly, Ping, Shine } from '../../template/Motion';
import { SCRIPT, SUBTITLES } from './script';

const C = BRAND.colors;
const TEAMS = '#5B5FC7';
const CLICK_SEC = 6.6;
/** Where the Approve button sits on screen (video pixels). */
const BTN = { x: 355, y: 790 };

/** Main scene: a Teams chat window. The bot posts an approval card, the approver clicks Approve. */
const ApprovalScene: React.FC = () => {
  const frame = useVideoFrame();
  const { fps } = useVideoConfig();
  const clickF = Math.round(CLICK_SEC * fps);
  const approved = frame >= clickF;
  const glow = approved ? Math.max(0, 1 - (frame - clickF) / 40) : 0;
  // Notification toast: drops in, then leaves upward before the window opens (no overlap).
  const toastOut = interpolate(frame, [44, 58], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const rail = ['Activity', 'Chat', 'Teams', 'Calendar'];
  const FONT = '"Segoe UI", "Segoe UI Variable", system-ui, sans-serif';
  const BORDER = '#E1E1E6';
  return (
    <LightBackground>
      <Kicker text="TEAMS APPROVAL" />
      <KineticHeadline lines={['A request needs', 'your approval.']} />
      <Fly atSec={0.9} dy={-160} style={{ position: 'absolute', left: 250, top: 400, width: 580, opacity: 1 - toastOut, transform: `translateY(${-70 * toastOut}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', borderRadius: 12, padding: '18px 24px', boxShadow: '0 18px 44px rgba(15,26,67,0.2)', border: `1px solid ${BORDER}`, fontFamily: FONT }}>
          <div style={{ width: 52, height: 52, borderRadius: 12, background: TEAMS, color: '#fff', fontWeight: 700, fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>T</div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>TickFlowAI</div>
            <div style={{ fontSize: 22, color: '#616161' }}>New approval request</div>
          </div>
        </div>
      </Fly>
      <Ping x={540} y={430} atSec={1.1} color={TEAMS} size={300} />
      <Pop atSec={2.1} style={{ position: 'absolute', left: 70, top: 400, width: 940, filter: glow > 0 ? `drop-shadow(0 0 ${40 * glow}px rgba(21,128,61,${0.6 * glow}))` : undefined }}>
        <div style={{ borderRadius: 14, overflow: 'hidden', background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 14px 40px rgba(15,26,67,0.14)', height: 720, position: 'relative', display: 'flex', fontFamily: FONT, color: '#242424' }}>
          <Shine atSec={2.9} radius={14} />
          {/* Left app rail, like the Teams desktop app */}
          <div style={{ width: 96, background: '#EBEBF0', borderRight: `1px solid ${BORDER}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, paddingTop: 26 }}>
            {rail.map((r, i) => (
              <div key={r} style={{ width: 64, textAlign: 'center', fontSize: 15, color: i === 1 ? TEAMS : '#616161', fontWeight: i === 1 ? 700 : 500 }}>
                <div style={{ width: 40, height: 40, margin: '0 auto 4px', borderRadius: 10, background: i === 1 ? 'rgba(91,95,199,0.16)' : 'rgba(0,0,0,0.06)' }} />
                {r}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#F5F5F8' }}>
            {/* Conversation header */}
            <div style={{ height: 84, background: '#fff', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 28px' }}>
              <Avatar letter="TF" size={50} />
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>TickFlowAI</div>
                <div style={{ fontSize: 18, color: '#616161' }}>Approvals bot</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 22, fontSize: 20, color: TEAMS, fontWeight: 600 }}>
                <span>Chat</span>
                <span style={{ color: '#616161', fontWeight: 400 }}>Files</span>
              </div>
            </div>
            {/* Messages */}
            <div style={{ flex: 1, padding: '22px 28px', position: 'relative' }}>
              <div style={{ textAlign: 'center', fontSize: 17, color: '#616161', marginBottom: 16 }}>Today</div>
              <div style={{ display: 'flex', gap: 14 }}>
                <Avatar letter="TF" size={46} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, color: '#616161', marginBottom: 6 }}>
                    <b style={{ color: '#242424' }}>TickFlowAI</b> &nbsp; 9:41 AM
                  </div>
                  {/* Adaptive card */}
                  <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `5px solid ${TEAMS}`, borderRadius: 8, padding: '22px 26px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: TEAMS, letterSpacing: 0.4 }}>APPROVAL REQUEST</div>
                    <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6 }}>{SCRIPT.card.title}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', rowGap: 8, marginTop: 14, fontSize: 22 }}>
                      <div style={{ color: '#616161' }}>Requested by</div>
                      <div>{SCRIPT.card.requester.replace('Requested by: ', '')}</div>
                      <div style={{ color: '#616161' }}>Status</div>
                      <div style={{ fontWeight: 700, color: approved ? '#107C10' : '#8A5A00' }}>{approved ? 'Approved by you' : SCRIPT.card.waiting}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 16, marginTop: 22 }}>
                      <div style={{ height: 58, padding: '0 40px', borderRadius: 6, background: approved ? '#107C10' : TEAMS, color: '#fff', fontSize: 24, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 170 }}>
                        {approved ? 'Approved ✓' : 'Approve'}
                      </div>
                      <div style={{ height: 58, padding: '0 40px', borderRadius: 6, border: '1.5px solid #BDBDBD', background: '#fff', color: '#242424', fontSize: 24, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: approved ? 0.45 : 1 }}>
                        Reject
                      </div>
                    </div>
                  </div>
                  {approved ? (
                    <Fly atSec={CLICK_SEC + 0.4} dy={20} style={{ marginTop: 14, fontSize: 19, color: '#616161' }}>
                      You approved this request · just now
                    </Fly>
                  ) : null}
                </div>
              </div>
            </div>
            {/* Compose box */}
            <div style={{ margin: '0 28px 22px', height: 58, borderRadius: 8, border: `1px solid ${BORDER}`, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 20px', fontSize: 20, color: '#8A8A8A' }}>Type a new message</div>
          </div>
        </div>
      </Pop>
      <Burst x={BTN.x + 480} y={BTN.y - 20} atSec={CLICK_SEC} />
      <AbsoluteFill>
        <Cursor from={{ x: 800, y: 1000 }} to={{ x: BTN.x, y: BTN.y }} startSec={5.5} endSec={6.5} clickSec={CLICK_SEC} />
      </AbsoluteFill>
    </LightBackground>
  );
};

export const V002_DURATION_SEC = SCRIPT.totalSec;

/** Video 002: approve a request from Microsoft Teams (Friendly tone), with voice and English subtitles. */
export const V002TeamsApproval: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.main.from} to={SCRIPT.scenes.main.to}><ApprovalScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <LightEnd callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
  </AbsoluteFill>
);
