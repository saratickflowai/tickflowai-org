/**
 * Brand settings for every TickFlowAI video.
 * PLACEHOLDER values until Sara sends the real logo and colors.
 * Change values here only; never inside a video.
 */
export const BRAND = {
  name: 'TickFlowAI',
  colors: {
    background: '#0B1B33',
    surface: '#13294B',
    primary: '#2F80ED',
    accent: '#27C2A0',
    text: '#FFFFFF',
    textMuted: '#A9B8D0',
    subtitleBg: 'rgba(0, 0, 0, 0.72)',
    whatsappGreen: '#25D366',
    whatsappBubbleIn: '#FFFFFF',
    whatsappBubbleOut: '#DCF8C6',
    whatsappChatBg: '#ECE5DD',
  },
  font: {
    family: 'Inter, "Helvetica Neue", Arial, sans-serif',
  },
  /** Set to a file name in /public (for example 'logo.png') when the real logo arrives. */
  logoFile: null as string | null,
} as const;

/** LinkedIn feed portrait format (4:5). */
export const VIDEO_FORMAT = {
  width: 1080,
  height: 1350,
  fps: 30,
} as const;
