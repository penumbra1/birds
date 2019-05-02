import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  scaleRatio: 3.5,
  googleFonts: [
    {
      name: 'Cormorant SC',
      styles: ['600', '700'],
    },
    {
      name: 'Cormorant Garamond',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Montserrat',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Cormorant SC', 'serif'],
  headerWeight: 600,
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h2: { fontWeight: '700' },
    'h2 span': {
      fontFamily: ['Cormorant Garamond', 'serif'].join(','),
      fontStyle: 'italic',
      ...adjustFontSizeTo('1.65rem'),
    },
  }),
})

export default typography
