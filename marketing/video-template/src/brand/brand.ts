/**
 * Brand settings for every TickFlowAI video.
 * Colors and fonts come from Sara's identity file. Logo: official SVG from Sara's brand identity folder.
 * Change values here only; never inside a video.
 */
export const BRAND = {
  name: 'TickFlowAI',
  colors: {
    // From TickFlowAI identity file (tokens.css and logo files), 24 Nov 2026
    background: '#0F1A43', // brand navy
    backgroundDeep: '#05070F', // dark page background
    surface: '#0B1020', // dark card
    primary: '#1BB6A0', // brand teal (dark mode)
    accent: '#2DD4BF', // brand teal text (dark mode)
    mintStart: '#53E8AD', // logo gradient start
    skyEnd: '#3DA9DB', // logo gradient end
    logoTeal: '#00C7B1',
    text: '#F0F2F8',
    textMuted: '#9AA4BC',
    subtitleBg: 'rgba(5, 7, 15, 0.78)',
    whatsappGreen: '#25D366',
    whatsappBubbleIn: '#FFFFFF',
    whatsappChatBg: '#ECE5DD',
  },
  font: {
    family: 'Inter, system-ui, sans-serif',
    arabic: '"IBM Plex Sans Arabic", Inter, system-ui, sans-serif',
  },
  /** Real logo (white wordmark, for dark backgrounds), from Sara's brand identity folder. */
  logoFile: 'brand/logo-dark.svg' as string | null,
} as const;

/** LinkedIn feed portrait format (4:5). */
export const VIDEO_FORMAT = {
  width: 1080,
  height: 1350,
  fps: 30,
} as const;
