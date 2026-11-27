import React from 'react';
import { AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND } from '../../brand/brand';
import { BrandBackground } from '../../template/BrandBackground';
import { EndCard } from '../../template/EndCard';
import { Subtitles } from '../../template/Subtitles';
import { Avatar, Chip, Cursor, Headline, Part, Pop } from '../../template/ui';
import { SCRIPT, SUBTITLES } from './script';

const C = BRAND.colors;
const TEAMS = '#5B5FC7';
const CLICK_SEC = 6.6;

/** Main scene: a Teams window gets an approval card, the approver clicks Approve. */
const ApprovalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const approved = frame >= Math.round(CLICK_SEC * fps);
  return (
    <BrandBackground>
      <Headline text={SCRIPT.headline} />
      <Pop atSec={1.7} style={{ position: 'absolute', left: 90, top: 330, width: 900 }}>
        <div style={{ borderRadius: 30, overflow: 'hidden', background: '#1F1F2E', border: '1.5px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)', height: 660, position: 'relative' }}>
          <div style={{ background: TEAMS, height: 74, display: 'flex', alignItems: 'center', gap: 16, padding: '0 30px', fontSize: 28, fontWeight: 700 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', color: TEAMS, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>T</div>
            Microsoft Teams
          </div>
          <div style={{ padding: '34px 44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <Avatar letter="TF" size={66} />
              <div>
                <div style={{ fontSize: 32, fontWeight: 700 }}>TickFlowAI</div>
                <div style={{ fontSize: 23, color: C.textMuted }}>Approval request</div>
              </div>
            </div>
            <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: -0.8, marginTop: 34 }}>{SCRIPT.card.title}</div>
            <div style={{ fontSize: 27, color: C.textMuted, marginTop: 10 }}>{SCRIPT.card.requester}</div>
            <div style={{ marginTop: 24, display: 'inline-block' }}>
              {approved ? (
                <Chip bg="rgba(37,211,102,0.18)" color="#4BE08A">{SCRIPT.card.done}</Chip>
              ) : (
                <Chip bg="rgba(245,176,65,0.18)" color="#F5B041">{SCRIPT.card.waiting}</Chip>
              )}
            </div>
          </div>
          <div style={{ position: 'absolute', left: 44, bottom: 44, display: 'flex', gap: 24 }}>
            <div style={{ width: 380, height: 96, borderRadius: 18, background: approved ? '#22A06B' : C.primary, color: '#04201C', fontSize: 34, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {approved ? 'Approved ✓' : 'Approve'}
            </div>
            <div style={{ width: 380, height: 96, borderRadius: 18, background: 'rgba(255,255,255,0.1)', color: C.text, fontSize: 34, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: approved ? 0.4 : 1 }}>
              Reject
            </div>
          </div>
        </div>
      </Pop>
      <AbsoluteFill>
        <Cursor from={{ x: 760, y: 1010 }} to={{ x: 300, y: 905 }} startSec={5.5} endSec={6.5} clickSec={CLICK_SEC} />
      </AbsoluteFill>
    </BrandBackground>
  );
};

export const V002_DURATION_SEC = SCRIPT.totalSec;

/** Video 002: approve a request from Microsoft Teams (Friendly tone), with voice and English subtitles. */
export const V002TeamsApproval: React.FC = () => (
  <AbsoluteFill style={{ background: '#05070F' }}>
    <Audio src={staticFile(SCRIPT.voiceFile)} />
    <Part from={SCRIPT.scenes.main.from} to={SCRIPT.scenes.main.to}><ApprovalScene /></Part>
    <Part from={SCRIPT.scenes.end.from} to={SCRIPT.scenes.end.to}>
      <EndCard callToAction={SCRIPT.endCard.callToAction} smallLine={SCRIPT.endCard.smallLine} />
    </Part>
    <Subtitles cues={SUBTITLES} />
  </AbsoluteFill>
);
