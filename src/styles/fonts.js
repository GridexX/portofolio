import { css } from 'styled-components';

import CalibreRegularWoff from '@fonts/Calibre/Calibre-Regular.woff';
import CalibreRegularWoff2 from '@fonts/Calibre/Calibre-Regular.woff2';
import CalibreMediumWoff from '@fonts/Calibre/Calibre-Medium.woff';
import CalibreMediumWoff2 from '@fonts/Calibre/Calibre-Medium.woff2';
import CalibreSemiboldWoff from '@fonts/Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWoff2 from '@fonts/Calibre/Calibre-Semibold.woff2';

import CalibreRegularItalicWoff from '@fonts/Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWoff2 from '@fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumItalicWoff from '@fonts/Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWoff2 from '@fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldItalicWoff from '@fonts/Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWoff2 from '@fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularWoff from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

import MartianMonoRegular from '@fonts/Martian_Mono/MartianMono-Regular.ttf';
import MartianMonoMedium from '@fonts/Martian_Mono/MartianMono-Medium.ttf';
import MartianMonoSemibold from '@fonts/Martian_Mono/MartianMono-SemiBold.ttf';

const calibreNormalWeights = {
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const martianMonoNormalWeights = {
  400: [MartianMonoRegular],
  500: [MartianMonoMedium],
  600: [MartianMonoSemibold],
};

const martianMono = {
  name: 'Martian Mono',
  normal: martianMonoNormalWeights,
};

const createCustomFont = (family, style = 'normal') => {
  let styles = '';
  for (const [weight, formats] of Object.entries(family[style])) {
    const ttf = formats[0];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${ttf});
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const martianMonoNormal = createCustomFont(martianMono);

const righteousRegular = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
.righteous-regular {
  font-family: "Righteous", sans-serif;
  font-weight: 400;
  font-style: normal;
}
`;

const paytoneRegular = `
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cambay:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet">
.paytone-one-regular {
  font-family: "Paytone One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
`;

const cambayFont = `
<link href="https://fonts.googleapis.com/css2?family=Cambay:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

.cambay-regular {
  font-family: "Cambay", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.cambay-bold {
  font-family: "Cambay", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.cambay-regular-italic {
  font-family: "Cambay", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.cambay-bold-italic {
  font-family: "Cambay", sans-serif;
  font-weight: 700;
  font-style: italic;
}

`;
const Fonts = css`
  ${righteousRegular +
  paytoneRegular +
  cambayFont +
  calibreNormal +
  calibreItalic +
  sfMonoNormal +
  sfMonoItalic +
  martianMonoNormal}
`;

export default Fonts;
