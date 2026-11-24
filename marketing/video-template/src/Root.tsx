import React from 'react';
import { Composition } from 'remotion';
import { VIDEO_FORMAT } from './brand/brand';
import { V001_DURATION_SEC, V001WhatsAppToTicket } from './videos/v001-whatsapp-to-ticket';

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
  </>
);
