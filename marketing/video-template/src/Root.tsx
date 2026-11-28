import React from 'react';
import { Composition, Still } from 'remotion';
import { PostCard } from './template/PostCard';
import { POST_CARDS } from './posts/week1';
import { VIDEO_FORMAT } from './brand/brand';
import { V001_DURATION_SEC, V001WhatsAppToTicket } from './videos/v001-whatsapp-to-ticket';
import { V002_DURATION_SEC, V002TeamsApproval } from './videos/v002-teams-approval';
import { V003_DURATION_SEC, V003OneTicketList } from './videos/v003-one-ticket-list';
import { V004_DURATION_SEC, V004MicrosoftSignIn } from './videos/v004-microsoft-sign-in';
import { V004A_DURATION_SEC, V004ATypingVsSync } from './videos/v004a-typing-vs-sync';
import { V004C_DURATION_SEC, V004CRealWindows } from './videos/v004c-real-windows';
import { V005_DURATION_SEC, V005TicketOwner } from './videos/v005-ticket-owner';

/** All videos. Add one Composition per new video; reuse the template parts. */
export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="v001-whatsapp-to-ticket"
      component={V001WhatsAppToTicket}
      durationInFrames={Math.round(V001_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v002-teams-approval"
      component={V002TeamsApproval}
      durationInFrames={Math.round(V002_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v003-one-ticket-list"
      component={V003OneTicketList}
      durationInFrames={Math.round(V003_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v004-microsoft-sign-in"
      component={V004MicrosoftSignIn}
      durationInFrames={Math.round(V004_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v004a-typing-vs-sync"
      component={V004ATypingVsSync}
      durationInFrames={Math.round(V004A_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v004c-real-windows"
      component={V004CRealWindows}
      durationInFrames={Math.round(V004C_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    <Composition
      id="v005-ticket-owner"
      component={V005TicketOwner}
      durationInFrames={Math.round(V005_DURATION_SEC * VIDEO_FORMAT.fps)}
      fps={VIDEO_FORMAT.fps}
      width={VIDEO_FORMAT.width}
      height={VIDEO_FORMAT.height}
    />
    {(Object.keys(POST_CARDS) as (keyof typeof POST_CARDS)[]).map((id) => (
      <Still key={id} id={id} component={() => <PostCard {...POST_CARDS[id]} />} width={VIDEO_FORMAT.width} height={VIDEO_FORMAT.height} />
    ))}
  </>
);
