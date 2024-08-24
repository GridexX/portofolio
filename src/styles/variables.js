import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #272831;
    --navy: #23232c;
    --light-navy: #272831;
    --lightest-navy: #233554;
    --navy-shadow: rgba(23, 23, 30, 0.7);
    --dark-slate: #495060;
    --slate: #a1a2af;
    --light-slate: #a8b2c1;
    --lightest-slate: #ececf1;
    --white: #e6f1ff;
    --green: #ef961a;

    --font-title: 'Paytone One';
    --font-texts: 'Cambay';
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'Raleway', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 14px;
    --fz-xs: 18px;
    --fz-sm: 16px;
    --fz-md: 20px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;
    --fz-heading: 30px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.35s cubic-bezier(0, 0.07, 0.13, 1.16);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
