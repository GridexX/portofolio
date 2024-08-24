module.exports = {
  email: 'arsene582@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/gridexx',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arsene.fgr',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/gridexx',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arsène-fougerouse-6a65a01b6',
    },
    {
      name: 'Codepen',
      url: 'https://gridexx.github.io/open-sources-contribution/contributions/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#ef961a',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
