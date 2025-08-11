import localFont from 'next/font/local';

export const lato = localFont({
  variable: '--font--lato',
  src: [
    { path: '../public/fonts/Lato/Lato-Bold.woff' },
    { path: '../public/fonts/Lato/Lato-Regular.woff' },
    { path: '../public/fonts/Lato/Lato-Medium.woff' },
  ],
});

export const blue_curve = localFont({
  src: [
    { path: '../public/fonts/Blue_curve/Bluecurve-Light.ttf' },
    { path: '../public/fonts/Blue_curve/Bluecurve-Regular.ttf' },
    { path: '../public/fonts/Blue_curve/Bluecurve-Bold.ttf' },
  ],
});

export const ts_remarker = localFont({
  variable: '--font--ts-remarker',
  src: [
    { path: '../public/fonts/TS_remarker/TS_Remarker_Regular.otf' },
    { path: '../public/fonts/TS_remarker/TS_Remarker.ttf' },
  ],
}); 